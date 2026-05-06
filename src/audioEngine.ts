/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
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

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

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
    spectrum: new Float32Array(SPECTRUM_BAND_COUNT),
    waveform: new Float32Array(WAVEFORM_POINT_COUNT),
  };
}

function getAudioContextConstructor() {
  const AudioContextClass = window.AudioContext ?? (window as BrowserWithLegacyAudioContext).webkitAudioContext;

  if (!AudioContextClass) {
    throw new Error('Web Audio is not supported in this browser.');
  }

  return AudioContextClass;
}

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
  private smoothedVolume = 0;

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

  getFrame(time: number) {
    this.analyser.getByteFrequencyData(this.frequencyData);
    this.analyser.getByteTimeDomainData(this.timeData);

    const sampleRate = this.audioContext.sampleRate;

    this.frame.bass = averageFrequencyRange(this.frequencyData, sampleRate, 20, 140);
    this.frame.lowMid = averageFrequencyRange(this.frequencyData, sampleRate, 140, 420);
    this.frame.mid = averageFrequencyRange(this.frequencyData, sampleRate, 420, 1800);
    this.frame.highMid = averageFrequencyRange(this.frequencyData, sampleRate, 1800, 5200);
    this.frame.treble = averageFrequencyRange(this.frequencyData, sampleRate, 5200, 14000);
    this.frame.volume = clamp01(
      this.frame.bass * 0.34 +
        this.frame.lowMid * 0.2 +
        this.frame.mid * 0.2 +
        this.frame.highMid * 0.12 +
        this.frame.treble * 0.14,
    );

    this.smoothedBass = this.smoothedBass * 0.9 + this.frame.bass * 0.1;
    this.smoothedVolume = this.smoothedVolume * 0.93 + this.frame.volume * 0.07;

    const beatThreshold = Math.max(0.18, this.smoothedBass * 1.45 + this.smoothedVolume * 0.22);
    this.frame.beat = this.frame.bass > beatThreshold && time - this.lastBeatTime > MIN_BEAT_INTERVAL_MS;
    this.frame.beatEnergy = this.frame.beat
      ? clamp01(this.frame.bass + this.frame.volume * 0.35)
      : Math.max(0, this.frame.beatEnergy * 0.86 - 0.008);

    if (this.frame.beat) {
      this.lastBeatTime = time;
    }

    for (let index = 0; index < SPECTRUM_BAND_COUNT; index += 1) {
      const start = Math.floor((index / SPECTRUM_BAND_COUNT) * this.frequencyData.length);
      const end = Math.max(start + 1, Math.floor(((index + 1) / SPECTRUM_BAND_COUNT) * this.frequencyData.length));
      let sum = 0;

      for (let frequencyIndex = start; frequencyIndex < end; frequencyIndex += 1) {
        sum += this.frequencyData[frequencyIndex];
      }

      this.frame.spectrum[index] = clamp01(sum / ((end - start) * 255));
    }

    for (let index = 0; index < WAVEFORM_POINT_COUNT; index += 1) {
      const timeIndex = Math.floor((index / WAVEFORM_POINT_COUNT) * this.timeData.length);
      this.frame.waveform[index] = (this.timeData[timeIndex] - 128) / 128;
    }

    return this.frame;
  }

  dispose() {
    this.source.disconnect();
    this.analyser.disconnect();
    this.cleanup();
  }
}

function createAnalyser(audioContext: AudioContext) {
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  analyser.minDecibels = -88;
  analyser.maxDecibels = -18;
  analyser.smoothingTimeConstant = 0.78;

  return analyser;
}

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
