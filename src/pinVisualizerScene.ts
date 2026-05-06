/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
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

const PIN_COLUMNS = 110;
const PIN_ROWS = 70;
const PIN_COUNT = PIN_COLUMNS * PIN_ROWS;
const PIN_SPACING = 0.8;
const PIN_RADIUS = 0.15;
const PIN_LENGTH = 10;
const PIN_HOME_Z = -15;
const PIN_ROTATION_X = Math.PI / 2;

const RIPPLE_SPEED = 58;
const RIPPLE_DURATION_SECONDS = 1.35;
const RIPPLE_WIDTH = 5.5;
const MAX_BEAT_WAVES = 6;

const SPRING_STIFFNESS = 0.085;
const SPRING_DAMPING = 0.76;
const COLOR_LERP_ALPHA = 0.12;

const FIREWORK_PARTICLE_COUNT = 3000;
const FIREWORK_GRAVITY = 60;
const FIREWORK_DRAG_PER_FRAME = 0.95;
const FIREWORK_FADE_PER_FRAME = 0.94;
const FIREWORK_LIFE_DRAIN_PER_SECOND = 0.48;
const HIDDEN_PARTICLE_POSITION = 9999;

const BACKGROUND_COLOR = new THREE.Color(0x222222);
const BRAND_COLORS = [
  new THREE.Color(0x4285f4),
  new THREE.Color(0xea4335),
  new THREE.Color(0xfbbc05),
  new THREE.Color(0x34a853),
] as const;

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

export function createPinVisualizerScene(
  container: HTMLDivElement,
  options: PinVisualizerSceneOptions = {},
): SceneController {
  const fallbackAudio = createSilentAudioProvider();
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.012);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0, 60);

  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x050505, 1);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.22, 0.52, 0.68);
  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  const afterimagePass = new AfterimagePass();

  rgbShiftPass.uniforms.amount.value = 0.008;
  rgbShiftPass.uniforms.angle.value = 0;
  afterimagePass.uniforms.damp.value = 0.94;

  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(rgbShiftPass);
  composer.addPass(afterimagePass);

  scene.add(new THREE.AmbientLight(0xffffff, 0.78));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(0, 0, 30);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffffff, 2.5, 100);
  pointLight.position.set(0, 0, 20);
  scene.add(pointLight);

  const pinGeometry = new THREE.CylinderGeometry(PIN_RADIUS, PIN_RADIUS, PIN_LENGTH, 8);
  pinGeometry.translate(0, PIN_LENGTH / 2, 0);

  const pinMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.3,
  });

  const pinMesh = new THREE.InstancedMesh(pinGeometry, pinMaterial, PIN_COUNT);
  pinMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(PIN_COUNT * 3), 3);
  scene.add(pinMesh);

  const transform = new THREE.Object3D();
  const pins = createPinStates(pinMesh, transform);
  const fireworks = createFireworkSystem(scene);
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
      const centerFalloff = clamp01(1 - pin.centerDistance / 42);
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

      const spectrumEnergy =
        audio.spectrum[spectrumIndex] * 0.62 + audio.spectrum[mirroredSpectrumIndex] * 0.38;
      const waveformRibbon =
        audio.waveform[waveformIndex] * (1 - Math.min(1, Math.abs(pin.normalizedY - 0.5) * 2.6));
      const bassDome = audio.bass * centerFalloff * centerFalloff * 11;
      const midTerrain =
        Math.sin(pin.x * 0.16 + seconds * (1.6 + audio.mid * 5)) *
        Math.cos(pin.y * 0.12 - seconds * (1.2 + audio.lowMid * 4)) *
        (0.55 + audio.mid * 3.2);
      const trebleShimmer =
        Math.sin((pin.x + pin.y) * 0.62 + seconds * 18) * audio.treble * (0.4 + centeredY * 1.4);
      const spectralRidge = spectrumEnergy * (4 + audio.volume * 8) * (0.35 + (1 - centeredY) * 0.85);
      const beatWave = getBeatWaveOffset(pin.centerDistance, time, beatWaves);

      pin.targetZ =
        PIN_HOME_Z +
        bassDome +
        spectralRidge +
        waveformRibbon * 6 +
        midTerrain +
        trebleShimmer +
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
          audio.bass * centerFalloff * 0.16,
      );

      const pinEnergy = clamp01(spectrumEnergy * 0.5 + centerFalloff * audio.bass * 0.6 + audio.treble * 0.16);
      pin.targetColor.multiplyScalar(0.42 + audio.volume * 0.52 + pinEnergy * 0.78);
      pin.targetColor.addScalar(audio.beatEnergy * centerFalloff * 0.08);
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

    bloomPass.strength = 0.12 + audio.volume * 0.24 + audio.beatEnergy * 0.12;
    bloomPass.radius = 0.38 + audio.mid * 0.14;
    rgbShiftPass.uniforms.amount.value = 0.004 + audio.treble * 0.012 + audio.beatEnergy * 0.006;
    afterimagePass.uniforms.damp.value = 0.91 + clamp01(audio.lowMid + audio.mid) * 0.035;

    updatePins(time, audio);
    fireworks.update(deltaSeconds);

    camera.position.set(Math.sin(time * 0.00018) * audio.lowMid * 2, Math.cos(time * 0.00015) * audio.mid * 1.2, 60);
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
      fallbackAudio.dispose();
      renderPass.dispose();
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
