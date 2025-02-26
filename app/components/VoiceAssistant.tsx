// app/components/VoiceAssistant.tsx
import { useState } from 'react';
import useChat from '~/hooks/useChat';
import ChatInterface from './ChatInterface';
import VoiceRecorder from './VoiceRecorder';

interface VoiceAssistantProps {
  initialMode?: 'voice' | 'text';
}

export default function VoiceAssistant({ initialMode = 'voice' }: VoiceAssistantProps) {
  const [mode, setMode] = useState<'voice' | 'text'>(initialMode);
  const { messages, loading, speaking, sendUserMessage } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary-blue text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Asistente Virtual NODO</h1>
            <p className="text-sm opacity-80">Habla o escribe tus preguntas</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setMode('text')} 
              className={`p-2 rounded-md ${mode === 'text' ? 'bg-white text-primary-blue' : 'bg-transparent text-white'}`}
              aria-label="Modo texto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button 
              onClick={() => setMode('voice')} 
              className={`p-2 rounded-md ${mode === 'voice' ? 'bg-white text-primary-blue' : 'bg-transparent text-white'}`}
              aria-label="Modo voz"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-grow overflow-hidden">
        <div className="container mx-auto max-w-3xl h-full">
          <ChatInterface
            messages={messages}
            loading={loading}
            speaking={speaking}
            onSendMessage={sendUserMessage}
          />
        </div>
      </div>

      {/* Voice Controls */}
      {mode === 'voice' && (
        <div className="bg-white border-t p-4">
          <div className="container mx-auto max-w-3xl flex justify-center">
            <VoiceRecorder 
              onTranscript={sendUserMessage}
              disabled={loading || speaking}
            />
          </div>
        </div>
      )}
    </div>
  );
}