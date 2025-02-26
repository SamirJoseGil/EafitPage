import { useState } from 'react';
import MessageBubble from './MessageBubble';
import type { Message } from '~/types/chat';

interface ChatInterfaceProps {
  messages: Message[];
  loading: boolean;
  speaking: boolean;
  onSendMessage: (message: string) => void;
}

export default function ChatInterface({ messages, loading, speaking, onSendMessage }: ChatInterfaceProps) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !loading && !speaking) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              <p className="mb-2">👋 ¡Hola! Soy el asistente virtual de NODO.</p>
              <p>¿En qué puedo ayudarte hoy?</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <MessageBubble key={index} message={msg} />
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-lg p-4 shadow-md rounded-bl-none">
                <div className="flex space-x-2 items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
            disabled={loading || speaking}
          />
          <button
            type="submit"
            className="bg-primary-blue text-white p-3 rounded-full focus:outline-none"
            disabled={loading || speaking || !inputMessage.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        
        {/* Status indicators */}
        {speaking && (
          <div className="mt-2 text-sm text-blue-600 flex items-center">
            <span className="mr-2">🔊</span> Reproduciendo respuesta...
          </div>
        )}
      </div>
    </div>
  );
}