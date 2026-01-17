export interface ContentItem {
  type: 'word' | 'image';
  value: string; // word text or image URL/base64
  index: number;
}

export interface ReadingSession {
  id: string;
  title: string;
  content: ContentItem[];
  currentPosition: number;
  totalWords: number;
  status: 'finished' | 'unfinished';
  progress: number; // 0-100
  wpm: number;
  createdAt: Date;
  lastReadAt: Date;
}

export interface ReaderState {
  isPlaying: boolean;
  currentIndex: number;
  wpm: number;
  sessionId: string;
}
