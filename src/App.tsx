/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import {useCallback, useEffect, useRef, useState} from 'react';
import type {CSSProperties, ChangeEvent, DragEvent, WheelEvent} from 'react';
import type {AudioFrame, AudioFrameProvider, FileAudioFrameProvider, FilePlaybackState} from './audioEngine';
import {
  SPECTRUM_BAND_COUNT,
  WAVEFORM_POINT_COUNT,
  createBrowserTabAudioProvider,
  createFileAudioProvider,
  createMicrophoneAudioProvider,
  createSilentAudioProvider,
} from './audioEngine';
import {createPinVisualizerScene, type VisualizerShape} from './pinVisualizerScene';

type VisualizerMode = 'tab' | 'microphone' | 'file';
type SensitivityByMode = Record<VisualizerMode, number>;
type GodModeOverrideKey =
  | 'sensitivity'
  | 'zoom'
  | 'colorIntensity'
  | 'colorShift'
  | 'solidColor'
  | 'pinHeight'
  | 'pinSize'
  | 'shape'
  | 'orbit';
type GodModeOverrides = Record<GodModeOverrideKey, boolean>;

const SENSITIVITY_MIN = 25;
const SENSITIVITY_MAX = 300;
const SENSITIVITY_STEP = 5;
const DEFAULT_SENSITIVITY_BY_MODE: SensitivityByMode = {
  tab: 100,
  microphone: 140,
  file: 100,
};
const ZOOM_MIN = 50;
const ZOOM_MAX = 200;
const ZOOM_STEP = 5;
const DEFAULT_ZOOM = 100;
const COLOR_INTENSITY_MIN = 10;
const COLOR_INTENSITY_MAX = 200;
const COLOR_INTENSITY_STEP = 5;
const DEFAULT_COLOR_INTENSITY = 100;
const COLOR_SHIFT_MIN = 0;
const COLOR_SHIFT_MAX = 360;
const COLOR_SHIFT_STEP = 1;
const DEFAULT_COLOR_SHIFT = 0;
const PIN_HEIGHT_MIN = 0;
const PIN_HEIGHT_MAX = 200;
const PIN_HEIGHT_STEP = 5;
const DEFAULT_PIN_HEIGHT = 100;
const PIN_SIZE_MIN = 0;
const PIN_SIZE_MAX = 200;
const PIN_SIZE_STEP = 5;
const DEFAULT_PIN_SIZE = 100;
const VISUALIZER_SHAPES: Array<{label: string; value: VisualizerShape}> = [
  {label: 'Sphere', value: 'sphere'},
  {label: 'Cube', value: 'cube'},
  {label: 'Tetrahedron', value: 'tetrahedron'},
  {label: 'Mobius Strip', value: 'mobius'},
  {label: 'Double Helix', value: 'doubleHelix'},
  {label: 'Human Figure', value: 'human'},
  {label: 'Wall', value: 'wall'},
];
const GOD_MODE_SHAPES: Array<{label: string; value: VisualizerShape}> = [
  {label: 'Sphere', value: 'sphere'},
  {label: 'Cube', value: 'cube'},
  {label: 'Tetrahedron', value: 'tetrahedron'},
  {label: 'Mobius Strip', value: 'mobius'},
  {label: 'Double Helix', value: 'doubleHelix'},
  {label: 'Human Figure', value: 'human'},
  {label: 'Wall', value: 'wall'},
];
const SOLID_COLOR_PALETTE = [
  {label: 'Blue', value: 0x4285f4, hex: '#4285f4'},
  {label: 'Red', value: 0xea4335, hex: '#ea4335'},
  {label: 'Gold', value: 0xfbbc05, hex: '#fbbc05'},
  {label: 'Green', value: 0x34a853, hex: '#34a853'},
  {label: 'Violet', value: 0x9b5cff, hex: '#9b5cff'},
  {label: 'Cyan', value: 0x20d5ff, hex: '#20d5ff'},
] as const;
const DEFAULT_SOLID_COLOR = SOLID_COLOR_PALETTE[0].value;

// Clamp a value between 0 and 1
function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Clamp a value between -1 and 1
function clampSigned(value: number) {
  return Math.min(1, Math.max(-1, value));
}

// Create a new mutable audio frame with default values
function createMutableAudioFrame(): AudioFrame {
  return {
    bass: 0,
    lowMid: 0,
    mid: 0,
    highMid: 0,
    treble: 0,
    volume: 0,
    beat: false,
    beatEnergy: 0,
    snareOnset: false,
    snareEnergy: 0,
    hatOnset: false,
    hatEnergy: 0,
    spectralFlux: 0,
    spectralCentroid: 0,
    rmsEnergy: 0,
    spectrum: new Float32Array(SPECTRUM_BAND_COUNT),
    waveform: new Float32Array(WAVEFORM_POINT_COUNT),
  };
}

// Apply sensitivity multiplier to audio frame values
function applyAudioSensitivity(source: AudioFrame, target: AudioFrame, bandScale: number) {
  const waveformScale = 0.75 + bandScale * 0.25;

  target.bass = Math.tanh(source.bass * bandScale);
  target.lowMid = Math.tanh(source.lowMid * bandScale);
  target.mid = Math.tanh(source.mid * bandScale);
  target.highMid = Math.tanh(source.highMid * bandScale);
  target.treble = Math.tanh(source.treble * bandScale);
  target.volume = Math.tanh(source.volume * bandScale);
  target.beat = source.beat;
  target.beatEnergy = Math.tanh(source.beatEnergy * bandScale);
  target.snareOnset = source.snareOnset;
  target.snareEnergy = Math.tanh(source.snareEnergy * bandScale);
  target.hatOnset = source.hatOnset;
  target.hatEnergy = Math.tanh(source.hatEnergy * bandScale);
  target.spectralFlux = Math.tanh(source.spectralFlux * bandScale);
  target.spectralCentroid = source.spectralCentroid;
  target.rmsEnergy = Math.tanh(source.rmsEnergy * bandScale);

  for (let index = 0; index < SPECTRUM_BAND_COUNT; index += 1) {
    target.spectrum[index] = Math.tanh((source.spectrum[index] ?? 0) * bandScale);
  }

  for (let index = 0; index < WAVEFORM_POINT_COUNT; index += 1) {
    target.waveform[index] = clampSigned((source.waveform[index] ?? 0) * waveformScale);
  }

  return target;
}

// Extract a readable message from an unknown error
function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Something went wrong while starting audio.';
}

// Format seconds into mm:ss display string
function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return '0:00';
  }

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Create a default/empty playback state
function createEmptyPlaybackState(): FilePlaybackState {
  return {
    currentTime: 0,
    duration: 0,
    isPaused: true,
    isEnded: false,
  };
}

// Create default god mode override flags (all off)
function createGodModeOverrides(): GodModeOverrides {
  return {
    sensitivity: false,
    zoom: false,
    colorIntensity: false,
    colorShift: false,
    solidColor: false,
    pinHeight: false,
    pinSize: false,
    shape: false,
    orbit: false,
  };
}

// Main app component: manages audio sources, visualization settings, and god mode
export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const providerRef = useRef<AudioFrameProvider | null>(null);
  const fileProviderRef = useRef<FileAudioFrameProvider | null>(null);
  const sensitivityFrameRef = useRef<AudioFrame | null>(null);
  const sensitivityMultiplierRef = useRef(DEFAULT_SENSITIVITY_BY_MODE.tab / 100);
  const modeRef = useRef<VisualizerMode>('tab');
  const zoomMultiplierRef = useRef(DEFAULT_ZOOM / 100);
  const shapeRef = useRef<VisualizerShape>('sphere');
  const colorIntensityRef = useRef(DEFAULT_COLOR_INTENSITY / 100);
  const colorShiftRef = useRef(DEFAULT_COLOR_SHIFT / COLOR_SHIFT_MAX);
  const solidColorModeRef = useRef(false);
  const solidColorRef = useRef<number>(DEFAULT_SOLID_COLOR);
  const pinHeightRef = useRef(DEFAULT_PIN_HEIGHT / 100);
  const pinSizeRef = useRef(DEFAULT_PIN_SIZE / 100);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<VisualizerMode>('tab');
  const [status, setStatus] = useState('Tab audio off');
  const [trackName, setTrackName] = useState('Browser tab audio');
  const [error, setError] = useState<string | null>(null);
  const [isTabAudioEnabled, setIsTabAudioEnabled] = useState(false);
  const [sensitivityByMode, setSensitivityByMode] = useState<SensitivityByMode>(() => DEFAULT_SENSITIVITY_BY_MODE);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [colorIntensity, setColorIntensity] = useState(DEFAULT_COLOR_INTENSITY);
  const [colorShift, setColorShift] = useState(DEFAULT_COLOR_SHIFT);
  const [isSolidColorMode, setIsSolidColorMode] = useState(false);
  const [solidColor, setSolidColor] = useState<number>(DEFAULT_SOLID_COLOR);
  const [pinHeight, setPinHeight] = useState(DEFAULT_PIN_HEIGHT);
  const [pinSize, setPinSize] = useState(DEFAULT_PIN_SIZE);
  const [visualizerShape, setVisualizerShape] = useState<VisualizerShape>('sphere');
  const [playback, setPlayback] = useState<FilePlaybackState>(() => createEmptyPlaybackState());
  const [isControlsCollapsed, setIsControlsCollapsed] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const isAutoModeRef = useRef(false);
  const godModeOverridesRef = useRef<GodModeOverrides>(createGodModeOverrides());
  const [isOrbitMode, setIsOrbitMode] = useState(false);
  const isOrbitModeRef = useRef(false);
  const savedSensitivityRef = useRef<SensitivityByMode | null>(null);

  if (!providerRef.current) {
    providerRef.current = createSilentAudioProvider();
  }

  if (!sensitivityFrameRef.current) {
    sensitivityFrameRef.current = createMutableAudioFrame();
  }

  const sensitivity = sensitivityByMode[mode];
  const sensitivityProgressPercent =
    ((sensitivity - SENSITIVITY_MIN) / (SENSITIVITY_MAX - SENSITIVITY_MIN)) * 100;
  const zoomProgressPercent = ((zoom - ZOOM_MIN) / (ZOOM_MAX - ZOOM_MIN)) * 100;
  const colorIntensityProgressPercent = ((colorIntensity - COLOR_INTENSITY_MIN) / (COLOR_INTENSITY_MAX - COLOR_INTENSITY_MIN)) * 100;
  const colorShiftProgressPercent = ((colorShift - COLOR_SHIFT_MIN) / (COLOR_SHIFT_MAX - COLOR_SHIFT_MIN)) * 100;
  const pinHeightProgressPercent = ((pinHeight - PIN_HEIGHT_MIN) / (PIN_HEIGHT_MAX - PIN_HEIGHT_MIN)) * 100;
  const pinSizeProgressPercent = ((pinSize - PIN_SIZE_MIN) / (PIN_SIZE_MAX - PIN_SIZE_MIN)) * 100;

  // Replace the current audio provider and optionally set a file provider
  const replaceProvider = useCallback((provider: AudioFrameProvider, fileProvider: FileAudioFrameProvider | null = null) => {
    providerRef.current?.dispose();
    providerRef.current = provider;
    fileProviderRef.current = fileProvider;
  }, []);

  // Stop tab audio and reset to silent provider
  const stopTabAudio = useCallback(() => {
    replaceProvider(createSilentAudioProvider());
    setMode('tab');
    setStatus('Tab audio off');
    setTrackName('Browser tab audio');
    setError(null);
    setIsTabAudioEnabled(false);
    setPlayback(createEmptyPlaybackState());
  }, [replaceProvider]);

  // Start capturing audio from a browser tab
  const startTabAudio = useCallback(async () => {
    try {
      setStatus('Choose a Chrome tab');
      setError(null);

      const provider = await createBrowserTabAudioProvider(() => {
        replaceProvider(createSilentAudioProvider());
        setMode('tab');
        setStatus('Tab audio off');
        setTrackName('Browser tab audio');
        setIsTabAudioEnabled(false);
      });

      replaceProvider(provider);
      setMode('tab');
      setStatus('Capturing tab audio');
      setTrackName('Browser tab audio');
      setIsTabAudioEnabled(true);
      setPlayback(createEmptyPlaybackState());
    } catch (startError) {
      replaceProvider(createSilentAudioProvider());
      setMode('tab');
      setStatus('Tab audio off');
      setTrackName('Browser tab audio');
      setIsTabAudioEnabled(false);
      setPlayback(createEmptyPlaybackState());
      setError(getErrorMessage(startError));
    }
  }, [replaceProvider]);

  // Toggle tab audio on or off
  const toggleTabAudio = useCallback(() => {
    if (isTabAudioEnabled) {
      stopTabAudio();
      return;
    }

    void startTabAudio();
  }, [isTabAudioEnabled, startTabAudio, stopTabAudio]);

  // Start capturing audio from the microphone
  const startMicrophone = useCallback(async () => {
    try {
      setStatus('Requesting microphone');
      setError(null);
      setIsTabAudioEnabled(false);
      setPlayback(createEmptyPlaybackState());

      const provider = await createMicrophoneAudioProvider();
      replaceProvider(provider);
      setMode('microphone');
      setStatus('Listening');
      setTrackName('Microphone input');
    } catch (startError) {
      replaceProvider(createSilentAudioProvider());
      setStatus('Microphone unavailable');
      setError(getErrorMessage(startError));
    }
  }, [replaceProvider]);

  // Load and start visualizing an audio file
  const startFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('audio/')) {
        setError('Choose an audio file to visualize.');
        return;
      }

      try {
        setStatus('Loading audio');
        setError(null);
        setIsTabAudioEnabled(false);
        setPlayback(createEmptyPlaybackState());

        const provider = await createFileAudioProvider(file);
        replaceProvider(provider, provider);
        setMode('file');
        setStatus('Playing');
        setTrackName(file.name);
        setPlayback(provider.getPlaybackState());
      } catch (startError) {
        replaceProvider(createSilentAudioProvider());
        setStatus('Audio file unavailable');
        setError(getErrorMessage(startError));
      }
    },
    [replaceProvider],
  );

  // Trigger the hidden file input click
  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // Handle file input change and load selected audio file
  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      event.target.value = '';

      if (file) {
        void startFile(file);
      }
    },
    [startFile],
  );

  // Handle audio file dropped onto the visualizer
  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const file = Array.from(event.dataTransfer.files).find((candidate) => candidate.type.startsWith('audio/'));

      if (file) {
        void startFile(file);
      }
    },
    [startFile],
  );

  // Toggle play/pause for the current file
  const toggleFilePlayback = useCallback(async () => {
    const provider = fileProviderRef.current;

    if (!provider) {
      return;
    }

    try {
      const isPlaying = await provider.togglePlayback();
      const nextPlayback = provider.getPlaybackState();

      setPlayback(nextPlayback);
      setStatus(isPlaying ? 'Playing' : 'Paused');
      setError(null);
    } catch (playbackError) {
      setError(getErrorMessage(playbackError));
    }
  }, []);

  // Seek to a new position in the audio file
  const handleSeek = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const provider = fileProviderRef.current;

    if (!provider) {
      return;
    }

    provider.seek(Number(event.target.value));
    setPlayback(provider.getPlaybackState());
  }, []);

  // Mark a setting as manually overridden in god mode
  const markGodModeOverride = useCallback((key: GodModeOverrideKey) => {
    if (isAutoModeRef.current) {
      godModeOverridesRef.current[key] = true;
    }
  }, []);

  // Update sensitivity and mark as overridden
  const handleSensitivityChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextSensitivity = Number(event.target.value);

      markGodModeOverride('sensitivity');
      setSensitivityByMode((currentSensitivityByMode) => ({
        ...currentSensitivityByMode,
        [mode]: nextSensitivity,
      }));
    },
    [markGodModeOverride, mode],
  );

  // Update zoom level and mark as overridden
  const handleZoomChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    markGodModeOverride('zoom');
    setZoom(Number(event.target.value));
  }, [markGodModeOverride]);

  // Adjust zoom with mouse wheel while preventing zoom on controls
  const handleVisualizerWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      const target = event.target;

      if (target instanceof HTMLElement && target.closest('[data-controls-panel="true"]')) {
        return;
      }

      if (event.deltaY === 0) {
        return;
      }

      event.preventDefault();
      markGodModeOverride('zoom');

      const direction = event.deltaY > 0 ? -1 : 1;
      const stepCount = Math.max(1, Math.min(4, Math.ceil(Math.abs(event.deltaY) / 120)));

      setZoom((currentZoom) =>
        Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, currentZoom + direction * ZOOM_STEP * stepCount)),
      );
    },
    [markGodModeOverride],
  );

  // Update color intensity and mark as overridden
  const handleColorIntensityChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    markGodModeOverride('colorIntensity');
    setColorIntensity(Number(event.target.value));
  }, [markGodModeOverride]);

  // Update color shift and mark as overridden
  const handleColorShiftChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    markGodModeOverride('colorShift');
    setColorShift(Number(event.target.value));
  }, [markGodModeOverride]);

  // Set solid color and mark as overridden
  const handleSolidColorSelect = useCallback((nextColor: number) => {
    markGodModeOverride('solidColor');
    setSolidColor(nextColor);
  }, [markGodModeOverride]);

  // Toggle solid color mode and mark as overridden
  const handleSolidColorModeToggle = useCallback(() => {
    markGodModeOverride('solidColor');
    setIsSolidColorMode((currentSolidColorMode) => !currentSolidColorMode);
  }, [markGodModeOverride]);

  // Update pin height and mark as overridden
  const handlePinHeightChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    markGodModeOverride('pinHeight');
    setPinHeight(Number(event.target.value));
  }, [markGodModeOverride]);

  // Update pin size and mark as overridden
  const handlePinSizeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    markGodModeOverride('pinSize');
    setPinSize(Number(event.target.value));
  }, [markGodModeOverride]);

  // Set visualizer shape and mark as overridden
  const handleShapeSelect = useCallback(
    (nextShape: VisualizerShape) => {
      markGodModeOverride('shape');
      setVisualizerShape(nextShape);
    },
    [markGodModeOverride],
  );

  // Toggle orbit camera mode and mark as overridden
  const handleOrbitToggle = useCallback(() => {
    markGodModeOverride('orbit');
    setIsOrbitMode((currentOrbitMode) => !currentOrbitMode);
  }, [markGodModeOverride]);

  // Initialize the 3D visualizer scene and wire up audio/frame callbacks
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    setIsLoading(true);

    const scene = createPinVisualizerScene(container, {
      getAudioFrame: (time) => {
        return applyAudioSensitivity(
          providerRef.current!.getFrame(time),
          sensitivityFrameRef.current!,
          sensitivityMultiplierRef.current,
        );
      },
      getZoom: () => zoomMultiplierRef.current,
      getShape: () => shapeRef.current,
      getColorIntensity: () => colorIntensityRef.current,
      getColorShift: () => colorShiftRef.current,
      getSolidColorEnabled: () => solidColorModeRef.current,
      getSolidColor: () => solidColorRef.current,
      getPinHeight: () => pinHeightRef.current,
      getPinSize: () => pinSizeRef.current,
      getOrbitEnabled: () => isOrbitModeRef.current,
      onReady: () => setIsLoading(false),
    });

    return () => scene.dispose();
  }, []);

  // Sync all state values to refs for use in callbacks and intervals
  useEffect(() => {
    modeRef.current = mode;
    sensitivityMultiplierRef.current = sensitivity / 100;
    zoomMultiplierRef.current = zoom / 100;
    colorIntensityRef.current = colorIntensity / 100;
    colorShiftRef.current = colorShift / COLOR_SHIFT_MAX;
    solidColorModeRef.current = isSolidColorMode;
    solidColorRef.current = solidColor;
    pinHeightRef.current = pinHeight / 100;
    pinSizeRef.current = pinSize / 100;
    shapeRef.current = visualizerShape;
    isOrbitModeRef.current = isOrbitMode;
  });

  // Default sensitivity to 35%, pin height to 170%, and zoom to 120% when wall shape is selected.
  // Saves previous per-mode sensitivities so they are restored when leaving wall mode.
  useEffect(() => {
    if (visualizerShape === 'wall') {
      savedSensitivityRef.current = sensitivityByMode;
      setSensitivityByMode({tab: 35, microphone: 35, file: 35});
      setPinHeight(170);
      setZoom(120);
    } else if (savedSensitivityRef.current) {
      setSensitivityByMode(savedSensitivityRef.current);
      savedSensitivityRef.current = null;
    }
  }, [visualizerShape]);

  // Reset god mode overrides when toggling auto mode on/off
  useEffect(() => {
    isAutoModeRef.current = isAutoMode;
    godModeOverridesRef.current = createGodModeOverrides();
  }, [isAutoMode]);

  // God mode: auto-adjust visualization settings based on audio analysis
  useEffect(() => {
    if (!isAutoMode) return;

    const smoothed = {
      sensitivity: sensitivity,
      colorIntensity: colorIntensity,
      colorShift: colorShift,
      pinHeight: pinHeight,
      pinSize: pinSize,
      zoom: zoom,
    };
    const spectrumMemory = new Float32Array(SPECTRUM_BAND_COUNT);
    const shapeScores = new Array(GOD_MODE_SHAPES.length).fill(0);
    const shapeOrder = new Map(GOD_MODE_SHAPES.map(({value}, index) => [value, index] as const));
    const memory = {
      energy: 0,
      body: 0,
      brightness: 0,
      motion: 0,
      mass: 0,
      focus: 0,
      chaos: 0,
      spaciousness: 0,
      texture: 0,
      flux: 0,
      beatDensity: 0,
      contrast: 0,
      groove: 0,
    };
    let colorVelocity = 0.35;
    let colorDirection = 1;
    let beatCount = 0;
    let lastShapeSwitch = performance.now();
    let lastOrbitSwitch = performance.now();
    let lastSolidSwitch = performance.now();
    let lastPulseDecision = performance.now();
    let godOrbitEnabled = isOrbitModeRef.current;
    let godSolidColorEnabled = solidColorModeRef.current;
    let godSolidColorIndex = SOLID_COLOR_PALETTE.findIndex((color) => color.value === solidColorRef.current);
    let shapeIndex = GOD_MODE_SHAPES.findIndex((s) => s.value === visualizerShape);
    if (shapeIndex < 0) shapeIndex = 0;
    if (godSolidColorIndex < 0) godSolidColorIndex = 0;
    let uiFrameCounter = 0;
    let sceneImpulse = 0;
    const sceneSeed = Math.random() * Math.PI * 2;

    // Average spectrum values over a normalized range (0-1)
    const averageSpectrum = (start: number, end: number) => {
      const startIndex = Math.max(0, Math.min(SPECTRUM_BAND_COUNT - 1, Math.floor(start * SPECTRUM_BAND_COUNT)));
      const endIndex = Math.max(startIndex + 1, Math.min(SPECTRUM_BAND_COUNT, Math.ceil(end * SPECTRUM_BAND_COUNT)));
      let sum = 0;

      for (let index = startIndex; index < endIndex; index += 1) {
        sum += spectrumMemory[index];
      }

      return sum / (endIndex - startIndex);
    };

    // Set the score for a specific visualizer shape
    const setShapeScore = (scores: number[], shape: VisualizerShape, score: number) => {
      const targetIndex = shapeOrder.get(shape);

      if (targetIndex !== undefined) {
        scores[targetIndex] = score;
      }
    };

    const intervalId = window.setInterval(() => {
      if (!isAutoModeRef.current) return;

      const frame = sensitivityFrameRef.current;
      if (!frame) return;

      const bass = frame.bass;
      const lowMid = frame.lowMid;
      const mid = frame.mid;
      const highMid = frame.highMid;
      const treble = frame.treble;
      const volume = frame.volume;
      const beatEnergy = frame.beatEnergy;
      const centroid = frame.spectralCentroid;
      const rmsEnergy = frame.rmsEnergy;
      const beat = frame.beat;
      const now = performance.now();
      const seconds = now / 1000;
      const overrides = godModeOverridesRef.current;

      let fluxSum = 0;
      let riseSum = 0;
      let waveformSum = 0;
      let waveformPeak = 0;

      // Calculate spectral flux and rise from frame-to-frame spectrum changes
      for (let index = 0; index < SPECTRUM_BAND_COUNT; index += 1) {
        const nextSpectrum = frame.spectrum[index] ?? 0;
        const previousSpectrum = spectrumMemory[index] ?? 0;
        const delta = nextSpectrum - previousSpectrum;

        fluxSum += Math.abs(delta);
        riseSum += Math.max(0, delta);
        spectrumMemory[index] = previousSpectrum + delta * 0.34; // blend old and new
      }

      // Analyze waveform for motion characteristics
      for (let index = 0; index < WAVEFORM_POINT_COUNT; index += 1) {
        const wave = Math.abs(frame.waveform[index] ?? 0);

        waveformSum += wave;
        waveformPeak = Math.max(waveformPeak, wave);
      }

      // Compute high-level audio features from raw bands
      const spectrumFlux = clamp01((fluxSum / SPECTRUM_BAND_COUNT) * 2.8);
      const spectralRise = clamp01((riseSum / SPECTRUM_BAND_COUNT) * 4.2);
      const waveformMotion = clamp01((waveformSum / WAVEFORM_POINT_COUNT) * 1.7 + waveformPeak * 0.28);
      const spectrumBass = averageSpectrum(0, 0.14);
      const spectrumBody = averageSpectrum(0.14, 0.42);
      const spectrumPresence = averageSpectrum(0.42, 0.72);
      const spectrumAir = averageSpectrum(0.72, 1);
      const bandValues = [bass, lowMid, mid, highMid, treble];
      const dominantBandValue = Math.max(...bandValues);
      const dominantBandIndex = bandValues.indexOf(dominantBandValue);
      const weakestBandValue = Math.min(...bandValues);
      const bandSpread = clamp01(dominantBandValue - weakestBandValue); // how wide the frequency spread is
      const balance = 1 - bandSpread; // inverse of spread - higher when focused on few bands

      // Composite audio characteristics for visualization decisions
      const energy = clamp01(volume * 0.48 + rmsEnergy * 0.38 + beatEnergy * 0.34);
      const quietLift = 1 - clamp01(volume * 1.15 + beatEnergy * 0.85); // lifts settings when audio is quiet
      const brightness = clamp01(highMid * 0.45 + treble * 0.55 + centroid * 0.36);
      const body = clamp01(bass * 0.5 + lowMid * 0.34 + mid * 0.22);
      const motion = clamp01(Math.abs(treble - bass) * 0.38 + beatEnergy * 0.4 + rmsEnergy * 0.22 + spectrumFlux * 0.5 + waveformMotion * 0.32);
      const mass = clamp01(body * 0.48 + volume * 0.28 + rmsEnergy * 0.24 + spectrumBass * 0.22 + spectrumBody * 0.18);
      const texture = clamp01(spectrumPresence * 0.3 + spectrumAir * 0.32 + spectralRise * 0.42 + waveformMotion * 0.24);
      const chaos = clamp01(spectrumFlux * 0.62 + spectralRise * 0.42 + beatEnergy * 0.25 + waveformMotion * 0.28 + bandSpread * 0.18);
      const focus = clamp01(dominantBandValue * 0.48 + balance * 0.28 + (1 - chaos) * 0.24);
      const contrast = clamp01(Math.abs(brightness - body) * 0.82 + bandSpread * 0.28);
      const groove = clamp01(beatEnergy * 0.38 + bass * 0.28 + lowMid * 0.26 + memory.beatDensity * 0.36);

      // Smooth memory values with exponential decay (smaller factor = slower response)
      memory.energy += (energy - memory.energy) * 0.18;
      memory.body += (body - memory.body) * 0.16;
      memory.brightness += (brightness - memory.brightness) * 0.2;
      memory.motion += (motion - memory.motion) * 0.2;
      memory.mass += (mass - memory.mass) * 0.16;
      memory.focus += (focus - memory.focus) * 0.14;
      memory.chaos += (chaos - memory.chaos) * 0.22;
      memory.spaciousness += (quietLift - memory.spaciousness) * 0.12;
      memory.texture += (texture - memory.texture) * 0.2;
      memory.flux += (spectrumFlux - memory.flux) * 0.24;
      memory.contrast += (contrast - memory.contrast) * 0.18;
      memory.groove += (groove - memory.groove) * 0.18;
      memory.beatDensity = clamp01(memory.beatDensity * 0.92 + (beat ? 0.18 + beatEnergy * 0.22 : spectralRise * 0.015));
      sceneImpulse = clamp01(sceneImpulse * 0.82 + (beat ? beatEnergy * 0.58 + memory.groove * 0.18 : spectralRise * 0.08));

      // Organic motion generators for adding life to decisions
      const generativeBreath = 0.5 + 0.5 * Math.sin(seconds * (0.48 + memory.groove * 1.6) + sceneSeed);
      const cellularPulse = 0.5 + 0.5 * Math.sin(seconds * (1.8 + memory.chaos * 4.8) + sceneSeed * 0.37 + memory.flux * 2);
      const decisionPressure = clamp01(memory.chaos * 0.4 + memory.beatDensity * 0.32 + spectralRise * 0.32 + sceneImpulse * 0.22);

      // Target values for each setting (auto mode tries to reach these)
      const tHeight =
        14 +
        memory.mass * 116 +
        memory.groove * 42 +
        memory.flux * 44 +
        beatEnergy * 54 +
        (dominantBandIndex === 0 ? 24 : 0) +
        generativeBreath * 16;
      const tSize =
        24 +
        memory.texture * 58 +
        memory.motion * 48 +
        memory.brightness * 32 +
        memory.beatDensity * 42 +
        bandSpread * 24 +
        (dominantBandIndex >= 3 ? 18 : 0);
      const tZoom =
        110 -
        memory.mass * 30 -
        memory.beatDensity * 22 +
        memory.brightness * 26 +
        memory.focus * 20 +
        memory.chaos * 12 +
        Math.sin(seconds * (0.82 + memory.motion * 2.8) + sceneSeed) * (5 + memory.chaos * 9);

      // Update color rotation speed based on audio characteristics
      colorVelocity =
        colorVelocity * 0.82 +
        colorDirection *
          (0.18 +
            centroid * 0.54 +
            Math.max(0, treble - bass) * 0.72 +
            memory.flux * 1.9 +
            memory.chaos * 1.35 +
            memory.beatDensity * 1.45 +
            cellularPulse * 0.24);

      if (beat) {
        colorVelocity += colorDirection * (2.2 + beatEnergy * 5.8 + memory.brightness * 2.8 + spectralRise * 3.5);
      }

      // Decide color rotation direction based on brightness vs body balance
      if ((beat && beatEnergy > 0.52) || (decisionPressure > 0.7 && now - lastPulseDecision > 620)) {
        colorDirection = memory.brightness + spectrumAir >= memory.body + spectrumBass ? 1 : -1;
        lastPulseDecision = now;
      }

      // Smoothly interpolate current values toward targets
      const lerp = 0.055 + memory.flux * 0.05 + memory.beatDensity * 0.035;
      smoothed.pinHeight += (tHeight - smoothed.pinHeight) * (lerp + memory.mass * 0.02);
      smoothed.pinSize += (tSize - smoothed.pinSize) * (lerp + memory.texture * 0.018);
      smoothed.zoom += (tZoom - smoothed.zoom) * (0.045 + memory.focus * 0.03 + memory.chaos * 0.025);
      smoothed.colorShift = (smoothed.colorShift + colorVelocity + COLOR_SHIFT_MAX) % COLOR_SHIFT_MAX;

      const solidIntent = clamp01(memory.focus * 0.42 + memory.mass * 0.26 + memory.spaciousness * 0.18 + (beat && beatEnergy > 0.62 ? 0.18 : 0));
      const spectrumIntent = clamp01(memory.chaos * 0.48 + memory.brightness * 0.36 + memory.flux * 0.34 + memory.beatDensity * 0.22);

      if (!overrides.solidColor) {
        if (now - lastSolidSwitch > 2600) {
          const shouldUseSolid = solidIntent > spectrumIntent + 0.16 && memory.energy > 0.08;

          if (shouldUseSolid !== godSolidColorEnabled) {
            godSolidColorEnabled = shouldUseSolid;
            solidColorModeRef.current = godSolidColorEnabled;
            lastSolidSwitch = now;
          }
        }

        // Score each palette color based on current audio character with novelty bonus
        const paletteScores = [
          bass + lowMid * 0.34 + memory.mass * 0.24,
          beatEnergy + highMid * 0.32 + memory.chaos * 0.22,
          lowMid * 0.5 + mid * 0.38 + memory.focus * 0.2,
          mid * 0.42 + memory.body * 0.3 + balance * 0.16,
          treble * 0.42 + centroid * 0.38 + memory.texture * 0.24,
          highMid * 0.42 + spectrumAir * 0.34 + memory.flux * 0.34,
        ].map((base, index) => {
          const novelty = index === godSolidColorIndex ? -0.12 : Math.min(0.24, (now - lastSolidSwitch) / 6000) * 0.12;
          const nudge = Math.sin(sceneSeed + seconds * 0.6 + index * 2.41) * 0.06;
          return base + novelty + nudge;
        });
        const nextSolidColorIndex = paletteScores.indexOf(Math.max(...paletteScores));

        if (nextSolidColorIndex >= 0 && (nextSolidColorIndex !== godSolidColorIndex || beat)) {
          godSolidColorIndex = nextSolidColorIndex;
          solidColorRef.current = SOLID_COLOR_PALETTE[godSolidColorIndex]?.value ?? DEFAULT_SOLID_COLOR;
          lastSolidSwitch = now;
        }
      } else {
        const currentSolidColorIndex = SOLID_COLOR_PALETTE.findIndex((color) => color.value === solidColorRef.current);

        godSolidColorEnabled = solidColorModeRef.current;
        if (currentSolidColorIndex >= 0) {
          godSolidColorIndex = currentSolidColorIndex;
        }
      }

      // Write to scene refs with lerp for smooth transitions
      if (!overrides.colorShift) {
        const target = smoothed.colorShift / COLOR_SHIFT_MAX;
        colorShiftRef.current += (target - colorShiftRef.current) * 0.05;
      }
      if (!overrides.pinHeight) {
        const target = Math.min(PIN_HEIGHT_MAX, Math.max(PIN_HEIGHT_MIN, smoothed.pinHeight)) / 100;
        pinHeightRef.current += (target - pinHeightRef.current) * 0.05;
      }
      if (!overrides.pinSize) {
        const target = Math.min(PIN_SIZE_MAX, Math.max(PIN_SIZE_MIN, smoothed.pinSize)) / 100;
        pinSizeRef.current += (target - pinSizeRef.current) * 0.05;
      }
      if (!overrides.zoom) {
        const target = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, smoothed.zoom)) / 100;
        zoomMultiplierRef.current += (target - zoomMultiplierRef.current) * 0.05;
      }

      // Shape switching on beats
      if (!overrides.shape) {
        if (beat) beatCount += 1;

        const shapeCooldown = 850 + (1 - memory.chaos) * 1450 + memory.focus * 500;
        if (now - lastShapeSwitch > shapeCooldown) {
          const targetShapeScores = new Array(GOD_MODE_SHAPES.length).fill(0);

          // Score each shape based on which audio characteristics it matches best
          setShapeScore(targetShapeScores, 'wall', 0.2 + bass * 0.5 + memory.mass * 0.4 + memory.body * 0.3 + (1 - memory.chaos) * 0.3);
          setShapeScore(targetShapeScores, 'sphere', 0.3 + balance * 0.36 + memory.focus * 0.42 + memory.spaciousness * 0.2 - memory.chaos * 0.14);
          setShapeScore(targetShapeScores, 'cube', 0.18 + mid * 0.36 + highMid * 0.3 + memory.beatDensity * 0.46 + spectralRise * 0.28);
          setShapeScore(targetShapeScores, 'tetrahedron', 0.16 + treble * 0.54 + memory.brightness * 0.36 + memory.chaos * 0.42 + spectrumAir * 0.22);
          setShapeScore(targetShapeScores, 'mobius', 0.22 + highMid * 0.42 + treble * 0.32 + memory.flux * 0.44 + memory.contrast * 0.28);
          setShapeScore(targetShapeScores, 'doubleHelix', 0.18 + lowMid * 0.38 + mid * 0.34 + memory.groove * 0.48 + memory.beatDensity * 0.32);
          setShapeScore(targetShapeScores, 'human', 0.2 + balance * 0.3 + memory.mass * 0.4 + memory.groove * 0.36 + memory.focus * 0.28);

          let bestShapeIndex = shapeIndex;
          let bestShapeScore = Number.NEGATIVE_INFINITY;

          // Blend target scores into persistent scores, with novelty bonus for untried shapes
          for (let index = 0; index < GOD_MODE_SHAPES.length; index += 1) {
            shapeScores[index] += ((targetShapeScores[index] ?? 0) - shapeScores[index]) * 0.24;

            const novelty = index === shapeIndex ? -0.08 : Math.min(0.16, (now - lastShapeSwitch) / 9000) * 0.08;
            const proceduralNudge = Math.sin(sceneSeed + seconds * (0.42 + memory.motion) + index * 1.73) * memory.chaos * 0.05;
            const finalScore = shapeScores[index] + novelty + proceduralNudge;

            if (finalScore > bestShapeScore) {
              bestShapeScore = finalScore;
              bestShapeIndex = index;
            }
          }

          const currentShapeScore = shapeScores[shapeIndex] ?? 0;
          // Switch if a better shape is found and enough time has passed or a beat trigger occurs
          const shouldSwitchShape =
            bestShapeIndex !== shapeIndex &&
            ((beat && beatEnergy > 0.38 + memory.focus * 0.12) ||
              beatCount >= Math.max(3, Math.round(7 - memory.chaos * 3)) ||
              decisionPressure > 0.64 ||
              now - lastShapeSwitch > 7200) &&
            bestShapeScore > currentShapeScore + 0.035;

          if (shouldSwitchShape) {
            shapeIndex = bestShapeIndex;
            shapeRef.current = GOD_MODE_SHAPES[shapeIndex].value;
            if (shapeRef.current === 'wall') {
              if (!overrides.pinHeight) smoothed.pinHeight = 170;
              if (!overrides.zoom) smoothed.zoom = 120;
            }
            lastShapeSwitch = now;
            beatCount = 0;
          }
        }
      } else {
        const currentShapeIndex = GOD_MODE_SHAPES.findIndex((shape) => shape.value === shapeRef.current);

        if (currentShapeIndex >= 0) {
          shapeIndex = currentShapeIndex;
        }
      }

      // Auto-toggle orbit mode based on chaos vs stability in the audio
      if (!overrides.orbit) {
        if (now - lastOrbitSwitch > 1000 + memory.focus * 950) {
          const orbitIntent = clamp01(memory.chaos * 0.44 + memory.flux * 0.34 + memory.brightness * 0.28 + memory.beatDensity * 0.24 + sceneImpulse * 0.24);
          const settleIntent = clamp01(memory.mass * 0.36 + memory.focus * 0.32 + memory.spaciousness * 0.24 + (1 - memory.motion) * 0.14);
          const shouldOrbit = orbitIntent > settleIntent + 0.1;
          const shouldSettle = settleIntent > orbitIntent + 0.18;

          if (shouldOrbit !== godOrbitEnabled && (shouldOrbit || shouldSettle)) {
            godOrbitEnabled = shouldOrbit;
            isOrbitModeRef.current = godOrbitEnabled;
            lastOrbitSwitch = now;
          }
        }
      } else {
        godOrbitEnabled = isOrbitModeRef.current;
      }

      // Sync state for UI display at ~5 fps
      uiFrameCounter += 1;
      if (uiFrameCounter % 4 === 0) {
        const snap = (val: number, min: number, max: number, step: number) =>
          Math.round(Math.min(max, Math.max(min, val)) / step) * step;
        if (!overrides.colorShift) {
          setColorShift(snap(smoothed.colorShift, COLOR_SHIFT_MIN, COLOR_SHIFT_MAX, COLOR_SHIFT_STEP) % COLOR_SHIFT_MAX);
        }
        if (!overrides.pinHeight) {
          setPinHeight(snap(smoothed.pinHeight, PIN_HEIGHT_MIN, PIN_HEIGHT_MAX, PIN_HEIGHT_STEP));
        }
        if (!overrides.pinSize) {
          setPinSize(snap(smoothed.pinSize, PIN_SIZE_MIN, PIN_SIZE_MAX, PIN_SIZE_STEP));
        }
        if (!overrides.zoom) {
          setZoom(snap(smoothed.zoom, ZOOM_MIN, ZOOM_MAX, ZOOM_STEP));
        }
        if (!overrides.solidColor) {
          setIsSolidColorMode(godSolidColorEnabled);
          setSolidColor(SOLID_COLOR_PALETTE[godSolidColorIndex]?.value ?? DEFAULT_SOLID_COLOR);
        }
        if (!overrides.shape) {
          setVisualizerShape(GOD_MODE_SHAPES[shapeIndex].value);
        }
        if (!overrides.orbit) {
          setIsOrbitMode(godOrbitEnabled);
        }
      }
    }, 50);

    return () => window.clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoMode]);

  // Clean up audio provider on unmount
  useEffect(() => {
    return () => providerRef.current?.dispose();
  }, []);

  // Poll file playback state and update UI periodically
  useEffect(() => {
    if (mode !== 'file') {
      return;
    }

    const intervalId = window.setInterval(() => {
      const nextPlayback = fileProviderRef.current?.getPlaybackState();

      if (!nextPlayback) {
        return;
      }

      setPlayback(nextPlayback);
      setStatus(nextPlayback.isEnded ? 'Ended' : nextPlayback.isPaused ? 'Paused' : 'Playing');
    }, 180);

    return () => window.clearInterval(intervalId);
  }, [mode]);

  // Get CSS class for mode buttons based on active state
  const getButtonClass = (targetMode: Exclude<VisualizerMode, 'tab'>) =>
    `min-w-24 rounded border px-3 py-2 text-sm font-medium transition ${
      mode === targetMode
        ? 'border-white bg-white text-black'
        : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
    }`;
  // Calculate file playback progress as percentage
  const progressPercent = playback.duration > 0 ? Math.min(100, (playback.currentTime / playback.duration) * 100) : 0;

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[#050505] font-sans text-white"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      onWheel={handleVisualizerWheel}
    >
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="crt-overlay" aria-hidden="true" />

      <button
        type="button"
        role="switch"
        aria-checked={isAutoMode}
        onClick={() => setIsAutoMode((prev) => !prev)}
        className={`pointer-events-auto absolute top-4 right-3 left-16 z-50 flex min-h-14 items-center justify-between gap-4 border px-4 py-3 text-left shadow-2xl backdrop-blur-md transition sm:left-auto sm:min-w-72 ${
          isAutoMode
            ? 'border-white bg-white text-black shadow-white/30'
            : 'border-white/25 bg-black/60 text-white shadow-black/45 hover:border-white/65 hover:bg-white/10'
        }`}
      >
        <span className="min-w-0">
          <span className={`block text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${isAutoMode ? 'text-black/55' : 'text-white/45'}`}>
            {isAutoMode ? 'Director Online' : 'Activate Director'}
          </span>
          <span className="mt-0.5 block truncate text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
            GOD MODE
          </span>
        </span>
        <span
          className={`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition ${
            isAutoMode ? 'bg-black' : 'bg-white/15'
          }`}
          aria-hidden="true"
        >
          <span
            className={`h-6 w-6 rounded-full transition ${
              isAutoMode ? 'translate-x-6 bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]' : 'translate-x-0 bg-white/85'
            }`}
          />
        </span>
      </button>

      <button
        type="button"
        onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
        className="pointer-events-auto absolute top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-white/55 hover:bg-white/10"
        aria-label={isControlsCollapsed ? 'Show controls' : 'Hide controls'}
        aria-expanded={!isControlsCollapsed}
      >
        <div className="flex flex-col gap-[3px]">
          <span className="block h-[2px] w-5 bg-white" />
          <span className="block h-[2px] w-5 bg-white" />
          <span className="block h-[2px] w-5 bg-white" />
        </div>
      </button>

      {!isControlsCollapsed && (
        <div className="pointer-events-none absolute left-3 right-3 top-24 z-50 sm:top-16 sm:left-4 sm:right-auto sm:w-[min(23rem,calc(100vw-2rem))]">
          <div
            data-controls-panel="true"
            className="pointer-events-auto max-h-[calc(100vh-7rem)] overflow-y-auto border border-white/12 bg-black/35 p-3 shadow-xl shadow-black/35 backdrop-blur-sm sm:max-h-[calc(100vh-5rem)]"
          >
          <div className="min-w-0 w-full">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/55">Pin Art Visualizer</p>
            <h1 className="mt-1 truncate text-base font-medium text-white">{trackName}</h1>
            <p className="mt-1 text-xs text-white/65" aria-live="polite">
              {error ?? status}
            </p>

            <div className="mt-3 grid max-w-xl grid-cols-2 gap-x-3 gap-y-2">
              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="audio-sensitivity" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Sensitivity
                    <span className="ml-2 tracking-normal text-white/65">{sensitivity}%</span>
                  </label>
                </div>
                <input
                  id="audio-sensitivity"
                  type="range"
                  min={SENSITIVITY_MIN}
                  max={SENSITIVITY_MAX}
                  step={SENSITIVITY_STEP}
                  value={sensitivity}
                  onChange={handleSensitivityChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${sensitivityProgressPercent}%`} as CSSProperties}
                  aria-label={`${mode} audio sensitivity`}
                />
              </div>

              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="visualizer-zoom" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Zoom
                    <span className="ml-2 tracking-normal text-white/65">{zoom}%</span>
                  </label>
                </div>
                <input
                  id="visualizer-zoom"
                  type="range"
                  min={ZOOM_MIN}
                  max={ZOOM_MAX}
                  step={ZOOM_STEP}
                  value={zoom}
                  onChange={handleZoomChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${zoomProgressPercent}%`} as CSSProperties}
                  aria-label="Visualizer zoom"
                />
              </div>

              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="color-intensity" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Color Intensity
                    <span className="ml-2 tracking-normal text-white/65">{colorIntensity}%</span>
                  </label>
                </div>
                <input
                  id="color-intensity"
                  type="range"
                  min={COLOR_INTENSITY_MIN}
                  max={COLOR_INTENSITY_MAX}
                  step={COLOR_INTENSITY_STEP}
                  value={colorIntensity}
                  onChange={handleColorIntensityChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${colorIntensityProgressPercent}%`} as CSSProperties}
                  aria-label="Color intensity"
                />
              </div>

              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="color-shift" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Color Shift
                    <span className="ml-2 tracking-normal text-white/65">{colorShift} deg</span>
                  </label>
                </div>
                <input
                  id="color-shift"
                  type="range"
                  min={COLOR_SHIFT_MIN}
                  max={COLOR_SHIFT_MAX}
                  step={COLOR_SHIFT_STEP}
                  value={colorShift}
                  onChange={handleColorShiftChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${colorShiftProgressPercent}%`} as CSSProperties}
                  aria-label="Color shift"
                />
              </div>

              <div className="col-span-2 border border-white/10 bg-black/20 p-2 transition-opacity">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">Solid Color</p>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isSolidColorMode}
                    className={`flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium transition ${
                      isSolidColorMode
                        ? 'border-white bg-white text-black'
                        : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
                    }`}
                    onClick={handleSolidColorModeToggle}
                  >
                    <span
                      className={`flex h-4 w-8 items-center rounded-full p-0.5 transition ${
                        isSolidColorMode ? 'bg-black/80' : 'bg-white/20'
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`h-3 w-3 rounded-full bg-white transition ${
                          isSolidColorMode ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </span>
                    {isSolidColorMode ? 'On' : 'Off'}
                  </button>
                </div>
                <div className="mt-2 grid grid-cols-6 gap-2">
                  {SOLID_COLOR_PALETTE.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      aria-label={`Use ${color.label} solid color`}
                      aria-pressed={solidColor === color.value}
                      className={`aspect-square min-h-8 border transition ${
                        solidColor === color.value ? 'border-white' : 'border-white/20 hover:border-white/60'
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        boxShadow: solidColor === color.value ? `0 0 16px ${color.hex}` : undefined,
                      }}
                      onClick={() => handleSolidColorSelect(color.value)}
                    />
                  ))}
                </div>
              </div>

              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="pin-height" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Pin Height
                    <span className="ml-2 tracking-normal text-white/65">{pinHeight}%</span>
                  </label>
                </div>
                <input
                  id="pin-height"
                  type="range"
                  min={PIN_HEIGHT_MIN}
                  max={PIN_HEIGHT_MAX}
                  step={PIN_HEIGHT_STEP}
                  value={pinHeight}
                  onChange={handlePinHeightChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${pinHeightProgressPercent}%`} as CSSProperties}
                  aria-label="Pin height"
                />
              </div>

              <div className="transition-opacity">
                <div className="mb-1">
                  <label htmlFor="pin-size" className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">
                    Pin Size
                    <span className="ml-2 tracking-normal text-white/65">{pinSize}%</span>
                  </label>
                </div>
                <input
                  id="pin-size"
                  type="range"
                  min={PIN_SIZE_MIN}
                  max={PIN_SIZE_MAX}
                  step={PIN_SIZE_STEP}
                  value={pinSize}
                  onChange={handlePinSizeChange}
                  className="audio-progress w-full"
                  style={{'--progress': `${pinSizeProgressPercent}%`} as CSSProperties}
                  aria-label="Pin size"
                />
              </div>
            </div>

            <div className="mt-3 min-w-0 w-full max-w-full overflow-hidden transition-opacity sm:max-w-xl">
              <p className="mb-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">Shape</p>
              <div className="grid min-w-0 w-full max-w-full grid-cols-2 gap-2 sm:grid-cols-3">
                {VISUALIZER_SHAPES.map(({label, value}) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={visualizerShape === value}
                    className={`min-w-0 overflow-hidden text-ellipsis whitespace-nowrap border px-2 py-2 text-[0.66rem] font-medium tracking-normal transition sm:text-xs ${
                      visualizerShape === value
                        ? 'border-white bg-white text-black'
                        : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
                    }`}
                    onClick={() => handleShapeSelect(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 max-w-xl border border-white/10 bg-black/20 p-2 transition-opacity">
              <p className="mb-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/55">Camera</p>
              <button
                type="button"
                role="switch"
                aria-checked={isOrbitMode}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${
                  isOrbitMode
                    ? 'border-white bg-white text-black'
                    : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
                }`}
                onClick={handleOrbitToggle}
              >
                <span
                  className={`flex h-5 w-9 items-center rounded-full p-0.5 transition ${
                    isOrbitMode ? 'bg-black/80' : 'bg-white/20'
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`h-4 w-4 rounded-full bg-white transition ${
                      isOrbitMode ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
                Orbit
              </button>
            </div>

            {mode === 'file' && (
              <div className="mt-3 flex max-w-xl items-center gap-3">
                <button
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white text-black transition hover:scale-105 hover:bg-white/90"
                  onClick={() => void toggleFilePlayback()}
                  aria-label={playback.isPaused || playback.isEnded ? 'Play audio file' : 'Pause audio file'}
                >
                  <span
                    className={playback.isPaused || playback.isEnded ? 'playback-icon playback-icon-play' : 'playback-icon playback-icon-pause'}
                    aria-hidden="true"
                  />
                </button>

                <span className="w-10 shrink-0 text-right text-xs tabular-nums text-white/65">
                  {formatTime(playback.currentTime)}
                </span>

                <input
                  type="range"
                  min="0"
                  max={Math.max(0, playback.duration)}
                  step="0.01"
                  value={Math.min(playback.currentTime, playback.duration || 0)}
                  onChange={handleSeek}
                  className="audio-progress min-w-0 flex-1"
                  style={{'--progress': `${progressPercent}%`} as CSSProperties}
                  aria-label="Audio playback position"
                />

                <span className="w-10 shrink-0 text-xs tabular-nums text-white/65">
                  {formatTime(playback.duration)}
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isTabAudioEnabled}
              className={`flex min-w-32 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${
                isTabAudioEnabled
                  ? 'border-white bg-white text-black'
                  : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
              }`}
              onClick={toggleTabAudio}
            >
              <span
                className={`flex h-5 w-9 items-center rounded-full p-0.5 transition ${
                  isTabAudioEnabled ? 'bg-black/80' : 'bg-white/20'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white transition ${
                    isTabAudioEnabled ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </span>
              Tab Audio
            </button>
            <button type="button" className={getButtonClass('microphone')} onClick={() => void startMicrophone()}>
              Mic
            </button>
            <button type="button" className={getButtonClass('file')} onClick={openFilePicker}>
              Audio File
            </button>
          </div>
        </div>
      </div>
      )}

      <input ref={fileInputRef} type="file" accept="audio/*" className="hidden" onChange={handleFileChange} />

      <div
        aria-live="polite"
        aria-hidden={!isLoading}
        className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-light tracking-widest text-white transition-opacity duration-500 sm:text-2xl ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Initializing Lattice...
      </div>
    </div>
  );
}
