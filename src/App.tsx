/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import {useCallback, useEffect, useRef, useState} from 'react';
import type {CSSProperties, ChangeEvent, DragEvent} from 'react';
import type {AudioFrameProvider, FileAudioFrameProvider, FilePlaybackState} from './audioEngine';
import {
  createBrowserTabAudioProvider,
  createFileAudioProvider,
  createMicrophoneAudioProvider,
  createSilentAudioProvider,
} from './audioEngine';
import {createPinVisualizerScene} from './pinVisualizerScene';

type VisualizerMode = 'tab' | 'microphone' | 'file';

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Something went wrong while starting audio.';
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return '0:00';
  }

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function createEmptyPlaybackState(): FilePlaybackState {
  return {
    currentTime: 0,
    duration: 0,
    isPaused: true,
    isEnded: false,
  };
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const providerRef = useRef<AudioFrameProvider | null>(null);
  const fileProviderRef = useRef<FileAudioFrameProvider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<VisualizerMode>('tab');
  const [status, setStatus] = useState('Tab audio off');
  const [trackName, setTrackName] = useState('Browser tab audio');
  const [error, setError] = useState<string | null>(null);
  const [isTabAudioEnabled, setIsTabAudioEnabled] = useState(false);
  const [playback, setPlayback] = useState<FilePlaybackState>(() => createEmptyPlaybackState());

  if (!providerRef.current) {
    providerRef.current = createSilentAudioProvider();
  }

  const replaceProvider = useCallback((provider: AudioFrameProvider, fileProvider: FileAudioFrameProvider | null = null) => {
    providerRef.current?.dispose();
    providerRef.current = provider;
    fileProviderRef.current = fileProvider;
  }, []);

  const stopTabAudio = useCallback(() => {
    replaceProvider(createSilentAudioProvider());
    setMode('tab');
    setStatus('Tab audio off');
    setTrackName('Browser tab audio');
    setError(null);
    setIsTabAudioEnabled(false);
    setPlayback(createEmptyPlaybackState());
  }, [replaceProvider]);

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

  const toggleTabAudio = useCallback(() => {
    if (isTabAudioEnabled) {
      stopTabAudio();
      return;
    }

    void startTabAudio();
  }, [isTabAudioEnabled, startTabAudio, stopTabAudio]);

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

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

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

  const handleSeek = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const provider = fileProviderRef.current;

    if (!provider) {
      return;
    }

    provider.seek(Number(event.target.value));
    setPlayback(provider.getPlaybackState());
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    setIsLoading(true);

    const scene = createPinVisualizerScene(container, {
      getAudioFrame: (time) => {
        if (!providerRef.current) {
          providerRef.current = createSilentAudioProvider();
        }

        return providerRef.current.getFrame(time);
      },
      onReady: () => setIsLoading(false),
    });

    return () => scene.dispose();
  }, []);

  useEffect(() => {
    return () => providerRef.current?.dispose();
  }, []);

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

  const getButtonClass = (targetMode: Exclude<VisualizerMode, 'tab'>) =>
    `min-w-24 rounded border px-3 py-2 text-sm font-medium transition ${
      mode === targetMode
        ? 'border-white bg-white text-black'
        : 'border-white/20 bg-black/40 text-white hover:border-white/55 hover:bg-white/10'
    }`;
  const progressPercent = playback.duration > 0 ? Math.min(100, (playback.currentTime / playback.duration) * 100) : 0;

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[#050505] font-sans text-white"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="crt-overlay" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 p-4 sm:p-6">
        <div className="pointer-events-auto flex flex-col gap-3 border border-white/12 bg-black/55 p-4 shadow-2xl shadow-black/50 backdrop-blur-md sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/55">Pin Art Visualizer</p>
            <h1 className="mt-1 truncate text-lg font-medium text-white sm:text-xl">{trackName}</h1>
            <p className="mt-1 text-sm text-white/65" aria-live="polite">
              {error ?? status}
            </p>

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

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isTabAudioEnabled}
              className={`flex min-w-36 items-center gap-3 rounded-full border px-3 py-2 text-sm font-medium transition ${
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
