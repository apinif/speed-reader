# Speed Reader Web App

A web application that helps users improve their reading speed by displaying one word at a time at a controlled pace.

## Phase 1 - MVP Complete ✅

Phase 1 of the implementation is now complete with the following features:

### Features Implemented

- ✅ **React + TypeScript setup** with Vite
- ✅ **Tailwind CSS** for styling
- ✅ **Speed Reading Interface**
  - Blank screen with single word display
  - Large, centered text for comfortable reading
  - Smooth word transitions with fade animation
- ✅ **Speed Control Slider**
  - Adjustable reading speed (100-1000 WPM)
  - Real-time WPM display
  - Default speed: 250 WPM
- ✅ **Spacebar Pause/Resume**
  - Press spacebar to pause/resume reading
  - Keyboard controls fully implemented
- ✅ **Text Input Support**
  - Paste or type text directly
  - Clean, intuitive text input interface
- ✅ **Navigation Controls**
  - Play/Pause button
  - Skip forward/backward (10 words)
  - Reset to beginning
  - Exit reader
- ✅ **Progress Tracking**
  - Visual progress bar
  - Current position / total words counter
  - Percentage display

### Keyboard Shortcuts

- **SPACE**: Play/Pause reading
- **LEFT ARROW**: Skip backward 10 words (when paused)
- **RIGHT ARROW**: Skip forward 10 words (when paused)
- **ESC**: Exit reader and return to input screen

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the app directory:
```bash
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── Reader/
│   │   │   ├── SpeedReader.tsx      # Main reader component
│   │   │   ├── WordDisplay.tsx      # Word display component
│   │   │   ├── SpeedControl.tsx     # WPM slider component
│   │   │   ├── ProgressBar.tsx      # Progress indicator
│   │   │   └── NavigationControls.tsx # Play/pause/skip controls
│   │   └── Input/
│   │       └── TextInput.tsx        # Text input component
│   ├── hooks/
│   │   ├── useSpeedReader.ts        # Reading logic hook
│   │   └── useKeyboard.ts           # Keyboard controls hook
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── utils/
│   │   └── wordProcessor.ts         # Text processing utilities
│   ├── App.tsx                      # Main app component
│   ├── App.css                      # Custom styles
│   └── index.css                    # Tailwind imports
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## How to Use

1. **Enter Text**: Paste or type the text you want to speed read in the text area
2. **Start Reading**: Click "Start Reading" button
3. **Adjust Speed**: Use the slider at the bottom to change reading speed (WPM)
4. **Control Reading**: 
   - Press spacebar or click the play/pause button to control playback
   - Use arrow keys (when paused) to navigate through the text
   - Use the skip buttons to jump forward or backward
5. **Exit**: Press ESC or click "Exit" to return to the input screen

## Technical Details

### Technologies Used

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS v4**: Styling
- **PostCSS**: CSS processing

### Key Components

#### useSpeedReader Hook
Manages the core reading logic:
- Word-by-word progression
- Play/pause state
- WPM calculation and timing
- Progress tracking
- Navigation (skip forward/backward)

#### useKeyboard Hook
Handles keyboard shortcuts:
- Spacebar for play/pause
- Arrow keys for navigation
- ESC for exit

## Next Steps (Future Phases)

See the `implementation-plan.md` for the full roadmap:

- **Phase 2**: File support (PDF, HTML, TXT)
- **Phase 3**: Image handling
- **Phase 4**: Enhanced navigation controls
- **Phase 5**: Reading history and persistence
- **Phase 6**: Polish and optimization

## Known Limitations (Phase 1)

- Only supports pasted text input (no file upload yet)
- No image support
- No reading history or persistence
- No session saving/resuming between page reloads

These features will be added in subsequent phases.

## Contributing

This is currently a Phase 1 MVP. Future enhancements are planned according to the implementation plan.

## License

MIT License - see LICENSE file for details
