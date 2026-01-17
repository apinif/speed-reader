import React from 'react';

interface SpeedControlProps {
  wpm: number;
  onWpmChange: (wpm: number) => void;
  minWpm?: number;
  maxWpm?: number;
}

export const SpeedControl: React.FC<SpeedControlProps> = ({
  wpm,
  onWpmChange,
  minWpm = 100,
  maxWpm = 1000,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onWpmChange(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center space-y-2 w-full max-w-md">
      <label htmlFor="wpm-slider" className="text-sm font-medium text-gray-300">
        Speed: {wpm} WPM
      </label>
      <input
        id="wpm-slider"
        type="range"
        min={minWpm}
        max={maxWpm}
        step={10}
        value={wpm}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between w-full text-xs text-gray-500">
        <span>{minWpm} WPM</span>
        <span>{maxWpm} WPM</span>
      </div>
    </div>
  );
};
