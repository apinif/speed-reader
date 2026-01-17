import { useEffect } from 'react';

interface UseKeyboardProps {
  onSpace?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onEscape?: () => void;
  enabled?: boolean;
}

export const useKeyboard = ({
  onSpace,
  onLeft,
  onRight,
  onEscape,
  enabled = true,
}: UseKeyboardProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          onSpace?.();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onLeft?.();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onRight?.();
          break;
        case 'Escape':
          e.preventDefault();
          onEscape?.();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSpace, onLeft, onRight, onEscape, enabled]);
};
