import { useState, useEffect, useCallback, useRef } from 'react';
import type { ContentItem } from '../types';

interface UseSpeedReaderProps {
  content: ContentItem[];
  initialWpm?: number;
  initialPosition?: number;
}

export const useSpeedReader = ({
  content,
  initialWpm = 250,
  initialPosition = 0,
}: UseSpeedReaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wpm, setWpm] = useState(initialWpm);
  const intervalRef = useRef<number | null>(null);

  const currentItem = content[currentIndex] || null;
  const totalWords = content.filter(item => item.type === 'word').length;
  const progress = totalWords > 0 ? (currentIndex / content.length) * 100 : 0;

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    if (currentIndex >= content.length - 1) {
      setCurrentIndex(0);
    }
    setIsPlaying(true);
  }, [currentIndex, content.length]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    clearTimer();
  }, [clearTimer]);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const skipForward = useCallback((steps: number = 10) => {
    setCurrentIndex(prev => Math.min(prev + steps, content.length - 1));
  }, [content.length]);

  const skipBackward = useCallback((steps: number = 10) => {
    setCurrentIndex(prev => Math.max(prev - steps, 0));
  }, []);

  const reset = useCallback(() => {
    pause();
    setCurrentIndex(0);
  }, [pause]);

  // Main reading loop
  useEffect(() => {
    if (!isPlaying || content.length === 0) {
      clearTimer();
      return;
    }

    const delay = (60 / wpm) * 1000; // Convert WPM to milliseconds

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= content.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearTimer();
  }, [isPlaying, wpm, content.length, clearTimer]);

  return {
    currentItem,
    currentIndex,
    isPlaying,
    wpm,
    progress,
    totalWords,
    play,
    pause,
    togglePlayPause,
    setWpm,
    skipForward,
    skipBackward,
    reset,
    setCurrentIndex,
  };
};
