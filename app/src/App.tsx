import { useState } from 'react';
import { SpeedReader } from './components/Reader/SpeedReader';
import { TextInput } from './components/Input/TextInput';
import type { ContentItem } from './types';
import { textToContentItems } from './utils/wordProcessor';
import './App.css';

function App() {
  const [content, setContent] = useState<ContentItem[] | null>(null);
  const [isReading, setIsReading] = useState(false);

  const handleTextSubmit = (text: string) => {
    const items = textToContentItems(text);
    setContent(items);
    setIsReading(true);
  };

  const handleExit = () => {
    setIsReading(false);
    setContent(null);
  };

  if (isReading && content) {
    return <SpeedReader content={content} onExit={handleExit} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Speed Reader</h1>
        <p className="text-gray-400 text-lg">
          Improve your reading speed, one word at a time
        </p>
      </div>

      <TextInput onSubmit={handleTextSubmit} />

      <div className="mt-8 text-center text-sm text-gray-500 max-w-md">
        <p>
          Enter your text above and click "Start Reading" to begin.
          You can pause/resume with the spacebar and adjust reading speed on the fly.
        </p>
      </div>
    </div>
  );
}

export default App;
