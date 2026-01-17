import React from 'react';
import type { ContentItem } from '../../types';
import { useSpeedReader } from '../../hooks/useSpeedReader';
import { useKeyboard } from '../../hooks/useKeyboard';
import { WordDisplay } from './WordDisplay';
import { SpeedControl } from './SpeedControl';
import { ProgressBar } from './ProgressBar';
import { NavigationControls } from './NavigationControls';

interface SpeedReaderProps {
  content: ContentItem[];
  onExit?: () => void;
}

export const SpeedReader: React.FC<SpeedReaderProps> = ({ content, onExit }) => {
  const {
    currentItem,
    currentIndex,
    isPlaying,
    wpm,
    progress,
    totalWords,
    togglePlayPause,
    setWpm,
    skipForward,
    skipBackward,
    reset,
  } = useSpeedReader({ content });

  useKeyboard({
    onSpace: togglePlayPause,
    onLeft: isPlaying ? undefined : () => skipBackward(10),
    onRight: isPlaying ? undefined : () => skipForward(10),
    onEscape: onExit,
  });

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-2xl mb-4">No content to read</p>
        {onExit && (
          <button
            onClick={onExit}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            Go Back
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main reading area */}
      <div className="flex-1 flex items-center justify-center p-8">
        {currentItem.type === 'word' && (
          <WordDisplay word={currentItem.value} />
        )}
      </div>

      {/* Controls at the bottom */}
      <div className="border-t border-gray-800 bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Progress Bar */}
          <ProgressBar
            progress={progress}
            currentPosition={currentIndex + 1}
            totalWords={totalWords}
          />

          {/* Speed Control */}
          <SpeedControl wpm={wpm} onWpmChange={setWpm} />

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <NavigationControls
              isPlaying={isPlaying}
              onTogglePlayPause={togglePlayPause}
              onSkipBackward={() => skipBackward(10)}
              onSkipForward={() => skipForward(10)}
              onReset={reset}
            />

            {onExit && (
              <button
                onClick={onExit}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                title="Exit reader (ESC)"
              >
                Exit
              </button>
            )}
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="text-center text-xs text-gray-500 pt-2">
            <span className="hidden sm:inline">
              Press SPACE to play/pause • Arrow keys to skip • ESC to exit
            </span>
            <span className="sm:hidden">
              SPACE: play/pause • ESC: exit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
