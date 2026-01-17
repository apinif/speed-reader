import React from 'react';

interface NavigationControlsProps {
  isPlaying: boolean;
  onTogglePlayPause: () => void;
  onSkipBackward: () => void;
  onSkipForward: () => void;
  onReset: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  isPlaying,
  onTogglePlayPause,
  onSkipBackward,
  onSkipForward,
  onReset,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onReset}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        title="Reset to beginning"
      >
        ⏮
      </button>
      <button
        onClick={onSkipBackward}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        title="Skip backward 10 words"
        disabled={isPlaying}
      >
        ⏪
      </button>
      <button
        onClick={onTogglePlayPause}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors text-lg"
        title="Play/Pause (Spacebar)"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button
        onClick={onSkipForward}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        title="Skip forward 10 words"
        disabled={isPlaying}
      >
        ⏩
      </button>
    </div>
  );
};
