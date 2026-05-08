/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import * as THREE from 'three';
import {AfterimagePass} from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {RGBShiftShader} from 'three/examples/jsm/shaders/RGBShiftShader.js';
import type {AudioFrame} from './audioEngine';
import {SPECTRUM_BAND_COUNT, WAVEFORM_POINT_COUNT, createSilentAudioProvider} from './audioEngine';

type SceneController = {
  dispose: () => void;
};

export type VisualizerShape = 'sphere' | 'cube' | 'tetrahedron' | 'mobius' | 'doubleHelix' | 'human' | 'wall';

type PinVisualizerSceneOptions = {
  getAudioFrame?: (time: number) => AudioFrame;
  getZoom?: () => number;
  getShape?: () => VisualizerShape;
  getColorIntensity?: () => number;
  getColorShift?: () => number;
  getSolidColorEnabled?: () => boolean;
  getSolidColor?: () => number;
  getPinHeight?: () => number;
  getPinSize?: () => number;
  getOrbitEnabled?: () => boolean;
  onReady?: () => void;
};

type PinSurface = {
  baseX: number;
  baseY: number;
  baseZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
  longitude: number;
  latitude: number;
  orientation: THREE.Quaternion;
};

type PinState = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
  longitude: number;
  latitude: number;
  orientation: THREE.Quaternion;
  surfaces: Record<VisualizerShape, PinSurface>;
  bassAffinity: number;
  lowMidAffinity: number;
  midAffinity: number;
  highMidAffinity: number;
  trebleAffinity: number;
  beatAffinity: number;
  resonancePhase: number;
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
const PIN_HEAD_RADIUS = 0.34;
const PIN_LENGTH = 10;
const PIN_HEAD_OFFSET = PIN_LENGTH + PIN_HEAD_RADIUS * 0.3;
const PIN_HOME_Z = -15;
const FIELD_HALF_WIDTH = ((PIN_COLUMNS - 1) * PIN_SPACING) / 2;
const FIELD_HALF_HEIGHT = ((PIN_ROWS - 1) * PIN_SPACING) / 2;
const FIELD_RADIUS = Math.sqrt(FIELD_HALF_WIDTH * FIELD_HALF_WIDTH + FIELD_HALF_HEIGHT * FIELD_HALF_HEIGHT);
const PIN_SPHERE_RADIUS = FIELD_HALF_HEIGHT * 1.05;
const PIN_SPHERE_RESPONSE_SCALE = 0.82;
const CAMERA_DEFAULT_Z = PIN_SPHERE_RADIUS * 4.75;
const CAMERA_FRAME_RADIUS = PIN_SPHERE_RADIUS + PIN_LENGTH * 3.05 + 28;
const CAMERA_FRAME_MARGIN = 1.18;
const CAMERA_MIN_VISIBLE_HEIGHT_RATIO = 0.66;
const CAMERA_TARGET_SHIFT = CAMERA_FRAME_RADIUS * 0.08;
const CAMERA_PORTRAIT_TARGET_SHIFT = CAMERA_FRAME_RADIUS * 0.09;
const WALL_CAMERA_MARGIN = 1.06;
const MAX_FOG_DENSITY = 0.0048;
const PIN_LOCAL_AXIS = new THREE.Vector3(0, 1, 0);
const ORBIT_LIGHT_DISTANCE = PIN_SPHERE_RADIUS * 1.75;
const ORBIT_LIGHT_HEIGHT = PIN_SPHERE_RADIUS * 0.72;

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

const SPRING_STIFFNESS = 0.085;
const SPRING_DAMPING = 0.76;
// Neighbor coupling strength for the pin field: each pin's spring is perturbed by
// a discrete Laplacian over its 4 grid neighbors. Audio still drives targetZ for
// every pin individually, but transients now propagate laterally as ripples
// through a coupled membrane instead of staying purely local.
const PIN_COUPLING_K = 0.028;
const COLOR_LERP_ALPHA = 0.12;

const FIREWORK_PARTICLE_COUNT = 3000;
const FIREWORK_GRAVITY = 60;
const FIREWORK_DRAG_PER_FRAME = 0.95;
const FIREWORK_FADE_PER_FRAME = 0.94;
const FIREWORK_LIFE_DRAIN_PER_SECOND = 0.48;
const HIDDEN_PARTICLE_POSITION = 9999;

const REACTIVE_SHAPES_ENABLED = false;
const PROCEDURAL_ELEMENTS_ENABLED = false;

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

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = clamp01((value - edge0) / (edge1 - edge0));

  return t * t * (3 - 2 * t);
}

function getContainerSize(container: HTMLElement) {
  const rect = container.getBoundingClientRect();

  return {
    width: Math.max(1, Math.floor(rect.width || window.innerWidth)),
    height: Math.max(1, Math.floor(rect.height || window.innerHeight)),
  };
}

function getResponsiveCameraFrame(width: number, height: number, verticalFovDegrees: number, frameRadius = CAMERA_FRAME_RADIUS) {
  const aspect = width / height;
  const verticalFov = THREE.MathUtils.degToRad(verticalFovDegrees);
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
  const portraitT = clamp01((1 - aspect) / 0.72);
  const usableHeightRatio = Math.max(CAMERA_MIN_VISIBLE_HEIGHT_RATIO, 0.82 - portraitT * 0.12);
  const verticalDistance = (frameRadius / Math.tan(verticalFov / 2)) / usableHeightRatio;
  const horizontalDistance = frameRadius / Math.tan(horizontalFov / 2);
  const distance = Math.max(verticalDistance, horizontalDistance) * CAMERA_FRAME_MARGIN;
  const targetY = -(CAMERA_TARGET_SHIFT + portraitT * CAMERA_PORTRAIT_TARGET_SHIFT);

  return {distance, targetY};
}

function getWallCameraFrame(width: number, height: number, verticalFovDegrees: number) {
  const aspect = width / height;
  const verticalFov = THREE.MathUtils.degToRad(verticalFovDegrees);
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
  const frameHeight = FIELD_HALF_HEIGHT + PIN_LENGTH * 1.2;
  const frameWidth = FIELD_HALF_WIDTH + PIN_LENGTH * 1.2;
  const verticalDist = (frameHeight / Math.tan(verticalFov / 2)) * WALL_CAMERA_MARGIN;
  const horizontalDist = (frameWidth / Math.tan(horizontalFov / 2)) * WALL_CAMERA_MARGIN;
  return {distance: Math.max(verticalDist, horizontalDist), targetY: 0};
}

function getCameraDistance(baseDistance: number, zoom: number) {
  return baseDistance / Math.max(0.35, zoom);
}

function setGradientColor(target: THREE.Color, t: number, colorShift = 0, solidColor?: THREE.Color | null) {
  const shiftedT = t + colorShift;
  const wrappedT = shiftedT - Math.floor(shiftedT);

  if (solidColor) {
    const shade = 0.34 + Math.pow(0.5 + 0.5 * Math.sin(wrappedT * Math.PI * 2), 1.15) * 1.28;

    target.copy(solidColor).multiplyScalar(shade);
    return;
  }

  const scaledT = wrappedT * BRAND_COLORS.length;
  const index = Math.floor(scaledT) % BRAND_COLORS.length;
  const nextIndex = (index + 1) % BRAND_COLORS.length;

  target.copy(BRAND_COLORS[index]).lerp(BRAND_COLORS[nextIndex], scaledT - index);
}

function sampleFloatArray(values: Float32Array, normalizedIndex: number) {
  const index = Math.min(values.length - 1, Math.max(0, Math.floor(normalizedIndex * values.length)));

  return values[index] ?? 0;
}

function fract(value: number) {
  return value - Math.floor(value);
}

function deterministicNoise(x: number, y: number, z: number) {
  return fract(Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453);
}

function createPinSurface(
  baseX: number,
  baseY: number,
  baseZ: number,
  normalX: number,
  normalY: number,
  normalZ: number,
): PinSurface {
  const normalVector = new THREE.Vector3(normalX, normalY, normalZ).normalize();
  const phaseVector = new THREE.Vector3(baseX, baseY, baseZ);

  if (phaseVector.lengthSq() <= 0.000001) {
    phaseVector.copy(normalVector);
  } else {
    phaseVector.normalize();
  }

  return {
    baseX,
    baseY,
    baseZ,
    normalX: normalVector.x,
    normalY: normalVector.y,
    normalZ: normalVector.z,
    longitude: Math.atan2(phaseVector.x, phaseVector.z),
    latitude: Math.asin(THREE.MathUtils.clamp(phaseVector.y, -1, 1)),
    orientation: new THREE.Quaternion().setFromUnitVectors(PIN_LOCAL_AXIS, normalVector),
  };
}

function createSphereSurface(longitude: number, latitude: number): PinSurface {
  const latitudeRadius = Math.cos(latitude);
  const normalX = Math.sin(longitude) * latitudeRadius;
  const normalY = Math.sin(latitude);
  const normalZ = Math.cos(longitude) * latitudeRadius;

  return createPinSurface(
    normalX * PIN_SPHERE_RADIUS,
    normalY * PIN_SPHERE_RADIUS,
    normalZ * PIN_SPHERE_RADIUS,
    normalX,
    normalY,
    normalZ,
  );
}

function createCubeSurface(column: number, row: number): PinSurface {
  const faceT = ((row + 0.5) / PIN_ROWS) * 6;
  const faceIndex = Math.min(5, Math.floor(faceT));
  const u = ((column + 0.5) / PIN_COLUMNS) * 2 - 1;
  const v = (faceT - faceIndex) * 2 - 1;
  const halfSize = PIN_SPHERE_RADIUS * 0.68;

  switch (faceIndex) {
    case 0:
      return createPinSurface(u * halfSize, v * halfSize, halfSize, 0, 0, 1);
    case 1:
      return createPinSurface(halfSize, v * halfSize, -u * halfSize, 1, 0, 0);
    case 2:
      return createPinSurface(-u * halfSize, v * halfSize, -halfSize, 0, 0, -1);
    case 3:
      return createPinSurface(-halfSize, v * halfSize, u * halfSize, -1, 0, 0);
    case 4:
      return createPinSurface(u * halfSize, halfSize, -v * halfSize, 0, 1, 0);
    default:
      return createPinSurface(u * halfSize, -halfSize, v * halfSize, 0, -1, 0);
  }
}

function createTetrahedronSurface(column: number, row: number): PinSurface {
  const tetraRadius = PIN_SPHERE_RADIUS * 1.12;
  const vertices = [
    new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(tetraRadius),
    new THREE.Vector3(-1, -1, 1).normalize().multiplyScalar(tetraRadius),
    new THREE.Vector3(-1, 1, -1).normalize().multiplyScalar(tetraRadius),
    new THREE.Vector3(1, -1, -1).normalize().multiplyScalar(tetraRadius),
  ] as const;
  const faces = [
    [0, 1, 2],
    [0, 3, 1],
    [0, 2, 3],
    [1, 3, 2],
  ] as const;
  const faceT = ((row + 0.5) / PIN_ROWS) * faces.length;
  const faceIndex = Math.min(faces.length - 1, Math.floor(faceT));
  let s = (column + 0.5) / PIN_COLUMNS;
  let t = faceT - faceIndex;

  if (s + t > 1) {
    s = 1 - s;
    t = 1 - t;
  }

  const [aIndex, bIndex, cIndex] = faces[faceIndex];
  const a = vertices[aIndex];
  const b = vertices[bIndex];
  const c = vertices[cIndex];
  const base = new THREE.Vector3()
    .copy(a)
    .multiplyScalar(1 - s - t)
    .addScaledVector(b, s)
    .addScaledVector(c, t);
  const normal = new THREE.Vector3().copy(a).add(b).add(c).normalize();

  return createPinSurface(base.x, base.y, base.z, normal.x, normal.y, normal.z);
}

function createMobiusSurface(column: number, row: number): PinSurface {
  const u = ((column + 0.5) / PIN_COLUMNS) * Math.PI * 2;
  const v = (((row + 0.5) / PIN_ROWS) * 2 - 1) * PIN_SPHERE_RADIUS * 0.38;
  const radius = PIN_SPHERE_RADIUS * 0.82;
  const halfU = u * 0.5;
  const sinU = Math.sin(u);
  const cosU = Math.cos(u);
  const sinHalfU = Math.sin(halfU);
  const cosHalfU = Math.cos(halfU);
  const radialRadius = radius + v * cosHalfU;
  const baseX = radialRadius * sinU;
  const baseY = v * sinHalfU;
  const baseZ = radialRadius * cosU;
  const tangentU = new THREE.Vector3(
    -v * 0.5 * sinHalfU * sinU + radialRadius * cosU,
    v * 0.5 * cosHalfU,
    -v * 0.5 * sinHalfU * cosU - radialRadius * sinU,
  );
  const tangentV = new THREE.Vector3(cosHalfU * sinU, sinHalfU, cosHalfU * cosU);
  const normal = new THREE.Vector3().crossVectors(tangentV, tangentU).normalize();

  if (normal.lengthSq() <= 0.000001) {
    normal.set(baseX, baseY, baseZ).normalize();
  }

  return createPinSurface(baseX, baseY, baseZ, normal.x, normal.y, normal.z);
}

function createDoubleHelixSurface(column: number, row: number): PinSurface {
  const u = (column + 0.5) / PIN_COLUMNS;
  const v = (row + 0.5) / PIN_ROWS;
  const tau = Math.PI * 2;
  const turns = 3.85;
  const height = PIN_SPHERE_RADIUS * 2.52;
  const helixRadius = PIN_SPHERE_RADIUS * 0.64;
  const strandTubeRadius = PIN_SPHERE_RADIUS * 0.062;
  const strandWidth = 0.22;
  const basePairCount = 18;
  const pitchPerRadian = height / (turns * tau);
  const getTheta = (verticalT: number) => (verticalT * turns + 0.04) * tau;
  const getY = (verticalT: number) => (0.5 - verticalT) * height;

  const createStrandCenter = (verticalT: number, phase: number) => {
    const theta = getTheta(verticalT) + phase;

    return new THREE.Vector3(
      Math.sin(theta) * helixRadius,
      getY(verticalT),
      Math.cos(theta) * helixRadius,
    );
  };
  const createRadial = (verticalT: number, phase: number) => {
    const theta = getTheta(verticalT) + phase;

    return new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta)).normalize();
  };
  const createTangent = (verticalT: number, phase: number) => {
    const theta = getTheta(verticalT) + phase;

    return new THREE.Vector3(
      Math.cos(theta) * helixRadius,
      -pitchPerRadian,
      -Math.sin(theta) * helixRadius,
    ).normalize();
  };
  const createBinormal = (verticalT: number, phase: number) =>
    new THREE.Vector3()
      .crossVectors(createTangent(verticalT, phase), createRadial(verticalT, phase))
      .normalize();

  if (u < strandWidth || u > 1 - strandWidth) {
    const isSecondStrand = u > 1 - strandWidth;
    const localU = isSecondStrand ? (u - (1 - strandWidth)) / strandWidth : u / strandWidth;
    const phase = isSecondStrand ? Math.PI : 0;
    const tubeAngle = localU * tau + Math.sin(v * basePairCount * tau) * 0.18;
    const center = createStrandCenter(v, phase);
    const radial = createRadial(v, phase);
    const binormal = createBinormal(v, phase);
    const beadPulse = 0.92 + Math.pow(0.5 + 0.5 * Math.cos(v * basePairCount * tau), 3) * 0.26;
    const tubeNormal = new THREE.Vector3()
      .copy(radial)
      .multiplyScalar(Math.cos(tubeAngle))
      .addScaledVector(binormal, Math.sin(tubeAngle))
      .normalize();
    const base = center.addScaledVector(tubeNormal, strandTubeRadius * beadPulse);

    return createPinSurface(base.x, base.y, base.z, tubeNormal.x, tubeNormal.y, tubeNormal.z);
  }

  const rungT = (u - strandWidth) / (1 - strandWidth * 2);
  const pairPosition = v * basePairCount;
  const pairCenterT = (Math.floor(pairPosition) + 0.5) / basePairCount;
  const pairDistance = Math.abs(fract(pairPosition) - 0.5) * 2;
  const rungStrength = 1 - smoothstep(0.18, 0.58, pairDistance);
  const strandA = createStrandCenter(pairCenterT, 0);
  const strandB = createStrandCenter(pairCenterT, Math.PI);
  const radialA = createRadial(pairCenterT, 0);
  const radialB = createRadial(pairCenterT, Math.PI);
  const tangentFace = new THREE.Vector3(-radialA.z, 0, radialA.x).normalize();
  const innerA = new THREE.Vector3().copy(strandA).addScaledVector(radialA, -strandTubeRadius * 0.55);
  const innerB = new THREE.Vector3().copy(strandB).addScaledVector(radialB, -strandTubeRadius * 0.55);
  const rungArc = Math.sin(rungT * Math.PI);
  const rungBase = new THREE.Vector3()
    .copy(innerA)
    .lerp(innerB, rungT)
    .addScaledVector(tangentFace, rungArc * strandTubeRadius * 0.52);
  const rungNormal = new THREE.Vector3()
    .copy(tangentFace)
    .multiplyScalar(0.68)
    .addScaledVector(rungT < 0.5 ? radialA : radialB, 0.42)
    .normalize();
  const nearestPhase = rungT < 0.5 ? 0 : Math.PI;
  const nearestLocalT = rungT < 0.5 ? rungT / 0.5 : (rungT - 0.5) / 0.5;
  const nearestCenter = createStrandCenter(v, nearestPhase);
  const nearestRadial = createRadial(v, nearestPhase);
  const nearestBinormal = createBinormal(v, nearestPhase);
  const nucleotideAngle = (nearestLocalT - 0.5) * Math.PI;
  const nucleotideNormal = new THREE.Vector3()
    .copy(nearestRadial)
    .multiplyScalar(Math.cos(nucleotideAngle))
    .addScaledVector(nearestBinormal, Math.sin(nucleotideAngle) * 0.82)
    .normalize();
  const nucleotideBase = nearestCenter
    .addScaledVector(nucleotideNormal, strandTubeRadius * 1.18)
    .addScaledVector(createTangent(v, nearestPhase), (nearestLocalT - 0.5) * strandTubeRadius * 1.1);
  const base = nucleotideBase.lerp(rungBase, rungStrength);
  const normal = nucleotideNormal.lerp(rungNormal, rungStrength).normalize();

  return createPinSurface(base.x, base.y, base.z, normal.x, normal.y, normal.z);
}

function createHumanFigureSurface(column: number, row: number): PinSurface {
  const u = (column + 0.5) / PIN_COLUMNS;
  const v = (row + 0.5) / PIN_ROWS;
  const tau = Math.PI * 2;

  const createWrappedSurface = (
    centerX: number,
    centerY: number,
    centerZ: number,
    angle: number,
    radiusX: number,
    radiusZ: number,
    normalY = 0,
  ) => {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const baseX = centerX + cosAngle * radiusX;
    const baseZ = centerZ + sinAngle * radiusZ;
    const normal = new THREE.Vector3(
      cosAngle / Math.max(radiusX, 0.001),
      normalY,
      sinAngle / Math.max(radiusZ, 0.001),
    ).normalize();

    return createPinSurface(baseX, centerY, baseZ, normal.x, normal.y, normal.z);
  };

  if (v < 0.18) {
    const headT = v / 0.18;
    const angle = u * tau;
    const polar = (headT * 0.9 + 0.05) * Math.PI;
    const sinPolar = Math.sin(polar);
    const cosPolar = Math.cos(polar);
    const radiusX = PIN_SPHERE_RADIUS * 0.31;
    const radiusY = PIN_SPHERE_RADIUS * 0.35;
    const radiusZ = PIN_SPHERE_RADIUS * 0.29;
    const centerY = PIN_SPHERE_RADIUS * 0.9;
    const baseX = Math.cos(angle) * radiusX * sinPolar;
    const baseY = centerY + cosPolar * radiusY;
    const baseZ = Math.sin(angle) * radiusZ * sinPolar;
    const normal = new THREE.Vector3(
      (Math.cos(angle) * sinPolar) / radiusX,
      cosPolar / radiusY,
      (Math.sin(angle) * sinPolar) / radiusZ,
    ).normalize();

    return createPinSurface(baseX, baseY, baseZ, normal.x, normal.y, normal.z);
  }

  if (v < 0.24) {
    const neckT = (v - 0.18) / 0.06;
    const angle = u * tau;
    const neckRadiusX = PIN_SPHERE_RADIUS * 0.18;
    const neckRadiusZ = PIN_SPHERE_RADIUS * 0.16;
    const neckY = PIN_SPHERE_RADIUS * (0.59 - neckT * 0.18);

    return createWrappedSurface(0, neckY, 0, angle, neckRadiusX, neckRadiusZ, -0.08);
  }

  if (v < 0.58) {
    const bodyT = (v - 0.24) / 0.34;
    const side = u < 0.18 ? -1 : u > 0.82 ? 1 : 0;

    if (side !== 0) {
      const sideU = side < 0 ? u / 0.18 : (u - 0.82) / 0.18;
      const armT = bodyT;
      const armAngle = sideU * tau;
      const armRadiusX = PIN_SPHERE_RADIUS * (0.1 + Math.sin(armT * Math.PI) * 0.035);
      const armRadiusZ = PIN_SPHERE_RADIUS * (0.095 + Math.sin(armT * Math.PI) * 0.025);
      const armX = side * PIN_SPHERE_RADIUS * (0.58 + armT * 0.12);
      const armY = PIN_SPHERE_RADIUS * (0.42 - armT * 0.82);

      return createWrappedSurface(
        armX,
        armY,
        0,
        armAngle,
        armRadiusX,
        armRadiusZ,
        -0.08,
      );
    }

    const torsoU = (u - 0.18) / 0.64;
    const torsoAngle = torsoU * tau;
    const torsoRadiusX = PIN_SPHERE_RADIUS * (0.47 - bodyT * 0.14 + Math.sin(bodyT * Math.PI) * 0.07);
    const torsoRadiusZ = PIN_SPHERE_RADIUS * (0.25 + Math.sin(bodyT * Math.PI) * 0.05);
    const torsoY = PIN_SPHERE_RADIUS * (0.43 - bodyT * 0.85);
    const shoulderLift = (0.5 - bodyT) * 0.1;

    return createWrappedSurface(
      0,
      torsoY,
      0,
      torsoAngle,
      torsoRadiusX,
      torsoRadiusZ,
      shoulderLift,
    );
  }

  const legT = (v - 0.58) / 0.42;
  const isRightLeg = u >= 0.5;
  const legU = isRightLeg ? (u - 0.5) * 2 : u * 2;
  const legAngle = legU * tau;
  const side = isRightLeg ? 1 : -1;
  const legRadiusX = PIN_SPHERE_RADIUS * (0.18 - legT * 0.035);
  const legRadiusZ = PIN_SPHERE_RADIUS * (0.15 - legT * 0.025);
  const stance = PIN_SPHERE_RADIUS * (0.16 + legT * 0.08);
  const legY = PIN_SPHERE_RADIUS * (-0.48 - legT * 0.95);
  const footPush = smoothstep(0.78, 1, legT) * PIN_SPHERE_RADIUS * 0.13;
  const footSpread = smoothstep(0.78, 1, legT) * side * PIN_SPHERE_RADIUS * 0.16;

  return createWrappedSurface(
    side * stance + footSpread,
    legY,
    0,
    legAngle,
    legRadiusX + footPush,
    legRadiusZ + footPush * 0.45,
    -0.04,
  );
}

function createPinStates(
  pinMesh: THREE.InstancedMesh,
  pinHeadMesh: THREE.InstancedMesh,
  transform: THREE.Object3D,
) {
  const pins: PinState[] = [];
  let pinIndex = 0;

  for (let row = 0; row < PIN_ROWS; row += 1) {
    for (let column = 0; column < PIN_COLUMNS; column += 1) {
      const x = (column - (PIN_COLUMNS - 1) / 2) * PIN_SPACING;
      const y = (row - (PIN_ROWS - 1) / 2) * PIN_SPACING;
      const longitude = (column / PIN_COLUMNS) * Math.PI * 2 + Math.PI;
      const latitudeT = (row + 0.5) / PIN_ROWS;
      const latitude = (0.5 - latitudeT) * Math.PI;
      const sphereSurface = createSphereSurface(longitude, latitude);
      const cubeSurface = createCubeSurface(column, row);
      const tetrahedronSurface = createTetrahedronSurface(column, row);
      const mobiusSurface = createMobiusSurface(column, row);
      const doubleHelixSurface = createDoubleHelixSurface(column, row);
      const humanSurface = createHumanFigureSurface(column, row);
      const wallOrientation = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        -Math.PI / 2,
      );
      const wallSurface: PinSurface = {
        baseX: x,
        baseY: y,
        baseZ: 0,
        normalX: 0,
        normalY: 0,
        normalZ: 1,
        longitude,
        latitude,
        orientation: wallOrientation,
      };
      const resonanceSeed = deterministicNoise(column, row, sphereSurface.normalZ * 17);
      const bassAffinity = 0.18 + Math.pow(clamp01(0.5 + 0.5 * Math.cos(latitude * 3.2) * Math.cos(longitude * 2)), 1.55) * 0.82;
      const lowMidAffinity = 0.18 + Math.pow(clamp01(0.5 + 0.5 * Math.sin(latitude * 4.1 + longitude * 2.5)), 1.4) * 0.82;
      const midAffinity = 0.18 + Math.pow(clamp01(0.5 + 0.5 * Math.cos(longitude * 5.5 - latitude * 2.8)), 1.35) * 0.82;
      const highMidAffinity = 0.18 + Math.pow(clamp01(0.5 + 0.5 * Math.sin(longitude * 7.5 + latitude * 5.2)), 1.55) * 0.82;
      const trebleAffinity =
        0.16 +
        Math.pow(
          clamp01(0.5 + 0.5 * Math.sin(longitude * 13.0 - latitude * 9.0 + resonanceSeed * Math.PI * 2)),
          1.75,
        ) *
          0.84;

      const pin: PinState = {
        x,
        y,
        baseX: sphereSurface.baseX,
        baseY: sphereSurface.baseY,
        baseZ: sphereSurface.baseZ,
        normalX: sphereSurface.normalX,
        normalY: sphereSurface.normalY,
        normalZ: sphereSurface.normalZ,
        longitude: sphereSurface.longitude,
        latitude: sphereSurface.latitude,
        orientation: sphereSurface.orientation.clone(),
        surfaces: {
          sphere: sphereSurface,
          cube: cubeSurface,
          tetrahedron: tetrahedronSurface,
          mobius: mobiusSurface,
          doubleHelix: doubleHelixSurface,
          human: humanSurface,
          wall: wallSurface,
        },
        bassAffinity,
        lowMidAffinity,
        midAffinity,
        highMidAffinity,
        trebleAffinity,
        beatAffinity: 0.35 + deterministicNoise(column * 0.37, row * 0.61, 4.7) * 0.65,
        resonancePhase: resonanceSeed * Math.PI * 2,
        centerDistance: Math.sqrt(x * x + y * y),
        normalizedX: column / (PIN_COLUMNS - 1),
        normalizedY: row / (PIN_ROWS - 1),
        currentZ: PIN_HOME_Z,
        targetZ: PIN_HOME_Z,
        velocityZ: 0,
        currentColor: BACKGROUND_COLOR.clone(),
        targetColor: BACKGROUND_COLOR.clone(),
      };

      pins.push(pin);

      transform.position.set(pin.baseX, pin.baseY, pin.baseZ);
      transform.quaternion.copy(pin.orientation);
      transform.updateMatrix();
      pinMesh.setMatrixAt(pinIndex, transform.matrix);
      pinMesh.setColorAt(pinIndex, BACKGROUND_COLOR);

      transform.position.set(
        pin.baseX + pin.normalX * PIN_HEAD_OFFSET,
        pin.baseY + pin.normalY * PIN_HEAD_OFFSET,
        pin.baseZ + pin.normalZ * PIN_HEAD_OFFSET,
      );
      transform.updateMatrix();
      pinHeadMesh.setMatrixAt(pinIndex, transform.matrix);
      pinHeadMesh.setColorAt(pinIndex, BACKGROUND_COLOR);
      pinIndex += 1;
    }
  }

  pinMesh.instanceMatrix.needsUpdate = true;
  if (pinMesh.instanceColor) {
    pinMesh.instanceColor.needsUpdate = true;
  }
  pinHeadMesh.instanceMatrix.needsUpdate = true;
  if (pinHeadMesh.instanceColor) {
    pinHeadMesh.instanceColor.needsUpdate = true;
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

  const trigger = (strength: number, solidColor?: THREE.Color | null) => {
    const particleScale = 0.65 + strength * 0.55;

    for (let index = 0; index < FIREWORK_PARTICLE_COUNT; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 2;
      positions[offset + 1] = (Math.random() - 0.5) * 2;
      positions[offset + 2] = 0;

      const color = solidColor ?? BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
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

  const update = (time: number, audio: AudioFrame, colorShift = 0, solidColor?: THREE.Color | null) => {
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
      setGradientColor(color, ribbonIndex / WAVE_RIBBON_COUNT + seconds * 0.045 + audio.treble * 0.16, colorShift, solidColor);
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
      setGradientColor(color, ringIndex / OUTER_RING_COUNT + seconds * 0.035 + audio.lowMid * 0.18, colorShift, solidColor);
      ring.material.color.copy(color).multiplyScalar(0.72 + audio.volume * 1.2);
    }
  };

  const dispose = () => {
    scene.remove(group);

    group.traverse((object) => {
      const line = object as THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
      line.geometry?.dispose();
    });

    for (const ribbon of ribbons) {
      ribbon.material.dispose();
    }

    for (const ring of rings) {
      ring.material.dispose();
    }
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
  const sceneFog = new THREE.FogExp2(0x000000, MAX_FOG_DENSITY);
  scene.fog = sceneFog;

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0, CAMERA_DEFAULT_Z);

  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setClearColor(0x000000, 1);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.cursor = 'grab';
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  container.appendChild(renderer.domElement);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const waveWarpPass = new ShaderPass(WaveWarpShader);
  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  const afterimagePass = new AfterimagePass();

  waveWarpPass.uniforms.strength.value = 0;
  rgbShiftPass.uniforms.amount.value = 0.008;
  rgbShiftPass.uniforms.angle.value = 0;
  afterimagePass.uniforms.damp.value = 0.94;

  composer.addPass(renderPass);
  composer.addPass(waveWarpPass);
  composer.addPass(rgbShiftPass);
  composer.addPass(afterimagePass);

  scene.add(new THREE.AmbientLight(0xffffff, 0.74));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.08);
  directionalLight.position.set(0, -10, 48);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffffff, 3.2, 150);
  pointLight.position.set(0, 0, 44);
  scene.add(pointLight);

  const orbitLights = BRAND_COLORS.map((color, index) => {
    const light = new THREE.PointLight(color, 1.4, ORBIT_LIGHT_DISTANCE * 2.6, 1.45);
    const phase = (index / BRAND_COLORS.length) * Math.PI * 2;

    light.position.set(
      Math.cos(phase) * ORBIT_LIGHT_DISTANCE,
      Math.sin(phase * 1.7) * ORBIT_LIGHT_HEIGHT,
      Math.sin(phase) * ORBIT_LIGHT_DISTANCE,
    );
    scene.add(light);

    return light;
  });

  const pinGroup = new THREE.Group();
  scene.add(pinGroup);

  const pinGeometry = new THREE.CylinderGeometry(PIN_RADIUS, PIN_RADIUS, PIN_LENGTH, 8);
  pinGeometry.translate(0, PIN_LENGTH / 2, 0);
  const pinHeadGeometry = new THREE.IcosahedronGeometry(PIN_HEAD_RADIUS, 2);

  const pinMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.04,
    metalness: 0.9,
    roughness: 0.3,
  });
  const pinHeadMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.86,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });

  const pinMesh = new THREE.InstancedMesh(pinGeometry, pinMaterial, PIN_COUNT);
  pinMesh.frustumCulled = false;
  pinMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(PIN_COUNT * 3), 3);
  pinGroup.add(pinMesh);

  const pinHeadMesh = new THREE.InstancedMesh(pinHeadGeometry, pinHeadMaterial, PIN_COUNT);
  pinHeadMesh.frustumCulled = false;
  pinHeadMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(PIN_COUNT * 3), 3);
  pinGroup.add(pinHeadMesh);

  const transform = new THREE.Object3D();
  const pins = createPinStates(pinMesh, pinHeadMesh, transform);
  const pinZSnapshot = new Float32Array(PIN_COUNT);
   const fireworks = createFireworkSystem(scene);
   const waveRibbons = createWaveRibbonSystem(scene);
  const reactiveShapes = REACTIVE_SHAPES_ENABLED ? createReactiveShapeSystem(scene) : null;
  const proceduralElements = PROCEDURAL_ELEMENTS_ENABLED ? createProceduralElementSystem(scene) : null;
  const beatWaves: BeatWave[] = [];
  const solidColorScratch = new THREE.Color();

  let lastFrameTime = performance.now();
  let animationId = 0;
  let isDisposed = false;
  let hasReportedReady = false;
  let cameraBaseZ = CAMERA_DEFAULT_Z;
  let cameraTargetY = -CAMERA_TARGET_SHIFT;
  let wallCameraBaseZ = CAMERA_DEFAULT_Z;
  let wallCameraTargetY = 0;
  let manualOrbitYaw = 0;
  let manualOrbitPitch = 0;
  let orbitPointerId: number | null = null;
  let orbitPointerX = 0;
  let orbitPointerY = 0;

  const endPointerOrbit = (event: PointerEvent) => {
    if (orbitPointerId !== event.pointerId) {
      return;
    }

    try {
      renderer.domElement.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture can already be released by the browser on cancellation.
    }

    orbitPointerId = null;
    renderer.domElement.style.cursor = 'grab';
    event.preventDefault();
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0 && event.pointerType === 'mouse') {
      return;
    }

    orbitPointerId = event.pointerId;
    orbitPointerX = event.clientX;
    orbitPointerY = event.clientY;
    renderer.domElement.style.cursor = 'grabbing';
    renderer.domElement.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (orbitPointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - orbitPointerX;
    const deltaY = event.clientY - orbitPointerY;

    manualOrbitYaw -= deltaX * 0.006;
    manualOrbitPitch = THREE.MathUtils.clamp(manualOrbitPitch - deltaY * 0.0045, -1.15, 1.15);
    orbitPointerX = event.clientX;
    orbitPointerY = event.clientY;
    event.preventDefault();
  };

  renderer.domElement.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', endPointerOrbit);
  window.addEventListener('pointercancel', endPointerOrbit);

  const resize = () => {
    const {width, height} = getContainerSize(container);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const cameraFrame = getResponsiveCameraFrame(width, height, camera.fov);
    const wallFrame = getWallCameraFrame(width, height, camera.fov);

    const isWall = options.getShape?.() === 'wall';
    camera.aspect = width / height;
    cameraBaseZ = cameraFrame.distance;
    cameraTargetY = cameraFrame.targetY;
    wallCameraBaseZ = wallFrame.distance;
    wallCameraTargetY = wallFrame.targetY;
    camera.position.z = getCameraDistance(isWall ? wallCameraBaseZ : cameraBaseZ, options.getZoom?.() ?? 1);
    camera.updateProjectionMatrix();
    camera.lookAt(0, isWall ? wallCameraTargetY : cameraTargetY, 0);

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  window.addEventListener('resize', resize);
  resize();

  const updatePins = (time: number, audio: AudioFrame, colorShift: number, solidColor?: THREE.Color | null) => {
    const seconds = time / 1000;
    const colorPhase = seconds * (0.09 + audio.volume * 0.08);
    const currentShape = options.getShape?.() ?? 'sphere';
    const colorIntensity = options.getColorIntensity?.() ?? 1;
    const pinHeightMult = options.getPinHeight?.() ?? 1;
    const pinSizeMult = options.getPinSize?.() ?? 1;

    // Snapshot heights so neighbor reads in the coupling step see a stable
    // previous-frame field, not a half-updated one.
    for (let index = 0; index < PIN_COUNT; index += 1) {
      pinZSnapshot[index] = pins[index].currentZ;
    }

    for (let index = 0; index < PIN_COUNT; index += 1) {
      const pin = pins[index];
      const surface = pin.surfaces[currentShape];

      pin.baseX = surface.baseX;
      pin.baseY = surface.baseY;
      pin.baseZ = surface.baseZ;
      pin.normalX = surface.normalX;
      pin.normalY = surface.normalY;
      pin.normalZ = surface.normalZ;
      pin.longitude = surface.longitude;
      pin.latitude = surface.latitude;
      pin.orientation.copy(surface.orientation);

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
      const bassReaction = audio.bass * pin.bassAffinity;
      const lowMidReaction = audio.lowMid * pin.lowMidAffinity;
      const midReaction = audio.mid * pin.midAffinity;
      const highMidReaction = audio.highMid * pin.highMidAffinity;
      const trebleReaction = audio.treble * pin.trebleAffinity;
      const bandReaction = clamp01(
        bassReaction * 0.9 +
          lowMidReaction * 0.7 +
          midReaction * 0.62 +
          highMidReaction * 0.58 +
          trebleReaction * 0.68 +
          spectrumEnergy * 0.5,
      );
      const wholeSphereEnergy = clamp01(
        audio.volume * 0.36 +
          audio.bass * 0.2 +
          audio.lowMid * 0.16 +
          audio.mid * 0.14 +
          audio.highMid * 0.14 +
          audio.treble * 0.18 +
          audio.beatEnergy * 0.22,
      );
      const longitudeSweep = clamp01(
        0.5 +
          0.5 *
            Math.sin(
              pin.normalX * 7.5 +
                pin.normalZ * 5.2 +
                seconds * (1.35 + audio.highMid * 5.8 + audio.treble * 3.2),
            ),
      );
      const latitudeSweep = clamp01(
        0.5 +
          0.5 *
            Math.cos(
              pin.normalY * 9.2 -
                pin.normalZ * 4.4 +
                seconds * (1.05 + audio.lowMid * 4.2 + audio.mid * 4.8),
            ),
      );
      const cymaticBass =
        Math.abs(Math.sin(pin.longitude * 3 + pin.latitude * 4 + pin.resonancePhase * 0.18)) *
        Math.abs(Math.cos(pin.latitude * 5.5 - seconds * (0.35 + audio.bass * 1.8)));
      const cymaticMid =
        Math.abs(
          Math.sin(pin.longitude * 7 - pin.latitude * 6 + seconds * (0.5 + audio.mid * 2.6) + pin.resonancePhase),
        ) *
        Math.abs(Math.cos((pin.normalX - pin.normalZ) * 8.5 + seconds * (0.4 + audio.lowMid * 2.2)));
      const cymaticTreble = Math.pow(
        Math.abs(
          Math.sin(
            pin.longitude * 15 +
              pin.latitude * 11 +
              seconds * (1.2 + audio.treble * 7.5) +
              pin.resonancePhase * 1.7,
          ),
        ),
        2.2,
      );
      const cymaticField = clamp01(
        cymaticBass * bassReaction +
          cymaticMid * (lowMidReaction + midReaction) * 0.72 +
          cymaticTreble * (highMidReaction + trebleReaction) * 0.82 +
          audio.beatEnergy * pin.beatAffinity * 0.42,
      );
      const curlA = Math.sin(
        pin.longitude * 4.5 +
          pin.latitude * 5.5 +
          seconds * (0.62 + audio.lowMid * 4.8) +
          waveformY * 3.8 +
          pin.resonancePhase,
      );
      const curlB = Math.cos(
        pin.longitude * -5.8 +
          pin.latitude * 3.7 -
          seconds * (0.7 + audio.mid * 4.1) +
          waveformX * 4.2,
      );
      const fluidVorticity = curlA * curlB;
      const fluidEnergy = clamp01(
        Math.abs(fluidVorticity) * (audio.lowMid * 0.58 + audio.mid * 0.5 + audio.volume * 0.34) +
          spectrumEnergy * 0.22,
      );
      const globalPinReaction = clamp01(
        wholeSphereEnergy * 0.72 +
          spectrumEnergy * 0.58 +
          (longitudeSweep * audio.highMid + latitudeSweep * audio.treble) * 0.54 +
          bandReaction * 0.56 +
          cymaticField * 0.62 +
          fluidEnergy * 0.38 +
          audio.beatEnergy * 0.34,
      );
      const waveformRibbon =
        waveformX * (1 - Math.min(1, Math.abs(pin.normalizedY - 0.5) * 2.3));
      const bassDome = audio.bass * centerFalloff * centerFalloff * 12.5;
      const surfacePulse =
        wholeSphereEnergy * (1.8 + longitudeSweep * 2.7 + latitudeSweep * 1.4) +
        bandReaction * (1.4 + cymaticField * 3.4) +
        audio.beatEnergy * pin.beatAffinity * (1.2 + longitudeSweep * 2.5);
      const sphericalLightWave =
        Math.sin((pin.normalX + pin.normalY * 0.7 - pin.normalZ * 0.45) * 8.5 + seconds * (1.4 + audio.mid * 4.6)) *
        wholeSphereEnergy *
        2.4;
      const cymaticLift = cymaticField * (3.2 + bassReaction * 4.8 + trebleReaction * 3.5);
      const fluidLift = fluidVorticity * fluidEnergy * (4.8 + audio.volume * 5.5);
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
        (bassDome +
        spectralRidge +
        waveformRibbon * 6 +
        midTerrain +
        trebleShimmer +
        surfacePulse +
        sphericalLightWave +
        cymaticLift +
        fluidLift +
        layeredWave +
        beatWave) * pinHeightMult;

      const springForce = (pin.targetZ - pin.currentZ) * SPRING_STIFFNESS;
      const column = index % PIN_COLUMNS;
      const row = (index - column) / PIN_COLUMNS;
      let neighborDelta = 0;
      if (column > 0) {
        neighborDelta += pinZSnapshot[index - 1] - pin.currentZ;
      }
      if (column < PIN_COLUMNS - 1) {
        neighborDelta += pinZSnapshot[index + 1] - pin.currentZ;
      }
      if (row > 0) {
        neighborDelta += pinZSnapshot[index - PIN_COLUMNS] - pin.currentZ;
      }
      if (row < PIN_ROWS - 1) {
        neighborDelta += pinZSnapshot[index + PIN_COLUMNS] - pin.currentZ;
      }
      pin.velocityZ = (pin.velocityZ + springForce + neighborDelta * PIN_COUPLING_K) * SPRING_DAMPING;
      pin.currentZ += pin.velocityZ;

      setGradientColor(
        pin.targetColor,
        pin.normalizedX * 0.34 +
          pin.normalizedY * 0.2 +
          colorPhase +
          spectrumEnergy * 0.22 +
          audio.bass * centerFalloff * 0.16 +
          globalPinReaction * 0.2 +
          bandReaction * 0.18 +
          cymaticField * 0.16 +
          fluidVorticity * 0.025 +
          edgeGlow * (0.12 + audio.highMid * 0.18 + audio.treble * 0.18) +
          layeredWave * 0.006,
        colorShift,
        solidColor,
      );

      const pinEnergy = clamp01(
        spectrumEnergy * 0.5 +
          globalPinReaction * 0.68 +
          bandReaction * 0.7 +
          cymaticField * 0.56 +
          fluidEnergy * 0.32 +
          centerFalloff * audio.bass * 0.6 +
          wholeSphereEnergy * 0.44 +
          audio.treble * 0.16 +
          edgeGlow * (audio.highMid * 0.28 + audio.treble * 0.32 + audio.volume * 0.12) +
          Math.abs(layeredWave) * 0.024,
      );
      const sphereFrontGlow = Math.pow(clamp01(pin.normalZ * 0.5 + 0.5), 0.8) * 0.16;
      const spherePoleGlow = Math.pow(Math.abs(pin.normalY), 0.9) * 0.08;
      const humanWrapGlow =
        currentShape === 'human'
          ? Math.pow(Math.abs(pin.normalZ), 0.78) * 0.18 + Math.pow(Math.abs(pin.normalX), 0.9) * 0.06
          : 0;

      pin.targetColor.multiplyScalar(
        (0.42 +
          audio.volume * 0.7 +
          wholeSphereEnergy * 0.55 +
          pinEnergy * 1.22 +
          edgeGlow * 0.28 +
          sphereFrontGlow +
          spherePoleGlow +
          humanWrapGlow) * colorIntensity,
      );
      pin.targetColor.addScalar(
        (0.018 +
          globalPinReaction * 0.08 +
          audio.beatEnergy * (centerFalloff * 0.1 + edgeGlow * 0.16) +
          audio.volume * edgeGlow * 0.06 +
          humanWrapGlow * 0.08) * colorIntensity,
      );
      pin.targetColor.r = Math.min(pin.targetColor.r, 1);
      pin.targetColor.g = Math.min(pin.targetColor.g, 1);
      pin.targetColor.b = Math.min(pin.targetColor.b, 1);
      pin.currentColor.lerp(pin.targetColor, COLOR_LERP_ALPHA);

      const pinOffset = (pin.currentZ - PIN_HOME_Z) * PIN_SPHERE_RESPONSE_SCALE;
      const bassSize = bassReaction * (0.85 + cymaticBass * 0.95);
      const midSize = (lowMidReaction + midReaction) * (0.48 + cymaticMid * 0.72 + fluidEnergy * 0.55);
      const trebleSize = (highMidReaction + trebleReaction) * (0.34 + cymaticTreble * 0.58);
      const sizeReaction = clamp01(
        bassSize * 0.78 +
          midSize * 0.48 +
          trebleSize * 0.34 +
          bandReaction * 0.42 +
          audio.beatEnergy * pin.beatAffinity * 0.36,
      );
      const stemLengthScale = 0.72 + (sizeReaction * 1.38 + bassReaction * 0.42 + audio.beatEnergy * pin.beatAffinity * 0.3) * pinSizeMult;
      const stemThicknessScale =
        0.72 +
        (sizeReaction * 0.72 +
        trebleReaction * 0.32 +
        fluidEnergy * 0.26 +
        audio.beatEnergy * pin.beatAffinity * 0.16) * pinSizeMult;
      const pinHeadOffset = pinOffset + PIN_LENGTH * stemLengthScale + PIN_HEAD_RADIUS * (0.55 + sizeReaction * 0.65 * pinSizeMult);
      const pinHeadScale = 0.76 + (sizeReaction * 1.05 + globalPinReaction * 0.36 + audio.beatEnergy * 0.24) * pinSizeMult;

      transform.scale.set(stemThicknessScale, stemLengthScale, stemThicknessScale);
      transform.position.set(
        pin.baseX + pin.normalX * pinOffset,
        pin.baseY + pin.normalY * pinOffset,
        pin.baseZ + pin.normalZ * pinOffset,
      );
      transform.quaternion.copy(pin.orientation);
      transform.updateMatrix();
      pinMesh.setMatrixAt(index, transform.matrix);
      pinMesh.setColorAt(index, pin.currentColor);

      transform.scale.setScalar(pinHeadScale);
      transform.position.set(
        pin.baseX + pin.normalX * pinHeadOffset,
        pin.baseY + pin.normalY * pinHeadOffset,
        pin.baseZ + pin.normalZ * pinHeadOffset,
      );
      transform.updateMatrix();
      pinHeadMesh.setMatrixAt(index, transform.matrix);
      pinHeadMesh.setColorAt(index, pin.currentColor);
    }

    pinMesh.instanceMatrix.needsUpdate = true;
    if (pinMesh.instanceColor) {
      pinMesh.instanceColor.needsUpdate = true;
    }
    pinHeadMesh.instanceMatrix.needsUpdate = true;
    if (pinHeadMesh.instanceColor) {
      pinHeadMesh.instanceColor.needsUpdate = true;
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
    const colorShift = options.getColorShift?.() ?? 0;
    const solidColor = options.getSolidColorEnabled?.()
      ? solidColorScratch.set(options.getSolidColor?.() ?? 0xffffff)
      : null;

    if (audio.beat) {
      beatWaves.push({startedAt: time, strength: Math.max(0.35, audio.beatEnergy || audio.bass)});

      if (beatWaves.length > MAX_BEAT_WAVES) {
        beatWaves.shift();
      }

      if (audio.beatEnergy > 0.52) {
        fireworks.trigger(audio.beatEnergy, solidColor);
      }
    }

    if (audio.snareOnset) {
      beatWaves.push({startedAt: time, strength: Math.max(0.18, audio.snareEnergy * 0.55)});

      if (beatWaves.length > MAX_BEAT_WAVES) {
        beatWaves.shift();
      }
    }

    while (beatWaves.length > 0 && (time - beatWaves[0].startedAt) / 1000 > RIPPLE_DURATION_SECONDS) {
      beatWaves.shift();
    }

    const glowDrive = audio.rmsEnergy * 0.52 + audio.highMid * 0.24 + audio.treble * 0.28 + audio.beatEnergy * 0.45;
    const centroidGlow = audio.spectralCentroid * audio.rmsEnergy;
    const orbitLightBands = [audio.bass, audio.lowMid, audio.mid, audio.highMid, audio.treble] as const;

    renderer.toneMappingExposure = 0.96 + audio.rmsEnergy * 0.22 + audio.beatEnergy * 0.18 + centroidGlow * 0.12;
    pointLight.intensity = 2.2 + glowDrive * 5.8 + centroidGlow * 2.4;
    directionalLight.intensity = 0.88 + audio.rmsEnergy * 0.6 + audio.beatEnergy * 0.38;
    pinMaterial.emissiveIntensity = 0.02 + glowDrive * 0.22 + centroidGlow * 0.14;

    orbitLights.forEach((light, index) => {
      const bandEnergy = orbitLightBands[index % orbitLightBands.length];
      const phase = time * (0.00028 + index * 0.000025) + (index / orbitLights.length) * Math.PI * 2;
      const verticalPhase = time * (0.00021 + index * 0.000019) + index * 1.3;

      light.position.set(
        Math.cos(phase) * ORBIT_LIGHT_DISTANCE,
        Math.sin(verticalPhase) * ORBIT_LIGHT_HEIGHT,
        Math.sin(phase) * ORBIT_LIGHT_DISTANCE,
      );
      setGradientColor(light.color, index / orbitLights.length, colorShift, solidColor);
      light.intensity = 1.15 + audio.volume * 2.8 + bandEnergy * 5.8 + audio.beatEnergy * 3.6;
    });

    waveWarpPass.uniforms.time.value = time / 1000;
    waveWarpPass.uniforms.strength.value =
      0.0022 + audio.volume * 0.011 + audio.bass * 0.007 + audio.beatEnergy * 0.012;
    waveWarpPass.uniforms.bass.value = audio.bass;
    waveWarpPass.uniforms.mid.value = audio.mid;
    waveWarpPass.uniforms.treble.value = audio.treble;
    waveWarpPass.uniforms.beat.value = audio.beatEnergy;
    rgbShiftPass.uniforms.amount.value = 0.004 + audio.treble * 0.014 + audio.highMid * 0.004 + audio.beatEnergy * 0.007 + audio.hatEnergy * 0.006;
    afterimagePass.uniforms.damp.value = 0.91 + clamp01(audio.lowMid + audio.mid) * 0.035;

     updatePins(time, audio, colorShift, solidColor);
     waveRibbons.update(time, audio, colorShift, solidColor);
    reactiveShapes?.update(time, audio);
    proceduralElements?.update(time, audio);
    fireworks.update(deltaSeconds);

    const isWall = (options.getShape?.() ?? 'sphere') === 'wall';
    const activeCameraBaseZ = isWall ? wallCameraBaseZ : cameraBaseZ;
    const activeCameraTargetY = isWall ? wallCameraTargetY : cameraTargetY;
    const cameraDistance = getCameraDistance(activeCameraBaseZ, options.getZoom?.() ?? 1);
    sceneFog.density = Math.min(MAX_FOG_DENSITY, 1.22 / cameraDistance);

    const orbitEnabled = options.getOrbitEnabled?.() ?? false;
    const autoOrbitYaw = (!isWall && orbitEnabled) ? time * 0.0003 : 0;
    const autoOrbitPitch = (!isWall && orbitEnabled) ? Math.sin(time * 0.00012) * 0.22 : 0;
    const cameraYaw = autoOrbitYaw + manualOrbitYaw;
    const cameraPitch = THREE.MathUtils.clamp(autoOrbitPitch + manualOrbitPitch, -1.18, 1.18);
    const effectiveDistance = Math.max(12, cameraDistance - audio.beatEnergy * 2.4);

    if (isWall) {
      camera.position.set(
        Math.sin(cameraYaw) * effectiveDistance * 0.08 + Math.sin(time * 0.00018) * audio.lowMid * 1.2,
        Math.sin(cameraPitch) * effectiveDistance * 0.08 + Math.cos(time * 0.00015) * audio.mid * 0.8,
        effectiveDistance,
      );
      pinGroup.rotation.y = 0;
      pinGroup.rotation.x = 0;
    } else {
      const horizontalDistance = Math.cos(cameraPitch) * effectiveDistance;
      camera.position.set(
        Math.sin(cameraYaw) * horizontalDistance + Math.sin(time * 0.00018) * audio.lowMid * 2.4,
        Math.sin(cameraPitch) * effectiveDistance + Math.cos(time * 0.00015) * audio.mid * 1.4,
        Math.cos(cameraYaw) * horizontalDistance,
      );
      pinGroup.rotation.y = time * 0.00007 + audio.lowMid * 0.12;
      pinGroup.rotation.x = Math.sin(time * 0.00011) * 0.08 + audio.highMid * 0.05;
    }

    camera.lookAt(0, activeCameraTargetY, 0);
    composer.render();
  };

  animationId = window.requestAnimationFrame(animate);

  return {
    dispose: () => {
      isDisposed = true;
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', endPointerOrbit);
      window.removeEventListener('pointercancel', endPointerOrbit);
      resizeObserver.disconnect();

      scene.remove(pinGroup);
      for (const light of orbitLights) {
        scene.remove(light);
      }
       fireworks.dispose();
       waveRibbons.dispose();
      reactiveShapes?.dispose();
      proceduralElements?.dispose();
      fallbackAudio.dispose();
      renderPass.dispose();
      waveWarpPass.dispose();
      rgbShiftPass.dispose();
      afterimagePass.dispose();
      composer.dispose();
      pinGeometry.dispose();
      pinHeadGeometry.dispose();
      pinMaterial.dispose();
      pinHeadMaterial.dispose();
      renderer.renderLists.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    },
  };
}
