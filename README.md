# 3D Pin Art Audio Visualizer

<<<<<<< HEAD
A real-time audio visualizer featuring a reactive 3D pin art lattice built with React, Three.js, and the Web Audio API. The visualizer transforms audio into dynamic 3D shapes with fluid animations, particle effects, and intelligent auto-mode ("God Mode") that adapts to music characteristics.
=======
**[Live Demo](https://pin-art-visualizer-v1-1-demo.netlify.app/)**

A real-time audio visualizer rendered as a colorful reactive 3D pin art 
lattice, built with React and Three.js.
>>>>>>> c150e3e9267c228a00fe1639c4b1e0b737f8bbbb

> 🤖 This project was coded with extensive assistance from AI language models (AI slop). Some code may exhibit LLM-isms, dead code, magic numbers, or unnecessary complexity. Proceed accordingly.

https://github.com/user-attachments/assets/99d0ed01-2b53-484f-a465-1a2d98079c3b


## Features

### Audio Input Sources
- **Browser Tab Capture** - Capture audio from any Chrome/Edge tab with system audio
- **Microphone Input** - Real-time microphone audio visualization
- **Audio File Upload** - Drag-and-drop or select audio files (with playback controls)

### 3D Visualization
- **9,424 Instanced Pins** (124×76 grid) with spring physics and neighbor coupling for ripple effects
- **7 Visualizer Shapes**: Wall, Sphere, Cube, Tetrahedron, Mobius Strip, Double Helix, Human Figure
- **Dynamic Color System** - Cycles through Google brand colors (Blue, Red, Yellow, Green) or 6 solid color presets
- **Post-Processing Pipeline**:
  - Unreal Bloom pass for glow effects
  - RGB Shift for chromatic aberration
  - Afterimage pass for motion trails
  - Custom wave warp shader (audio-reactive distortion)

### Advanced Audio Analysis
- 5-band frequency analysis (Bass, Low-Mid, Mid, High-Mid, Treble)
- Adaptive beat detection with energy history
- Onset detection for snare and hi-hat sounds
- Spectral flux, centroid, and RMS energy tracking
- 96-band spectrum and waveform data

### God Mode (Auto Mode)
Intelligent visualization director that automatically adjusts:
- Sensitivity, zoom, color intensity, and color shift
- Pin height and size
- Shape selection based on audio characteristics (energy, brightness, motion, chaos, focus, groove, texture)
- Camera orbit toggling
- Solid color mode activation

### Visual Effects
- **Firework Particle System** - 3,000 particles triggered by beats
- **Wave Ribbons** - 7 animated ribbons responding to waveform data
- **Outer Rings** - 5 concentric rings with spectral response
- **CRT Overlay** - Scanline and color bleed effects (respects `prefers-reduced-motion`)

## Tech Stack

- **React 19** - UI and controls with hooks-based state management
- **Three.js 0.184** - 3D rendering with instanced meshes
- **Web Audio API** - Real-time audio processing and analysis
- **Vite 6** - Build tool with HMR and `@/` path alias
- **Tailwind CSS 4** - Styling with custom theme
- **TypeScript 5** - Type safety with strict mode

## Prerequisites

- Node.js 22 or newer
- Chrome/Edge browser (for tab audio capture)

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts on http://localhost:3000

## Available Scripts

```bash
<<<<<<< HEAD
npm run dev          # Start development server (port 3000)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run clean        # Clean dist directory
npm run typecheck    # TypeScript type checking
npm run lint         # Run linter (typecheck)
```

### Deployment

The project includes a `netlify.toml` for one-command Netlify deployment: `npm run build` publishes the `dist/` directory.

## Usage

### Audio Input
1. **Tab Audio**: Click "Activate Director" → "Tab Audio" → Select a Chrome tab with "Share audio" enabled
2. **Microphone**: Click "Microphone" to start microphone input
3. **File Upload**: Click "File" or drag-and-drop an audio file

### Controls
- **Sensitivity** - Adjust audio reactivity (25-300%)
- **Zoom** - Zoom in/out (50-200%, mouse wheel supported)
- **Color Intensity** - Adjust color brightness (10-200%)
- **Color Shift** - Rotate color palette (0-360°)
- **Solid Color** - Toggle solid color mode with 6 preset colors
- **Pin Height/Size** - Adjust pin dimensions
- **Shape Selector** - Switch between 7 visualizer shapes (all available in God Mode auto-switching)
- **Orbit Mode** - Enable automatic camera orbit
- **God Mode** - Let the visualizer automatically adapt to your music

### File Playback
When using file mode:
- Play/Pause button or click the progress bar
- Seek by clicking anywhere on the progress bar
- Track name and playback time displayed

## Architecture

```
src/
├── main.tsx              # React entry point (StrictMode, root render)
├── App.tsx               # Main app component with controls, God Mode logic, and audio source management
├── audioEngine.ts        # Web Audio API processing, analysis, and audio providers
├── pinVisualizerScene.ts # Three.js 3D scene, pin rendering, post-processing, and visual effects
└── index.css             # Global styles with CRT overlay effect and custom range slider styling
```

### `@/` Import Alias

All source files can use the `@/` import alias (configured in `vite.config.ts` and `tsconfig.json`) to reference files under `src/`. For example, `import App from '@/App'`.

### Key Components

**audioEngine.ts**
- AudioFrameProvider interface for audio data
- Microphone, tab capture, and file audio providers
- Beat/snare/hi-hat detection algorithms
- Spectral analysis (flux, centroid, RMS)

**pinVisualizerScene.ts**
- InstancedMesh rendering for 9,424 pins
- Spring physics with neighbor coupling for ripple effects
- Shape generators (wall, sphere, cube, tetrahedron, mobius, double helix, human)
- Post-processing pipeline setup
- Particle systems (fireworks, wave ribbons, outer rings)

**App.tsx**
- Audio source management
- God Mode auto-adjustment algorithms
- UI controls and state management
- File playback controls

## Browser Support

- Chrome/Edge 90+ (required for tab audio capture)
- Firefox/Arc (microphone and file modes)
- Safari (limited, no tab capture)

## Project Status

- Plasma Glow Field feature removed (May 2026)
- All core features operational
- Feature-flagged experimental systems: Reactive Shapes, Procedural Elements (toggle `REACTIVE_SHAPES_ENABLED` / `PROCEDURAL_ELEMENTS_ENABLED` in `pinVisualizerScene.ts`)

## License

MIT
=======
npm run typecheck
npm run build
```
>>>>>>> c150e3e9267c228a00fe1639c4b1e0b737f8bbbb
