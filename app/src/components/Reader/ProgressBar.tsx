import React from 'react';

interface ProgressBarProps {
  progress: number;
  currentPosition: number;
  totalWords: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentPosition,
  totalWords,
}) => {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>Progress</span>
        <span>{currentPosition} / {totalWords} words</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
