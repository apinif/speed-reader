import type { ContentItem } from '../types';

/**
 * Converts text into an array of ContentItem objects (words)
 */
export const textToContentItems = (text: string): ContentItem[] => {
  // Split by whitespace and filter out empty strings
  const words = text
    .split(/\s+/)
    .filter(word => word.length > 0);

  return words.map((word, index) => ({
    type: 'word' as const,
    value: word,
    index,
  }));
};

/**
 * Validates and sanitizes text input
 */
export const sanitizeText = (text: string): string => {
  return text.trim();
};
