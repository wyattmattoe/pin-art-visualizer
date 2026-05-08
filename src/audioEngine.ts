/**
 * @license
 * SPDX-License-Identifier: MIT
 */

export type AudioFrame = {
  bass: number;
  lowMid: number;
  mid: number;
  highMid: number;
  treble: number;
  volume: number;
  beat: boolean;
  beatEnergy: number;
  snareOnset: boolean;
  snareEnergy: number;
  hatOnset: boolean;
  hatEnergy: number;
  spectralFlux: number;
  spectralCentroid: number;
  rmsEnergy: number;
  spectrum: Float32Array;
  waveform: Float32Array;
};

export type AudioFrameProvider = {
  getFrame: (time: number) => AudioFrame;
  dispose: () => void;
};

export type FilePlaybackState = {
  currentTime: number;
  duration: number;
  isPaused: boolean;
  isEnded: boolean;
};

export type FileAudioFrameProvider = AudioFrameProvider & {
  getPlaybackState: () => FilePlaybackState;
  pause: () => void;
  play: () => Promise<void>;
  seek: (time: number) => void;
  togglePlayback: () => Promise<boolean>;
};

export const SPECTRUM_BAND_COUNT = 96;
export const WAVEFORM_POINT_COUNT = 96;

type AudioContextConstructor = typeof AudioContext;

type BrowserWithLegacyAudioContext = Window &
  typeof globalThis & {
    webkitAudioContext?: AudioContextConstructor;
  };

type DisplayAudioConstraints = MediaTrackConstraints & {
  suppressLocalAudioPlayback?: boolean;
};

type ChromeDisplayMediaOptions = DisplayMediaStreamOptions & {
  monitorTypeSurfaces?: 'include' | 'exclude';
  preferCurrentTab?: boolean;
  selfBrowserSurface?: 'include' | 'exclude';
  surfaceSwitching?: 'include' | 'exclude';
  systemAudio?: 'include' | 'exclude';
  windowAudio?: 'exclude' | 'system' | 'window';
};

const MIN_BEAT_INTERVAL_MS = 220;
const MIN_SNARE_INTERVAL_MS = 95;
const MIN_HAT_INTERVAL_MS = 55;
const SNARE_FLUX_THRESHOLD = 0.045;
const HAT_FLUX_THRESHOLD = 0.022;

// Clamp a value between 0 and 1
function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Create a new audio frame with default values
function createMutableFrame(): AudioFrame {
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

// Get the AudioContext constructor with webkit fallback for Safari
function getAudioContextConstructor() {
  const AudioContextClass = window.AudioContext ?? (window as BrowserWithLegacyAudioContext).webkitAudioContext;

  if (!AudioContextClass) {
    throw new Error('Web Audio is not supported in this browser.');
  }

  return AudioContextClass;
}

// Average frequency data over a given Hz range and return normalized value
function averageFrequencyRange(
  frequencyData: Uint8Array,
  sampleRate: number,
  startHz: number,
  endHz: number,
) {
  const nyquist = sampleRate / 2;
  const startIndex = Math.max(0, Math.floor((startHz / nyquist) * frequencyData.length));
  const endIndex = Math.min(frequencyData.length - 1, Math.ceil((endHz / nyquist) * frequencyData.length));

  if (endIndex < startIndex) {
    return 0;
  }

  let sum = 0;

  for (let index = startIndex; index <= endIndex; index += 1) {
    sum += frequencyData[index];
  }

  return clamp01(sum / ((endIndex - startIndex + 1) * 255));
}

// Create a provider that returns silent audio frames
export function createSilentAudioProvider(): AudioFrameProvider {
  const frame = createMutableFrame();

  return {
    getFrame: () => frame,
    dispose: () => undefined,
  };
}

class WebAudioFrameProvider implements AudioFrameProvider {
  private readonly frame = createMutableFrame();
  private readonly frequencyData: Uint8Array;
  private readonly timeData: Uint8Array;
  private readonly source: AudioNode;
  private lastBeatTime = 0;
  private smoothedBass = 0;
  private peakBass = 0;
  private peakLowMid = 0;
  private peakMid = 0;
  private peakHighMid = 0;
  private peakTreble = 0;
  private previousBass = 0;
  private previousLowMid = 0;
  private previousMid = 0;
  private previousHighMid = 0;
  private previousTreble = 0;
  private smoothedSnareFlux = 0;
  private smoothedHatFlux = 0;
  private lastSnareTime = 0;
  private lastHatTime = 0;
  private energyHistory: number[] = [];
  private readonly ENERGY_HISTORY_SIZE = 43;

  // Initialize the audio provider with context, analyser, source, and cleanup function
  constructor(
    private readonly audioContext: AudioContext,
    private readonly analyser: AnalyserNode,
    source: AudioNode,
    private readonly cleanup: () => void,
  ) {
    this.source = source;
    this.frequencyData = new Uint8Array(analyser.frequencyBinCount);
    this.timeData = new Uint8Array(analyser.fftSize);
  }

  // Analyze current audio data and return the processed frame
  getFrame(time: number) {
    this.analyser.getByteFrequencyData(this.frequencyData);
    this.analyser.getByteTimeDomainData(this.timeData);

    const sampleRate = this.audioContext.sampleRate;

    this.frame.bass = averageFrequencyRange(this.frequencyData, sampleRate, 20, 140);
    this.frame.lowMid = averageFrequencyRange(this.frequencyData, sampleRate, 140, 420);
    this.frame.mid = averageFrequencyRange(this.frequencyData, sampleRate, 420, 1800);
    this.frame.highMid = averageFrequencyRange(this.frequencyData, sampleRate, 1800, 5200);
    this.frame.treble = averageFrequencyRange(this.frequencyData, sampleRate, 5200, 14000);

    // Update energy history for adaptive beat detection
    this.energyHistory.push(this.frame.bass);
    if (this.energyHistory.length > this.ENERGY_HISTORY_SIZE) {
      this.energyHistory.shift();
    }
    const avgEnergy = this.energyHistory.length > 0 
      ? this.energyHistory.reduce((sum, val) => sum + val, 0) / this.energyHistory.length 
      : 0;

    // Exponential smoothing for bass
    this.smoothedBass = this.smoothedBass * 0.9 + this.frame.bass * 0.1;

    // Detect beat: bass must exceed adaptive threshold and respect minimum interval
    const beatThreshold = avgEnergy * 1.5;
    this.frame.beat = this.frame.bass > beatThreshold && time - this.lastBeatTime > MIN_BEAT_INTERVAL_MS;
    this.frame.beatEnergy = this.frame.beat
      ? clamp01(this.frame.bass + this.frame.volume * 0.35)
      : Math.max(0, this.frame.beatEnergy * 0.86 - 0.008);

    if (this.frame.beat) {
      this.lastBeatTime = time;
    }

    // Per-band spectral flux: positive frame-to-frame change in raw band energy.
    // Drives separate onset detectors so snare hits and hi-hat sizzles get their
    // own visual triggers instead of being summed into the bass-only beat.
    const rawBass = this.frame.bass;
    const rawLowMid = this.frame.lowMid;
    const rawMid = this.frame.mid;
    const rawHighMid = this.frame.highMid;
    const rawTreble = this.frame.treble;
    const snareFlux = Math.max(0, rawLowMid - this.previousLowMid);
    const hatFlux = Math.max(
      0,
      (rawHighMid + rawTreble) * 0.5 - (this.previousHighMid + this.previousTreble) * 0.5,
    );
    this.smoothedSnareFlux = this.smoothedSnareFlux * 0.86 + snareFlux * 0.14;
    this.smoothedHatFlux = this.smoothedHatFlux * 0.82 + hatFlux * 0.18;

    this.frame.snareOnset =
      snareFlux > SNARE_FLUX_THRESHOLD &&
      snareFlux > this.smoothedSnareFlux * 1.65 &&
      time - this.lastSnareTime > MIN_SNARE_INTERVAL_MS;

    if (this.frame.snareOnset) {
      this.lastSnareTime = time;
      this.frame.snareEnergy = clamp01(snareFlux * 5 + rawLowMid * 0.4);
    } else {
      this.frame.snareEnergy = Math.max(0, this.frame.snareEnergy * 0.84 - 0.01);
    }

    this.frame.hatOnset =
      hatFlux > HAT_FLUX_THRESHOLD &&
      hatFlux > this.smoothedHatFlux * 1.55 &&
      time - this.lastHatTime > MIN_HAT_INTERVAL_MS;

    if (this.frame.hatOnset) {
      this.lastHatTime = time;
      this.frame.hatEnergy = clamp01(hatFlux * 6 + rawTreble * 0.32);
    } else {
      this.frame.hatEnergy = Math.max(0, this.frame.hatEnergy * 0.78 - 0.012);
    }

    this.frame.spectralFlux = clamp01(
      Math.max(0, rawBass - this.previousBass) +
        snareFlux +
        Math.max(0, rawMid - this.previousMid) +
        Math.max(0, rawHighMid - this.previousHighMid) +
        Math.max(0, rawTreble - this.previousTreble),
    );

    this.previousBass = rawBass;
    this.previousLowMid = rawLowMid;
    this.previousMid = rawMid;
    this.previousHighMid = rawHighMid;
    this.previousTreble = rawTreble;

    // Peaking ballistics: instant attack, slow release for visual persistence
    const release = 0.92;
    this.peakBass = this.frame.bass > this.peakBass ? this.frame.bass : Math.max(this.frame.bass, this.peakBass * release);
    this.peakLowMid = this.frame.lowMid > this.peakLowMid ? this.frame.lowMid : Math.max(this.frame.lowMid, this.peakLowMid * release);
    this.peakMid = this.frame.mid > this.peakMid ? this.frame.mid : Math.max(this.frame.mid, this.peakMid * release);
    this.peakHighMid = this.frame.highMid > this.peakHighMid ? this.frame.highMid : Math.max(this.frame.highMid, this.peakHighMid * release);
    this.peakTreble = this.frame.treble > this.peakTreble ? this.frame.treble : Math.max(this.frame.treble, this.peakTreble * release);

    this.frame.bass = this.peakBass;
    this.frame.lowMid = this.peakLowMid;
    this.frame.mid = this.peakMid;
    this.frame.highMid = this.peakHighMid;
    this.frame.treble = this.peakTreble;
    this.frame.volume = clamp01(
      this.peakBass * 0.34 + this.peakLowMid * 0.2 + this.peakMid * 0.2 +
      this.peakHighMid * 0.12 + this.peakTreble * 0.14,
    );

    // Silence decay: when volume is very low, fade out frequency bands
    if (this.frame.volume < 0.01) {
      this.peakBass *= 0.95;
      this.peakLowMid *= 0.95;
      this.peakMid *= 0.95;
      this.peakHighMid *= 0.95;
      this.peakTreble *= 0.95;
      this.frame.bass = this.peakBass;
      this.frame.lowMid = this.peakLowMid;
      this.frame.mid = this.peakMid;
      this.frame.highMid = this.peakHighMid;
      this.frame.treble = this.peakTreble;
      this.frame.volume = clamp01(
        this.peakBass * 0.34 + this.peakLowMid * 0.2 + this.peakMid * 0.2 +
        this.peakHighMid * 0.12 + this.peakTreble * 0.14,
      );
    }

    // Spectral centroid: center of gravity of the frequency spectrum (perceived brightness)
    let centroidNum = 0;
    let centroidDen = 0;
    const nyquist = sampleRate / 2;
    for (let index = 0; index < this.frequencyData.length; index += 1) {
      const mag = this.frequencyData[index];
      const freq = (index / this.frequencyData.length) * nyquist;
      centroidNum += freq * mag;
      centroidDen += mag;
    }
    this.frame.spectralCentroid = centroidDen > 0 ? clamp01((centroidNum / centroidDen) / nyquist) : 0;

    // RMS energy: true loudness from time-domain data
    let rmsSum = 0;
    for (let index = 0; index < this.timeData.length; index += 1) {
      const sample = (this.timeData[index] - 128) / 128;
      rmsSum += sample * sample;
    }
    this.frame.rmsEnergy = clamp01(Math.sqrt(rmsSum / this.timeData.length) * 3.2);

    // Fill spectrum array by averaging frequency bins into bands
    for (let index = 0; index < SPECTRUM_BAND_COUNT; index += 1) {
      const start = Math.floor((index / SPECTRUM_BAND_COUNT) * this.frequencyData.length);
      const end = Math.max(start + 1, Math.floor(((index + 1) / SPECTRUM_BAND_COUNT) * this.frequencyData.length));
      let sum = 0;

      for (let frequencyIndex = start; frequencyIndex < end; frequencyIndex += 1) {
        sum += this.frequencyData[frequencyIndex];
      }

      this.frame.spectrum[index] = clamp01(sum / ((end - start) * 255));
    }

    // Sample waveform at evenly spaced intervals
    for (let index = 0; index < WAVEFORM_POINT_COUNT; index += 1) {
      const timeIndex = Math.floor((index / WAVEFORM_POINT_COUNT) * this.timeData.length);
      this.frame.waveform[index] = (this.timeData[timeIndex] - 128) / 128;
    }

    return this.frame;
  }

  // Clean up audio nodes and close resources
  dispose() {
    this.source.disconnect();
    this.analyser.disconnect();
    this.cleanup();
  }
}

// Create and configure an analyser node with preset values
function createAnalyser(audioContext: AudioContext) {
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  analyser.minDecibels = -88;
  analyser.maxDecibels = -18;
  analyser.smoothingTimeConstant = 0.78;

  return analyser;
}

// Create an audio provider that captures from the microphone
export async function createMicrophoneAudioProvider() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('Microphone input is not supported in this browser.');
  }

  const AudioContextClass = getAudioContextConstructor();
  const audioContext = new AudioContextClass();
  const analyser = createAnalyser(audioContext);
  let stream: MediaStream;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false,
      },
    });
  } catch (error) {
    void audioContext.close();
    throw error;
  }

  const source = audioContext.createMediaStreamSource(stream);

  source.connect(analyser);
  await audioContext.resume();

  return new WebAudioFrameProvider(audioContext, analyser, source, () => {
    stream.getTracks().forEach((track) => track.stop());
    void audioContext.close();
  });
}

// Create an audio provider that captures audio from a browser tab
export async function createBrowserTabAudioProvider(onEnded?: () => void) {
  if (!navigator.mediaDevices?.getDisplayMedia) {
    throw new Error('Browser tab audio capture is not supported in this browser.');
  }

  const AudioContextClass = getAudioContextConstructor();
  const audioContext = new AudioContextClass();
  const analyser = createAnalyser(audioContext);
  const displayMediaOptions: ChromeDisplayMediaOptions = {
    audio: {
      autoGainControl: false,
      echoCancellation: false,
      noiseSuppression: false,
      suppressLocalAudioPlayback: false,
    } as DisplayAudioConstraints,
    monitorTypeSurfaces: 'exclude',
    preferCurrentTab: false,
    selfBrowserSurface: 'exclude',
    surfaceSwitching: 'include',
    systemAudio: 'exclude',
    video: {
      displaySurface: 'browser',
    },
    windowAudio: 'exclude',
  };
  let stream: MediaStream;

  try {
    stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (error) {
    void audioContext.close();
    throw error;
  }

  const audioTracks = stream.getAudioTracks();
  const selectedSurface = stream.getVideoTracks()[0]?.getSettings().displaySurface;

  if (selectedSurface && selectedSurface !== 'browser') {
    stream.getTracks().forEach((track) => track.stop());
    void audioContext.close();
    throw new Error('Choose a Chrome tab with audio sharing enabled. Screen and window audio are not used.');
  }

  if (audioTracks.length === 0) {
    stream.getTracks().forEach((track) => track.stop());
    void audioContext.close();
    throw new Error('No tab audio was shared. Choose the Chrome Tab section and enable audio sharing.');
  }

  const audioOnlyStream = new MediaStream(audioTracks);
  const source = audioContext.createMediaStreamSource(audioOnlyStream);
  const handleTrackEnded = () => onEnded?.();

  stream.getTracks().forEach((track) => {
    track.addEventListener('ended', handleTrackEnded, {once: true});
  });

  source.connect(analyser);
  await audioContext.resume();

  return new WebAudioFrameProvider(audioContext, analyser, source, () => {
    stream.getTracks().forEach((track) => {
      track.removeEventListener('ended', handleTrackEnded);
      track.stop();
    });
    void audioContext.close();
  });
}

// Create an audio provider that plays from a file
export async function createFileAudioProvider(file: File): Promise<FileAudioFrameProvider> {
  const AudioContextClass = getAudioContextConstructor();
  const audioContext = new AudioContextClass();
  const analyser = createAnalyser(audioContext);
  const objectUrl = URL.createObjectURL(file);
  const audio = new Audio(objectUrl);
  audio.loop = false;
  audio.preload = 'auto';
  audio.src = objectUrl;

  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  await audioContext.resume();
  await audio.play();

  const provider = new WebAudioFrameProvider(audioContext, analyser, source, () => {
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    URL.revokeObjectURL(objectUrl);
    void audioContext.close();
  });

  return Object.assign(provider, {
    getPlaybackState: () => ({
      currentTime: Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
      duration: Number.isFinite(audio.duration) ? audio.duration : 0,
      isPaused: audio.paused,
      isEnded: audio.ended,
    }),
    pause: () => audio.pause(),
    play: async () => {
      await audioContext.resume();

      if (audio.ended) {
        audio.currentTime = 0;
      }

      await audio.play();
    },
    seek: (time: number) => {
      const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
      audio.currentTime = duration > 0 ? Math.min(duration, Math.max(0, time)) : 0;
    },
    togglePlayback: async () => {
      if (audio.paused || audio.ended) {
        await audioContext.resume();

        if (audio.ended) {
          audio.currentTime = 0;
        }

        await audio.play();
        return true;
      }

      audio.pause();
      return false;
    },
  });
}
