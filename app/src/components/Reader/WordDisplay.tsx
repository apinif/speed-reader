import React from 'react';

interface WordDisplayProps {
  word: string;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ word }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-6xl md:text-8xl font-bold text-white animate-fade-in">
        {word}
      </div>
    </div>
  );
};
