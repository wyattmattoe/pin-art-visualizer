/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import * as THREE from 'three';
import {AfterimagePass} from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {RGBShiftShader} from 'three/examples/jsm/shaders/RGBShiftShader.js';
import type {AudioFrame} from './audioEngine';
import {SPECTRUM_BAND_COUNT, WAVEFORM_POINT_COUNT, createSilentAudioProvider} from './audioEngine';

type SceneController = {
  dispose: () => void;
};

type PinVisualizerSceneOptions = {
  getAudioFrame?: (time: number) => AudioFrame;
  onReady?: () => void;
};

type PinState = {
  x: number;
  y: number;
  centerDistance: number;
  normalizedX: number;
  normalizedY: number;
  currentZ: number;
  targetZ: number;
  velocityZ: number;
  currentColor: THREE.Color;
  targetColor: THREE.Color;
};

type BeatWave = {
  startedAt: number;
  strength: number;
};

type ReactiveShapeState = {
  baseX: number;
  baseY: number;
  baseZ: number;
  baseScale: number;
  phase: number;
  speed: number;
  spectrumT: number;
  spinX: number;
  spinY: number;
  spinZ: number;
  currentColor: THREE.Color;
  targetColor: THREE.Color;
};

type ProceduralElementState = {
  orbitRadiusX: number;
  orbitRadiusY: number;
  baseZ: number;
  baseScale: number;
  phase: number;
  speed: number;
  bandT: number;
  verticalPhase: number;
  currentColor: THREE.Color;
  targetColor: THREE.Color;
};

const PIN_COLUMNS = 124;
const PIN_ROWS = 76;
const PIN_COUNT = PIN_COLUMNS * PIN_ROWS;
const PIN_SPACING = 0.82;
const PIN_RADIUS = 0.15;
const PIN_LENGTH = 10;
const PIN_HOME_Z = -15;
const PIN_ROTATION_X = Math.PI / 2;
const FIELD_HALF_WIDTH = ((PIN_COLUMNS - 1) * PIN_SPACING) / 2;
const FIELD_HALF_HEIGHT = ((PIN_ROWS - 1) * PIN_SPACING) / 2;
const FIELD_RADIUS = Math.sqrt(FIELD_HALF_WIDTH * FIELD_HALF_WIDTH + FIELD_HALF_HEIGHT * FIELD_HALF_HEIGHT);

const RIPPLE_SPEED = 68;
const RIPPLE_DURATION_SECONDS = 1.65;
const RIPPLE_WIDTH = 7.2;
const MAX_BEAT_WAVES = 8;

const WAVE_RIBBON_COUNT = 7;
const WAVE_RIBBON_POINT_COUNT = 220;
const WAVE_RIBBON_WIDTH = FIELD_HALF_WIDTH * 2.45;
const WAVE_RIBBON_HEIGHT = FIELD_HALF_HEIGHT * 2.1;
const OUTER_RING_COUNT = 5;
const OUTER_RING_POINT_COUNT = 260;
const OUTER_RING_RADIUS_STEP = FIELD_RADIUS * 0.13;

const REACTIVE_SHAPE_COUNT_PER_KIND = 30;
const SHAPE_EDGE_X = FIELD_HALF_WIDTH * 0.92;
const SHAPE_EDGE_Y = FIELD_HALF_HEIGHT * 0.78;
const SHAPE_EDGE_DRIFT = 6.2;

const PROCEDURAL_ELEMENT_COUNT_PER_KIND = 18;
const PLASMA_FIELD_WIDTH = FIELD_HALF_WIDTH * 2.65;
const PLASMA_FIELD_HEIGHT = FIELD_HALF_HEIGHT * 2.35;

const SPRING_STIFFNESS = 0.085;
const SPRING_DAMPING = 0.76;
const COLOR_LERP_ALPHA = 0.12;

const FIREWORK_PARTICLE_COUNT = 3000;
const FIREWORK_GRAVITY = 60;
const FIREWORK_DRAG_PER_FRAME = 0.95;
const FIREWORK_FADE_PER_FRAME = 0.94;
const FIREWORK_LIFE_DRAIN_PER_SECOND = 0.48;
const HIDDEN_PARTICLE_POSITION = 9999;

const BACKGROUND_COLOR = new THREE.Color(0x080808);
const BRAND_COLORS = [
  new THREE.Color(0x4285f4),
  new THREE.Color(0xea4335),
  new THREE.Color(0xfbbc05),
  new THREE.Color(0x34a853),
] as const;

const WaveWarpShader = {
  uniforms: {
    tDiffuse: {value: null},
    time: {value: 0},
    strength: {value: 0},
    bass: {value: 0},
    mid: {value: 0},
    treble: {value: 0},
    beat: {value: 0},
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float strength;
    uniform float bass;
    uniform float mid;
    uniform float treble;
    uniform float beat;
    varying vec2 vUv;

    void main() {
      vec2 centered = vUv - 0.5;
      float dist = length(centered);
      float angle = atan(centered.y, centered.x);
      float edgeReach = smoothstep(0.15, 0.78, dist);
      vec2 radialDirection = centered / max(dist, 0.001);
      vec2 tangentDirection = vec2(-radialDirection.y, radialDirection.x);

      float radialWave = sin(dist * 44.0 - time * (2.1 + bass * 8.5) + beat * 4.0);
      float diagonalWave = sin(vUv.x * 15.0 + vUv.y * 19.0 + time * (1.4 + mid * 5.6));
      float swirlWave = sin(angle * 4.0 + dist * 28.0 - time * (1.7 + treble * 7.0));

      vec2 offset =
        radialDirection * radialWave * strength * (0.35 + edgeReach * 0.95) +
        tangentDirection * swirlWave * strength * 0.58 +
        vec2(diagonalWave, -diagonalWave) * strength * 0.26;

      vec4 color = texture2D(tDiffuse, vUv + offset);
      vec4 echo = texture2D(tDiffuse, vUv - offset * (1.55 + beat * 1.35));
      vec3 edgeBlue = vec3(0.2588, 0.5216, 0.9569);
      vec3 edgeRed = vec3(0.9176, 0.2627, 0.2078);
      vec3 edgeGold = vec3(0.9843, 0.7373, 0.0196);
      vec3 edgeGreen = vec3(0.2039, 0.6588, 0.3255);
      vec3 edgeTint = mix(mix(edgeBlue, edgeRed, 0.5 + 0.5 * sin(time * 0.31)), mix(edgeGold, edgeGreen, 0.5 + 0.5 * cos(time * 0.27)), 0.5 + 0.5 * sin(angle * 2.0 + time * 0.22));
      float edgeGlow = smoothstep(0.36, 0.82, dist) * (0.018 + bass * 0.14 + treble * 0.11 + beat * 0.16 + strength * 22.0);
      vec4 mixedColor = mix(color, echo, 0.07 + beat * 0.08);
      mixedColor.rgb = max(vec3(0.0), (mixedColor.rgb - vec3(0.018)) * (0.92 + beat * 0.22 + treble * 0.1));
      mixedColor.rgb += edgeTint * edgeGlow;
      gl_FragColor = mixedColor;
    }
  `,
};

const PlasmaFieldShader = {
  uniforms: {
    time: {value: 0},
    bass: {value: 0},
    lowMid: {value: 0},
    mid: {value: 0},
    highMid: {value: 0},
    treble: {value: 0},
    volume: {value: 0},
    beat: {value: 0},
    colorA: {value: new THREE.Color(0x4285f4)},
    colorB: {value: new THREE.Color(0xea4335)},
    colorC: {value: new THREE.Color(0xfbbc05)},
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform float bass;
    uniform float lowMid;
    uniform float mid;
    uniform float highMid;
    uniform float treble;
    uniform float volume;
    uniform float beat;
    uniform vec3 colorA;
    uniform vec3 colorB;
    uniform vec3 colorC;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 centered = vUv - 0.5;
      float dist = length(centered);
      float angle = atan(centered.y, centered.x);
      vec2 flowUv = centered * (3.0 + lowMid * 2.4);
      float swirl = sin(angle * (5.0 + highMid * 5.0) + dist * (26.0 + bass * 18.0) - time * (1.1 + treble * 3.8));
      float cells = noise(flowUv * 3.0 + vec2(time * (0.18 + bass * 0.42), -time * (0.12 + mid * 0.38)));
      float filaments = sin((vUv.x + cells * 0.18) * 34.0 + time * (1.8 + treble * 5.5)) *
        cos((vUv.y - cells * 0.16) * 26.0 - time * (1.2 + highMid * 4.0));
      float edgeEnergy = smoothstep(0.18, 0.78, dist);
      float coreEnergy = 1.0 - smoothstep(0.04, 0.62, dist);
      float plasma = smoothstep(0.16, 1.0, cells * 0.62 + filaments * 0.22 + swirl * 0.18 + beat * 0.25);
      plasma = pow(plasma, 1.28);
      vec3 color = mix(colorA, colorB, 0.5 + 0.5 * sin(time * 0.34 + plasma * 2.4 + angle));
      color = mix(color, colorC, 0.32 + 0.35 * sin(dist * 16.0 - time * 0.47 + treble * 2.0));
      float alpha = (0.026 + volume * 0.16 + beat * 0.18) * plasma;
      alpha += edgeEnergy * (0.018 + highMid * 0.1 + treble * 0.12 + beat * 0.05);
      alpha += coreEnergy * bass * 0.05;
      gl_FragColor = vec4(color * (0.56 + volume * 1.8 + beat * 1.45 + plasma * 0.68), alpha);
    }
  `,
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function getContainerSize(container: HTMLElement) {
  const rect = container.getBoundingClientRect();

  return {
    width: Math.max(1, Math.floor(rect.width || window.innerWidth)),
    height: Math.max(1, Math.floor(rect.height || window.innerHeight)),
  };
}

function setGradientColor(target: THREE.Color, t: number) {
  const wrappedT = t - Math.floor(t);
  const scaledT = wrappedT * BRAND_COLORS.length;
  const index = Math.floor(scaledT) % BRAND_COLORS.length;
  const nextIndex = (index + 1) % BRAND_COLORS.length;

  target.copy(BRAND_COLORS[index]).lerp(BRAND_COLORS[nextIndex], scaledT - index);
}

function sampleFloatArray(values: Float32Array, normalizedIndex: number) {
  const index = Math.min(values.length - 1, Math.max(0, Math.floor(normalizedIndex * values.length)));

  return values[index] ?? 0;
}

function createPinStates(pinMesh: THREE.InstancedMesh, transform: THREE.Object3D) {
  const pins: PinState[] = [];
  let pinIndex = 0;

  for (let row = 0; row < PIN_ROWS; row += 1) {
    for (let column = 0; column < PIN_COLUMNS; column += 1) {
      const x = (column - (PIN_COLUMNS - 1) / 2) * PIN_SPACING;
      const y = (row - (PIN_ROWS - 1) / 2) * PIN_SPACING;

      pins.push({
        x,
        y,
        centerDistance: Math.sqrt(x * x + y * y),
        normalizedX: column / (PIN_COLUMNS - 1),
        normalizedY: row / (PIN_ROWS - 1),
        currentZ: PIN_HOME_Z,
        targetZ: PIN_HOME_Z,
        velocityZ: 0,
        currentColor: BACKGROUND_COLOR.clone(),
        targetColor: BACKGROUND_COLOR.clone(),
      });

      transform.position.set(x, y, PIN_HOME_Z);
      transform.rotation.x = PIN_ROTATION_X;
      transform.updateMatrix();
      pinMesh.setMatrixAt(pinIndex, transform.matrix);
      pinMesh.setColorAt(pinIndex, BACKGROUND_COLOR);
      pinIndex += 1;
    }
  }

  pinMesh.instanceMatrix.needsUpdate = true;
  if (pinMesh.instanceColor) {
    pinMesh.instanceColor.needsUpdate = true;
  }

  return pins;
}

function createFireworkSystem(scene: THREE.Scene) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(FIREWORK_PARTICLE_COUNT * 3);
  const colors = new Float32Array(FIREWORK_PARTICLE_COUNT * 3);
  const velocities = new Float32Array(FIREWORK_PARTICLE_COUNT * 3);
  const life = new Float32Array(FIREWORK_PARTICLE_COUNT);

  const parkParticle = (particleIndex: number) => {
    const offset = particleIndex * 3;
    positions[offset] = HIDDEN_PARTICLE_POSITION;
    positions[offset + 1] = HIDDEN_PARTICLE_POSITION;
    positions[offset + 2] = HIDDEN_PARTICLE_POSITION;
  };

  for (let index = 0; index < FIREWORK_PARTICLE_COUNT; index += 1) {
    parkParticle(index);
    colors[index * 3] = 1;
    colors[index * 3 + 1] = 1;
    colors[index * 3 + 2] = 1;
    life[index] = -1;
  }

  const positionAttribute = new THREE.BufferAttribute(positions, 3);
  const colorAttribute = new THREE.BufferAttribute(colors, 3);
  geometry.setAttribute('position', positionAttribute);
  geometry.setAttribute('color', colorAttribute);

  const material = new THREE.PointsMaterial({
    size: 0.42,
    vertexColors: true,
    transparent: true,
    opacity: 0.74,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const trigger = (strength: number) => {
    const particleScale = 0.65 + strength * 0.55;

    for (let index = 0; index < FIREWORK_PARTICLE_COUNT; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 2;
      positions[offset + 1] = (Math.random() - 0.5) * 2;
      positions[offset + 2] = 0;

      const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
      const intensity = 1.05 + strength * 1.35 + Math.random() * 0.75;
      colors[offset] = color.r * intensity;
      colors[offset + 1] = color.g * intensity;
      colors[offset + 2] = color.b * intensity;

      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = (48 + Math.random() * 105) * particleScale;

      velocities[offset] = Math.sin(phi) * Math.cos(theta) * speed;
      velocities[offset + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      velocities[offset + 2] = Math.abs(Math.cos(phi)) * speed * 1.45 + 40;
      life[index] = 0.75 + strength * 0.45;
    }

    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
  };

  const update = (deltaSeconds: number) => {
    let needsPositionUpdate = false;
    let needsColorUpdate = false;
    const frameScale = deltaSeconds * 60;
    const drag = Math.pow(FIREWORK_DRAG_PER_FRAME, frameScale);
    const fade = Math.pow(FIREWORK_FADE_PER_FRAME, frameScale);

    for (let index = 0; index < FIREWORK_PARTICLE_COUNT; index += 1) {
      if (life[index] <= 0) {
        continue;
      }

      const offset = index * 3;
      life[index] -= FIREWORK_LIFE_DRAIN_PER_SECOND * deltaSeconds;

      velocities[offset + 1] -= FIREWORK_GRAVITY * deltaSeconds;
      velocities[offset] *= drag;
      velocities[offset + 1] *= drag;
      velocities[offset + 2] *= drag;

      positions[offset] += velocities[offset] * deltaSeconds;
      positions[offset + 1] += velocities[offset + 1] * deltaSeconds;
      positions[offset + 2] += velocities[offset + 2] * deltaSeconds;

      colors[offset] *= fade;
      colors[offset + 1] *= fade;
      colors[offset + 2] *= fade;

      if (life[index] <= 0) {
        life[index] = -1;
        parkParticle(index);
      }

      needsPositionUpdate = true;
      needsColorUpdate = true;
    }

    if (needsPositionUpdate) {
      positionAttribute.needsUpdate = true;
    }

    if (needsColorUpdate) {
      colorAttribute.needsUpdate = true;
    }
  };

  const dispose = () => {
    scene.remove(points);
    geometry.dispose();
    material.dispose();
  };

  return {trigger, update, dispose};
}

function createPlasmaGlowField(scene: THREE.Scene) {
  const colorA = new THREE.Color();
  const colorB = new THREE.Color();
  const colorC = new THREE.Color();
  const geometry = new THREE.PlaneGeometry(PLASMA_FIELD_WIDTH, PLASMA_FIELD_HEIGHT);
  const material = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(PlasmaFieldShader.uniforms),
    vertexShader: PlasmaFieldShader.vertexShader,
    fragmentShader: PlasmaFieldShader.fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = -18;
  mesh.renderOrder = 2;
  mesh.frustumCulled = false;
  scene.add(mesh);

  const update = (time: number, audio: AudioFrame) => {
    const seconds = time / 1000;

    mesh.rotation.z = Math.sin(seconds * 0.08) * (0.025 + audio.lowMid * 0.03);
    mesh.scale.setScalar(1 + audio.volume * 0.025 + audio.beatEnergy * 0.035);

    material.uniforms.time.value = seconds;
    material.uniforms.bass.value = audio.bass;
    material.uniforms.lowMid.value = audio.lowMid;
    material.uniforms.mid.value = audio.mid;
    material.uniforms.highMid.value = audio.highMid;
    material.uniforms.treble.value = audio.treble;
    material.uniforms.volume.value = audio.volume;
    material.uniforms.beat.value = audio.beatEnergy;

    setGradientColor(colorA, seconds * 0.055 + audio.bass * 0.18);
    setGradientColor(colorB, seconds * 0.071 + 0.31 + audio.highMid * 0.2);
    setGradientColor(colorC, seconds * 0.047 + 0.62 + audio.treble * 0.22);
    material.uniforms.colorA.value.copy(colorA).multiplyScalar(0.9 + audio.volume * 1.4);
    material.uniforms.colorB.value.copy(colorB).multiplyScalar(0.75 + audio.highMid * 1.6 + audio.beatEnergy * 0.7);
    material.uniforms.colorC.value.copy(colorC).multiplyScalar(0.68 + audio.treble * 1.8 + audio.beatEnergy * 0.65);
  };

  const dispose = () => {
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
  };

  return {update, dispose};
}

function createWaveRibbonSystem(scene: THREE.Scene) {
  const group = new THREE.Group();
  const ribbons: Array<{
    positions: Float32Array;
    positionAttribute: THREE.BufferAttribute;
    material: THREE.LineBasicMaterial;
    baseY: number;
    phase: number;
  }> = [];
  const rings: Array<{
    positions: Float32Array;
    positionAttribute: THREE.BufferAttribute;
    material: THREE.LineBasicMaterial;
    baseRadius: number;
    phase: number;
  }> = [];
  const color = new THREE.Color();

  group.renderOrder = 5;
  scene.add(group);

  for (let ribbonIndex = 0; ribbonIndex < WAVE_RIBBON_COUNT; ribbonIndex += 1) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(WAVE_RIBBON_POINT_COUNT * 3);
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    const baseY =
      -WAVE_RIBBON_HEIGHT / 2 + (ribbonIndex / Math.max(1, WAVE_RIBBON_COUNT - 1)) * WAVE_RIBBON_HEIGHT;
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    const line = new THREE.Line(geometry, material);

    for (let pointIndex = 0; pointIndex < WAVE_RIBBON_POINT_COUNT; pointIndex += 1) {
      const offset = pointIndex * 3;
      const normalizedX = pointIndex / Math.max(1, WAVE_RIBBON_POINT_COUNT - 1);
      positions[offset] = (normalizedX - 0.5) * WAVE_RIBBON_WIDTH;
      positions[offset + 1] = baseY;
      positions[offset + 2] = 2;
    }

    geometry.setAttribute('position', positionAttribute);
    line.frustumCulled = false;
    group.add(line);
    ribbons.push({
      positions,
      positionAttribute,
      material,
      baseY,
      phase: ribbonIndex * 0.81,
    });
  }

  for (let ringIndex = 0; ringIndex < OUTER_RING_COUNT; ringIndex += 1) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(OUTER_RING_POINT_COUNT * 3);
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.07,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    const line = new THREE.LineLoop(geometry, material);

    geometry.setAttribute('position', positionAttribute);
    line.frustumCulled = false;
    group.add(line);
    rings.push({
      positions,
      positionAttribute,
      material,
      baseRadius: FIELD_RADIUS * 0.78 + ringIndex * OUTER_RING_RADIUS_STEP,
      phase: ringIndex * 1.17,
    });
  }

  const update = (time: number, audio: AudioFrame) => {
    const seconds = time / 1000;

    for (let ribbonIndex = 0; ribbonIndex < ribbons.length; ribbonIndex += 1) {
      const ribbon = ribbons[ribbonIndex];
      const positions = ribbon.positions;
      const rowDistance = Math.abs(ribbonIndex - (ribbons.length - 1) / 2) / Math.max(1, ribbons.length - 1);
      const rowFade = 1 - rowDistance * 0.45;
      const drift = seconds * (0.65 + audio.lowMid * 2.2 + ribbonIndex * 0.035);

      for (let pointIndex = 0; pointIndex < WAVE_RIBBON_POINT_COUNT; pointIndex += 1) {
        const offset = pointIndex * 3;
        const normalizedX = pointIndex / Math.max(1, WAVE_RIBBON_POINT_COUNT - 1);
        const x = (normalizedX - 0.5) * WAVE_RIBBON_WIDTH;
        const waveformSample = sampleFloatArray(audio.waveform, normalizedX);
        const spectrumSample = sampleFloatArray(audio.spectrum, normalizedX);
        const broadWave = Math.sin(x * 0.075 - drift + ribbon.phase) * (1.35 + audio.lowMid * 7.2);
        const fineWave =
          Math.sin(x * 0.22 + seconds * (2.1 + audio.treble * 8.5) + ribbon.phase) *
          (audio.treble * 4.2 + audio.highMid * 1.8);

        positions[offset] = x;
        positions[offset + 1] =
          ribbon.baseY +
          broadWave +
          fineWave +
          waveformSample * (2.4 + audio.volume * 9.5) +
          Math.sin(seconds * 0.52 + ribbon.phase) * audio.beatEnergy * 5.5;
        positions[offset + 2] =
          4.5 +
          spectrumSample * (9.5 + audio.highMid * 9) +
          waveformSample * (4.2 + audio.volume * 8.5) +
          Math.sin(x * 0.052 + drift) * (1.2 + audio.mid * 4.5) +
          audio.beatEnergy * 3.2;
      }

      ribbon.positionAttribute.needsUpdate = true;
      ribbon.material.opacity = Math.min(0.42, (0.045 + audio.volume * 0.18 + audio.beatEnergy * 0.08) * rowFade);
      setGradientColor(color, ribbonIndex / WAVE_RIBBON_COUNT + seconds * 0.045 + audio.treble * 0.16);
      ribbon.material.color.copy(color).multiplyScalar(0.85 + audio.volume * 1.55);
    }

    for (let ringIndex = 0; ringIndex < rings.length; ringIndex += 1) {
      const ring = rings[ringIndex];
      const positions = ring.positions;
      const radiusPulse =
        Math.sin(seconds * (0.56 + audio.lowMid * 1.8) + ring.phase) * (2 + audio.lowMid * 10) +
        audio.beatEnergy * (3 + ringIndex * 1.2);
      const radius = (ring.baseRadius + radiusPulse) * (1 + audio.volume * 0.08);
      const xStretch = 1.3 + audio.highMid * 0.08;
      const yStretch = 0.86 + audio.mid * 0.05;

      for (let pointIndex = 0; pointIndex < OUTER_RING_POINT_COUNT; pointIndex += 1) {
        const offset = pointIndex * 3;
        const angle = (pointIndex / OUTER_RING_POINT_COUNT) * Math.PI * 2;
        const edgeRipple =
          Math.sin(angle * 6 + seconds * (1.8 + audio.treble * 6.4) + ring.phase) *
          (1.1 + audio.treble * 8 + audio.beatEnergy * 3);

        positions[offset] = Math.cos(angle) * (radius * xStretch + edgeRipple);
        positions[offset + 1] = Math.sin(angle) * (radius * yStretch + edgeRipple * 0.72);
        positions[offset + 2] =
          -2 +
          Math.sin(angle * 3 - seconds * (1.25 + audio.mid * 4.2) + ring.phase) * (1.4 + audio.mid * 5) +
          audio.beatEnergy * 4;
      }

      ring.positionAttribute.needsUpdate = true;
      ring.material.opacity = Math.min(0.34, 0.038 + audio.volume * 0.1 + audio.beatEnergy * 0.075);
      setGradientColor(color, ringIndex / OUTER_RING_COUNT + seconds * 0.035 + audio.lowMid * 0.18);
      ring.material.color.copy(color).multiplyScalar(0.72 + audio.volume * 1.2);
    }
  };

  const dispose = () => {
    scene.remove(group);

    for (const ribbon of ribbons) {
      ribbon.positionAttribute.array = new Float32Array(0);
      ribbon.material.dispose();
    }

    for (const ring of rings) {
      ring.positionAttribute.array = new Float32Array(0);
      ring.material.dispose();
    }

    group.traverse((object) => {
      const line = object as THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
      line.geometry?.dispose();
    });
  };

  return {update, dispose};
}

function createReactiveShapeStates(kindOffset: number) {
  const states: ReactiveShapeState[] = [];

  for (let index = 0; index < REACTIVE_SHAPE_COUNT_PER_KIND; index += 1) {
    const normalizedIndex = index / REACTIVE_SHAPE_COUNT_PER_KIND;
    const edge = index % 4;
    const edgeProgress = ((index * 0.381966 + kindOffset * 0.137) % 1) * 2 - 1;
    const layer = 0.78 + ((index + kindOffset) % 5) * 0.08;
    let baseX = Math.cos(normalizedIndex * Math.PI * 2 + kindOffset) * FIELD_HALF_WIDTH * layer;
    let baseY = Math.sin(normalizedIndex * Math.PI * 2 + kindOffset) * FIELD_HALF_HEIGHT * layer;

    if (edge === 0) {
      baseX = -SHAPE_EDGE_X;
      baseY = edgeProgress * SHAPE_EDGE_Y;
    } else if (edge === 1) {
      baseX = SHAPE_EDGE_X;
      baseY = edgeProgress * SHAPE_EDGE_Y;
    } else if (edge === 2) {
      baseX = edgeProgress * SHAPE_EDGE_X;
      baseY = SHAPE_EDGE_Y;
    } else {
      baseX = edgeProgress * SHAPE_EDGE_X;
      baseY = -SHAPE_EDGE_Y;
    }

    states.push({
      baseX,
      baseY,
      baseZ: -11 + ((index + kindOffset) % 6) * 1.18,
      baseScale: 0.95 + ((index + kindOffset) % 7) * 0.09,
      phase: index * 0.72 + kindOffset * 1.31,
      speed: 0.35 + ((index + kindOffset) % 9) * 0.045,
      spectrumT: (normalizedIndex + kindOffset * 0.217) % 1,
      spinX: 0.22 + ((index + 2) % 5) * 0.05,
      spinY: 0.27 + ((index + 4) % 6) * 0.045,
      spinZ: 0.18 + ((index + 1) % 7) * 0.04,
      currentColor: BACKGROUND_COLOR.clone(),
      targetColor: BACKGROUND_COLOR.clone(),
    });
  }

  return states;
}

function createReactiveShapeSystem(scene: THREE.Scene) {
  const transform = new THREE.Object3D();
  const materialOptions = {
    color: 0xffffff,
    metalness: 0.32,
    roughness: 0.22,
    emissive: 0xffffff,
    emissiveIntensity: 0.18,
    transparent: true,
    opacity: 0.84,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
  };
  const shapeGroups = [
    {
      geometry: new THREE.TetrahedronGeometry(1.45, 0),
      material: new THREE.MeshStandardMaterial(materialOptions),
      states: createReactiveShapeStates(0),
    },
    {
      geometry: new THREE.BoxGeometry(1.62, 1.62, 1.62),
      material: new THREE.MeshStandardMaterial(materialOptions),
      states: createReactiveShapeStates(1),
    },
    {
      geometry: new THREE.SphereGeometry(1.05, 18, 12),
      material: new THREE.MeshStandardMaterial(materialOptions),
      states: createReactiveShapeStates(2),
    },
  ];

  for (const shapeGroup of shapeGroups) {
    const mesh = new THREE.InstancedMesh(shapeGroup.geometry, shapeGroup.material, shapeGroup.states.length);

    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(shapeGroup.states.length * 3), 3);
    mesh.frustumCulled = false;
    mesh.renderOrder = 4;
    scene.add(mesh);
    Object.assign(shapeGroup, {mesh});
  }

  const update = (time: number, audio: AudioFrame) => {
    const seconds = time / 1000;

    for (let groupIndex = 0; groupIndex < shapeGroups.length; groupIndex += 1) {
      const shapeGroup = shapeGroups[groupIndex] as (typeof shapeGroups)[number] & {mesh: THREE.InstancedMesh};
      const shapeOpacity = 0.5 + audio.volume * 0.34 + audio.beatEnergy * 0.18;

      shapeGroup.material.opacity = Math.min(0.95, shapeOpacity);
      shapeGroup.material.emissiveIntensity = 0.18 + audio.volume * 0.32 + audio.beatEnergy * 0.28;

      for (let index = 0; index < shapeGroup.states.length; index += 1) {
        const state = shapeGroup.states[index];
        const spectrum = sampleFloatArray(audio.spectrum, state.spectrumT);
        const waveform = sampleFloatArray(audio.waveform, (state.spectrumT + seconds * 0.025) % 1);
        const edgePulse = audio.highMid * 2.8 + audio.treble * 3.5 + audio.beatEnergy * 4.2;
        const driftX =
          Math.sin(seconds * (state.speed + audio.lowMid * 0.52) + state.phase) *
          (SHAPE_EDGE_DRIFT + edgePulse);
        const driftY =
          Math.cos(seconds * (state.speed * 0.82 + audio.mid * 0.46) + state.phase * 1.13) *
          (SHAPE_EDGE_DRIFT * 0.72 + edgePulse * 0.55);
        const lift =
          spectrum * (7.5 + audio.highMid * 9.5) +
          Math.abs(waveform) * (2.8 + audio.volume * 7.5) +
          audio.beatEnergy * 4.4;
        const scale = state.baseScale * (0.72 + spectrum * 1.45 + audio.volume * 0.58 + audio.beatEnergy * 0.72);

        transform.position.set(state.baseX + driftX, state.baseY + driftY, state.baseZ + lift);
        transform.rotation.set(
          seconds * state.spinX + waveform * 1.8 + state.phase,
          seconds * state.spinY + spectrum * 2.6 + state.phase * 0.7,
          seconds * state.spinZ + audio.treble * 3.2 + state.phase * 0.4,
        );
        transform.scale.setScalar(scale);
        transform.updateMatrix();

        shapeGroup.mesh.setMatrixAt(index, transform.matrix);
        setGradientColor(
          state.targetColor,
          state.spectrumT + seconds * (0.045 + audio.volume * 0.035) + groupIndex * 0.19 + spectrum * 0.22,
        );
        state.targetColor.multiplyScalar(0.8 + audio.volume * 1.45 + spectrum * 1.2 + audio.beatEnergy * 0.6);
        state.currentColor.lerp(state.targetColor, 0.16);
        shapeGroup.mesh.setColorAt(index, state.currentColor);
      }

      shapeGroup.mesh.instanceMatrix.needsUpdate = true;
      if (shapeGroup.mesh.instanceColor) {
        shapeGroup.mesh.instanceColor.needsUpdate = true;
      }
    }
  };

  const dispose = () => {
    for (const shapeGroup of shapeGroups) {
      const mesh = (shapeGroup as (typeof shapeGroups)[number] & {mesh: THREE.InstancedMesh}).mesh;

      scene.remove(mesh);
      shapeGroup.geometry.dispose();
      shapeGroup.material.dispose();
    }
  };

  return {update, dispose};
}

function createProceduralElementStates(kindOffset: number) {
  const states: ProceduralElementState[] = [];

  for (let index = 0; index < PROCEDURAL_ELEMENT_COUNT_PER_KIND; index += 1) {
    const normalizedIndex = index / PROCEDURAL_ELEMENT_COUNT_PER_KIND;
    const radiusLayer = 0.32 + ((index + kindOffset) % 8) * 0.095;

    states.push({
      orbitRadiusX: FIELD_HALF_WIDTH * radiusLayer * (0.92 + kindOffset * 0.08),
      orbitRadiusY: FIELD_HALF_HEIGHT * (0.38 + ((index * 3 + kindOffset) % 7) * 0.085),
      baseZ: -8 + ((index + kindOffset * 2) % 9) * 1.35,
      baseScale: 0.55 + ((index + kindOffset) % 6) * 0.1,
      phase: index * 0.97 + kindOffset * 1.74,
      speed: 0.18 + ((index + kindOffset * 3) % 9) * 0.032,
      bandT: (normalizedIndex * 0.83 + kindOffset * 0.173) % 1,
      verticalPhase: normalizedIndex * Math.PI * 2 + kindOffset,
      currentColor: BACKGROUND_COLOR.clone(),
      targetColor: BACKGROUND_COLOR.clone(),
    });
  }

  return states;
}

function createProceduralElementSystem(scene: THREE.Scene) {
  const transform = new THREE.Object3D();
  const materialBase = {
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.22,
    metalness: 0.18,
    roughness: 0.18,
    transparent: true,
    opacity: 0.78,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
  };
  const elementGroups = [
    {
      geometry: new THREE.TorusKnotGeometry(1.18, 0.28, 72, 10, 2, 3),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: false}),
      states: createProceduralElementStates(0),
      scaleBoost: 1,
    },
    {
      geometry: new THREE.IcosahedronGeometry(1.2, 1),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: true}),
      states: createProceduralElementStates(1),
      scaleBoost: 1.12,
    },
    {
      geometry: new THREE.OctahedronGeometry(1.28, 0),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: false}),
      states: createProceduralElementStates(2),
      scaleBoost: 0.95,
    },
    {
      geometry: new THREE.DodecahedronGeometry(1.18, 0),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: true}),
      states: createProceduralElementStates(3),
      scaleBoost: 1.06,
    },
    {
      geometry: new THREE.ConeGeometry(0.78, 2.35, 5, 1),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: false}),
      states: createProceduralElementStates(4),
      scaleBoost: 0.9,
    },
    {
      geometry: new THREE.CylinderGeometry(0.58, 0.92, 2.1, 6, 1),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: true}),
      states: createProceduralElementStates(5),
      scaleBoost: 0.82,
    },
    {
      geometry: new THREE.TorusGeometry(0.98, 0.16, 10, 44),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: false}),
      states: createProceduralElementStates(6),
      scaleBoost: 1.18,
    },
    {
      geometry: new THREE.TetrahedronGeometry(1.08, 1),
      material: new THREE.MeshStandardMaterial({...materialBase, wireframe: true}),
      states: createProceduralElementStates(7),
      scaleBoost: 1.02,
    },
  ];

  for (const elementGroup of elementGroups) {
    const mesh = new THREE.InstancedMesh(elementGroup.geometry, elementGroup.material, elementGroup.states.length);

    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(elementGroup.states.length * 3), 3);
    mesh.frustumCulled = false;
    mesh.renderOrder = 6;
    scene.add(mesh);
    Object.assign(elementGroup, {mesh});
  }

  const update = (time: number, audio: AudioFrame) => {
    const seconds = time / 1000;
    const glowDrive = audio.volume * 0.65 + audio.highMid * 0.4 + audio.treble * 0.5 + audio.beatEnergy * 0.85;

    for (let groupIndex = 0; groupIndex < elementGroups.length; groupIndex += 1) {
      const elementGroup = elementGroups[groupIndex] as (typeof elementGroups)[number] & {mesh: THREE.InstancedMesh};

      elementGroup.material.opacity = Math.min(0.96, 0.42 + glowDrive * 0.38 + groupIndex * 0.05);
      elementGroup.material.emissiveIntensity = 0.18 + glowDrive * 0.62;

      for (let index = 0; index < elementGroup.states.length; index += 1) {
        const state = elementGroup.states[index];
        const spectrum = sampleFloatArray(audio.spectrum, state.bandT);
        const oppositeSpectrum = sampleFloatArray(audio.spectrum, 1 - state.bandT);
        const waveform = sampleFloatArray(audio.waveform, (state.bandT + 0.17 * groupIndex + seconds * 0.018) % 1);
        const orbitSpeed = state.speed + audio.lowMid * 0.18 + audio.treble * 0.12;
        const theta = seconds * orbitSpeed + state.phase + waveform * 0.75;
        const nestedTheta = seconds * (orbitSpeed * 1.74 + audio.mid * 0.2) - state.phase * 0.62;
        const bassBreath = 1 + audio.bass * 0.12 + audio.beatEnergy * 0.09;
      const petal = Math.sin(theta * (2.0 + (groupIndex % 4)) + state.phase * 0.7) * (0.04 + audio.highMid * 0.06);
      const x =
        Math.cos(theta) * state.orbitRadiusX * bassBreath +
        Math.cos(theta * 2.3 + groupIndex) * FIELD_HALF_WIDTH * petal +
        Math.sin(nestedTheta) * FIELD_HALF_WIDTH * (0.06 + audio.highMid * 0.045);
      const y =
        Math.sin(theta * 1.17) * state.orbitRadiusY +
        Math.sin(theta * 2.1 - groupIndex) * FIELD_HALF_HEIGHT * petal +
        Math.cos(nestedTheta * 0.9) * FIELD_HALF_HEIGHT * (0.05 + audio.treble * 0.04);
      const z =
        state.baseZ +
          Math.sin(seconds * (0.65 + audio.mid * 1.6) + state.verticalPhase) * (2.8 + audio.lowMid * 6.5) +
          spectrum * (7 + audio.highMid * 8) +
          audio.beatEnergy * 5.2;
      const scale =
        state.baseScale *
        elementGroup.scaleBoost *
          (0.72 + spectrum * 1.58 + oppositeSpectrum * 0.5 + Math.abs(waveform) * 0.42 + audio.beatEnergy * 0.82);

        transform.position.set(x, y, z);
        transform.rotation.set(
          seconds * (0.42 + audio.highMid * 1.6) + state.phase + waveform,
          seconds * (0.36 + audio.treble * 1.8) + state.phase * 0.44 + spectrum * 2.4,
          seconds * (0.31 + audio.lowMid * 1.2) + state.phase * 0.23 + oppositeSpectrum * 1.8,
        );
        transform.scale.set(scale, scale * (0.78 + audio.mid * 0.35 + Math.abs(waveform) * 0.25), scale);
        transform.updateMatrix();

        elementGroup.mesh.setMatrixAt(index, transform.matrix);
        setGradientColor(
          state.targetColor,
          state.bandT + seconds * (0.06 + audio.volume * 0.05) + groupIndex * 0.23 + spectrum * 0.27 + waveform * 0.03,
        );
        state.targetColor.multiplyScalar(0.58 + spectrum * 1.8 + audio.volume * 1.55 + audio.beatEnergy * 1.2);
        state.targetColor.addScalar((audio.treble + audio.highMid) * 0.07 + audio.beatEnergy * 0.04);
        state.currentColor.lerp(state.targetColor, 0.18);
        elementGroup.mesh.setColorAt(index, state.currentColor);
      }

      elementGroup.mesh.instanceMatrix.needsUpdate = true;
      if (elementGroup.mesh.instanceColor) {
        elementGroup.mesh.instanceColor.needsUpdate = true;
      }
    }
  };

  const dispose = () => {
    for (const elementGroup of elementGroups) {
      const mesh = (elementGroup as (typeof elementGroups)[number] & {mesh: THREE.InstancedMesh}).mesh;

      scene.remove(mesh);
      elementGroup.geometry.dispose();
      elementGroup.material.dispose();
    }
  };

  return {update, dispose};
}

function getBeatWaveOffset(pinDistance: number, time: number, beatWaves: BeatWave[]) {
  let waveOffset = 0;

  for (const wave of beatWaves) {
    const ageSeconds = (time - wave.startedAt) / 1000;

    if (ageSeconds < 0 || ageSeconds > RIPPLE_DURATION_SECONDS) {
      continue;
    }

    const radius = ageSeconds * RIPPLE_SPEED;
    const distanceFromWave = pinDistance - radius;

    if (Math.abs(distanceFromWave) <= RIPPLE_WIDTH) {
      const envelope = 1 - ageSeconds / RIPPLE_DURATION_SECONDS;
      waveOffset += Math.cos((distanceFromWave * Math.PI) / (RIPPLE_WIDTH * 2)) * wave.strength * 7 * envelope;
    }
  }

  return waveOffset;
}

function getLayeredWaveOffset(
  pin: PinState,
  seconds: number,
  audio: AudioFrame,
  waveformX: number,
  waveformY: number,
  spectrumEnergy: number,
) {
  const edgeReach = 0.38 + clamp01(pin.centerDistance / FIELD_RADIUS) * 0.72;
  const wideRadial =
    Math.sin(pin.centerDistance * 0.17 - seconds * (2.25 + audio.bass * 6.4)) *
    (audio.bass * 5.8 + audio.beatEnergy * 3.2) *
    edgeReach;
  const diagonalSwell =
    Math.sin(pin.x * 0.085 + pin.y * 0.13 - seconds * (1.35 + audio.lowMid * 4.6)) *
    (audio.lowMid * 5.2 + audio.volume * 2.2) *
    edgeReach;
  const crossCurrent =
    Math.sin((pin.x - pin.y) * 0.105 + seconds * (1.7 + audio.highMid * 5.2) + waveformY * 2.6) *
    (audio.highMid * 3.9 + audio.treble * 2.4) *
    (0.48 + edgeReach * 0.52);
  const waveformWake =
    Math.sin(pin.y * 0.2 + seconds * (1.4 + audio.mid * 3.8) + waveformX * 3.2) *
    waveformY *
    (3.5 + audio.volume * 7.2);
  const spectralUndulation =
    Math.sin((pin.normalizedX - pin.normalizedY) * Math.PI * 5 + seconds * (1.1 + audio.treble * 4.4)) *
    spectrumEnergy *
    (2.3 + audio.highMid * 5.2);

  return wideRadial + diagonalSwell + crossCurrent + waveformWake + spectralUndulation;
}

export function createPinVisualizerScene(
  container: HTMLDivElement,
  options: PinVisualizerSceneOptions = {},
): SceneController {
  const fallbackAudio = createSilentAudioProvider();
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.014);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0, 60);

  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setClearColor(0x000000, 1);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const waveWarpPass = new ShaderPass(WaveWarpShader);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.22, 0.52, 0.68);
  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  const afterimagePass = new AfterimagePass();

  waveWarpPass.uniforms.strength.value = 0;
  rgbShiftPass.uniforms.amount.value = 0.008;
  rgbShiftPass.uniforms.angle.value = 0;
  afterimagePass.uniforms.damp.value = 0.94;

  composer.addPass(renderPass);
  composer.addPass(waveWarpPass);
  composer.addPass(bloomPass);
  composer.addPass(rgbShiftPass);
  composer.addPass(afterimagePass);

  scene.add(new THREE.AmbientLight(0xffffff, 0.52));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.08);
  directionalLight.position.set(0, 0, 30);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffffff, 2.8, 112);
  pointLight.position.set(0, 0, 20);
  scene.add(pointLight);

  const pinGeometry = new THREE.CylinderGeometry(PIN_RADIUS, PIN_RADIUS, PIN_LENGTH, 8);
  pinGeometry.translate(0, PIN_LENGTH / 2, 0);

  const pinMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.04,
    metalness: 0.9,
    roughness: 0.3,
  });

  const pinMesh = new THREE.InstancedMesh(pinGeometry, pinMaterial, PIN_COUNT);
  pinMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(PIN_COUNT * 3), 3);
  scene.add(pinMesh);

  const transform = new THREE.Object3D();
  const pins = createPinStates(pinMesh, transform);
  const fireworks = createFireworkSystem(scene);
  const plasmaGlow = createPlasmaGlowField(scene);
  const waveRibbons = createWaveRibbonSystem(scene);
  // const reactiveShapes = createReactiveShapeSystem(scene);
  // const proceduralElements = createProceduralElementSystem(scene);
  const beatWaves: BeatWave[] = [];

  let lastFrameTime = performance.now();
  let animationId = 0;
  let isDisposed = false;
  let hasReportedReady = false;

  const resize = () => {
    const {width, height} = getContainerSize(container);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    bloomPass.setSize(width, height);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  window.addEventListener('resize', resize);
  resize();

  const updatePins = (time: number, audio: AudioFrame) => {
    const seconds = time / 1000;
    const colorPhase = seconds * (0.09 + audio.volume * 0.08);

    for (let index = 0; index < PIN_COUNT; index += 1) {
      const pin = pins[index];
      const centeredX = Math.abs(pin.normalizedX - 0.5) * 2;
      const centeredY = Math.abs(pin.normalizedY - 0.5) * 2;
      const centerFalloff = clamp01(1 - pin.centerDistance / (FIELD_RADIUS * 0.78));
      const edgeGlow = Math.pow(clamp01(pin.centerDistance / FIELD_RADIUS), 0.7);
      const spectrumIndex = Math.min(
        SPECTRUM_BAND_COUNT - 1,
        Math.floor(pin.normalizedX * SPECTRUM_BAND_COUNT),
      );
      const mirroredSpectrumIndex = Math.min(
        SPECTRUM_BAND_COUNT - 1,
        Math.floor((1 - centeredX) * (SPECTRUM_BAND_COUNT - 1)),
      );
      const waveformIndex = Math.min(
        WAVEFORM_POINT_COUNT - 1,
        Math.floor(pin.normalizedX * WAVEFORM_POINT_COUNT),
      );
      const verticalWaveformIndex = Math.min(
        WAVEFORM_POINT_COUNT - 1,
        Math.floor(pin.normalizedY * WAVEFORM_POINT_COUNT),
      );
      const diagonalWaveformIndex = Math.min(
        WAVEFORM_POINT_COUNT - 1,
        Math.floor(((pin.normalizedX + pin.normalizedY) * 0.5) * WAVEFORM_POINT_COUNT),
      );

      const spectrumEnergy =
        audio.spectrum[spectrumIndex] * 0.62 + audio.spectrum[mirroredSpectrumIndex] * 0.38;
      const waveformX = audio.waveform[waveformIndex];
      const waveformY = audio.waveform[verticalWaveformIndex] * 0.65 + audio.waveform[diagonalWaveformIndex] * 0.35;
      const waveformRibbon =
        waveformX * (1 - Math.min(1, Math.abs(pin.normalizedY - 0.5) * 2.3));
      const bassDome = audio.bass * centerFalloff * centerFalloff * 12.5;
      const midTerrain =
        Math.sin(pin.x * 0.16 + seconds * (1.6 + audio.mid * 5)) *
        Math.cos(pin.y * 0.12 - seconds * (1.2 + audio.lowMid * 4)) *
        (0.55 + audio.mid * 3.2);
      const trebleShimmer =
        Math.sin((pin.x + pin.y) * 0.62 + seconds * 18) * audio.treble * (0.4 + centeredY * 1.4);
      const spectralRidge = spectrumEnergy * (4 + audio.volume * 8) * (0.35 + (1 - centeredY) * 0.85);
      const beatWave = getBeatWaveOffset(pin.centerDistance, time, beatWaves);
      const layeredWave = getLayeredWaveOffset(pin, seconds, audio, waveformX, waveformY, spectrumEnergy);

      pin.targetZ =
        PIN_HOME_Z +
        bassDome +
        spectralRidge +
        waveformRibbon * 6 +
        midTerrain +
        trebleShimmer +
        layeredWave +
        beatWave;

      const force = (pin.targetZ - pin.currentZ) * SPRING_STIFFNESS;
      pin.velocityZ = (pin.velocityZ + force) * SPRING_DAMPING;
      pin.currentZ += pin.velocityZ;

      setGradientColor(
        pin.targetColor,
        pin.normalizedX * 0.34 +
          pin.normalizedY * 0.2 +
          colorPhase +
          spectrumEnergy * 0.22 +
          audio.bass * centerFalloff * 0.16 +
          edgeGlow * (0.12 + audio.highMid * 0.18 + audio.treble * 0.18) +
          layeredWave * 0.006,
      );

      const pinEnergy = clamp01(
        spectrumEnergy * 0.5 +
          centerFalloff * audio.bass * 0.6 +
          audio.treble * 0.16 +
          edgeGlow * (audio.highMid * 0.28 + audio.treble * 0.32 + audio.volume * 0.12) +
          Math.abs(layeredWave) * 0.024,
      );
      pin.targetColor.multiplyScalar(0.28 + audio.volume * 0.66 + pinEnergy * 0.98 + edgeGlow * 0.32);
      pin.targetColor.addScalar(audio.beatEnergy * (centerFalloff * 0.1 + edgeGlow * 0.16) + audio.volume * edgeGlow * 0.06);
      pin.currentColor.lerp(pin.targetColor, COLOR_LERP_ALPHA);

      transform.position.set(pin.x, pin.y, pin.currentZ);
      transform.rotation.x = PIN_ROTATION_X;
      transform.updateMatrix();
      pinMesh.setMatrixAt(index, transform.matrix);
      pinMesh.setColorAt(index, pin.currentColor);
    }

    pinMesh.instanceMatrix.needsUpdate = true;
    if (pinMesh.instanceColor) {
      pinMesh.instanceColor.needsUpdate = true;
    }
  };

  const animate = (time: number) => {
    if (isDisposed) {
      return;
    }

    animationId = window.requestAnimationFrame(animate);

    if (!hasReportedReady) {
      hasReportedReady = true;
      options.onReady?.();
    }

    const deltaSeconds = Math.min(Math.max((time - lastFrameTime) / 1000, 0), 1 / 30);
    lastFrameTime = time;

    const audio = options.getAudioFrame?.(time) ?? fallbackAudio.getFrame(time);

    if (audio.beat) {
      beatWaves.push({startedAt: time, strength: Math.max(0.35, audio.beatEnergy || audio.bass)});

      if (beatWaves.length > MAX_BEAT_WAVES) {
        beatWaves.shift();
      }

      if (audio.beatEnergy > 0.52) {
        fireworks.trigger(audio.beatEnergy);
      }
    }

    while (beatWaves.length > 0 && (time - beatWaves[0].startedAt) / 1000 > RIPPLE_DURATION_SECONDS) {
      beatWaves.shift();
    }

    const glowDrive = audio.volume * 0.48 + audio.highMid * 0.24 + audio.treble * 0.28 + audio.beatEnergy * 0.45;

    renderer.toneMappingExposure = 0.96 + audio.volume * 0.18 + audio.beatEnergy * 0.18;
    bloomPass.strength = 0.18 + audio.volume * 0.46 + audio.highMid * 0.22 + audio.treble * 0.12 + audio.beatEnergy * 0.3;
    bloomPass.radius = 0.38 + audio.mid * 0.18 + audio.treble * 0.12;
    pointLight.intensity = 2.2 + glowDrive * 5.8;
    directionalLight.intensity = 0.88 + audio.volume * 0.56 + audio.beatEnergy * 0.38;
    pinMaterial.emissiveIntensity = 0.02 + glowDrive * 0.22;
    waveWarpPass.uniforms.time.value = time / 1000;
    waveWarpPass.uniforms.strength.value =
      0.0022 + audio.volume * 0.011 + audio.bass * 0.007 + audio.beatEnergy * 0.012;
    waveWarpPass.uniforms.bass.value = audio.bass;
    waveWarpPass.uniforms.mid.value = audio.mid;
    waveWarpPass.uniforms.treble.value = audio.treble;
    waveWarpPass.uniforms.beat.value = audio.beatEnergy;
    rgbShiftPass.uniforms.amount.value = 0.004 + audio.treble * 0.014 + audio.highMid * 0.004 + audio.beatEnergy * 0.007;
    afterimagePass.uniforms.damp.value = 0.91 + clamp01(audio.lowMid + audio.mid) * 0.035;

    updatePins(time, audio);
    plasmaGlow.update(time, audio);
    waveRibbons.update(time, audio);
    // reactiveShapes.update(time, audio);
    // proceduralElements.update(time, audio);
    fireworks.update(deltaSeconds);

    camera.position.set(
      Math.sin(time * 0.00018) * audio.lowMid * 2.4,
      Math.cos(time * 0.00015) * audio.mid * 1.4,
      60 - audio.beatEnergy * 1.8,
    );
    camera.lookAt(0, 0, 0);
    composer.render();
  };

  animationId = window.requestAnimationFrame(animate);

  return {
    dispose: () => {
      isDisposed = true;
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();

      scene.remove(pinMesh);
      fireworks.dispose();
      plasmaGlow.dispose();
      waveRibbons.dispose();
      // reactiveShapes.dispose();
      // proceduralElements.dispose();
      fallbackAudio.dispose();
      renderPass.dispose();
      waveWarpPass.dispose();
      bloomPass.dispose();
      rgbShiftPass.dispose();
      afterimagePass.dispose();
      composer.dispose();
      pinGeometry.dispose();
      pinMaterial.dispose();
      renderer.renderLists.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
