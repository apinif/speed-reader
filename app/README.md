# Speed Reader - Quick Start

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## How It Works

The Speed Reader MVP (Phase 1) includes:

### Main Features
- **Text Input**: Paste or type text you want to speed read
- **Word-by-Word Display**: Shows one word at a time on a clean, distraction-free screen
- **Adjustable Speed**: Control reading speed from 100 to 1000 WPM using the slider
- **Keyboard Controls**: Use spacebar to pause/resume, arrow keys to navigate

### User Flow

1. Enter text in the textarea on the home screen
2. Click "Start Reading"
3. Watch words appear one at a time
4. Adjust speed using the slider at the bottom
5. Press spacebar to pause and use arrow keys to skip forward/backward
6. Press ESC or click "Exit" to return to the input screen

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Custom hooks for reading logic and keyboard controls

## Project Structure

- `src/components/Reader/` - All reading-related components
- `src/components/Input/` - Text input component
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions
- `src/utils/` - Helper functions

## Next Steps

See the `../implementation-plan.md` for upcoming features in Phase 2-6.
