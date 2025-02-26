import { useState, useRef, useEffect } from 'react';
import useChat from '~/hooks/useChat';
import useSpeechRecognition from '~/hooks/useSpeechRecognition';
import NavBar from './NavBar';
import Footer from './Footer';

interface VoiceAssistantProps {
  initialMode?: 'text' | 'voice';
}

export default function VoiceAssistant({ initialMode = 'text' }: VoiceAssistantProps) {
  const [mode, setMode] = useState<'text' | 'voice'>(initialMode);
  const { messages, loading, speaking, sendUserMessage, pauseSpeech, resumeSpeech, isSpeechPaused } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  // Fix the TypeScript error by specifying the proper type
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Speech recognition hook
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send voice transcript when finished listening
  useEffect(() => {
    if (!isListening && transcript && !loading && !speaking) {
      sendUserMessage(transcript);
      resetTranscript();
    }
  }, [isListening, transcript, loading, speaking]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim() && !loading) {
      sendUserMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-400">
          {/* Header */}
          <div className="bg-dark p-4 text-white flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Asistente Virtual NODO</h1>
              <p className="text-sm opacity-80">Estoy aquí para resolver tus dudas</p>
            </div>

            {/* Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setMode('text')}
                className={`px-3 py-1.5 rounded-md transition-all ${mode === 'text'
                    ? 'bg-white text-primary-blue font-medium'
                    : 'text-white hover:bg-white/20'
                  }`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Texto
                </span>
              </button>

              <button
                onClick={() => setMode('voice')}
                className={`px-3 py-1.5 rounded-md transition-all ${mode === 'voice'
                    ? 'bg-white text-primary-blue font-medium'
                    : 'text-white hover:bg-white/20'
                  }`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Voz
                </span>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm max-w-md">
                    <div className="mx-auto w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">¡Bienvenido al Asistente NODO!</h3>
                    <p className="text-gray-600">Puedo ayudarte con información sobre nuestros programas, cursos y servicios. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg p-4 ${msg.sender === 'user'
                          ? 'bg-primary-blue text-white rounded-br-none shadow-md'
                          : 'bg-white text-gray-800 rounded-bl-none shadow'
                        }`}
                    >
                      {msg.sender === 'assistant' && (
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-primary-blue">Asistente NODO</span>
                        </div>
                      )}
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      {msg.sender === 'assistant' && speaking && index === messages.length - 1 && (
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={isSpeechPaused ? resumeSpeech : pauseSpeech}
                            className="text-xs flex items-center text-primary-blue hover:text-primary-blue/70"
                          >
                            {isSpeechPaused ? (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                </svg>
                                Reanudar audio
                              </>
                            ) : (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Pausar audio
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-4 shadow rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary-blue/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-blue/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary-blue/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100">
            {mode === 'text' ? (
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  disabled={loading || speaking}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || loading || speaking}
                  className={`p-3 rounded-full ${!inputMessage.trim() || loading || speaking
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary-blue text-white hover:bg-primary-blue/90'
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center">
                {browserSupportsSpeechRecognition ? (
                  <>
                    <button
                      onClick={isListening ? stopListening : startListening}
                      disabled={loading || speaking}
                      className={`p-4 rounded-full ${loading || speaking
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : isListening
                            ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                            : 'bg-dark text-white hover:bg-dark/90'
                        }`}
                    >
                      {isListening ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      )}
                    </button>

                    {isListening && (
                      <p className="mt-3 text-sm text-gray-600 animate-pulse">Escuchando... {transcript && `"${transcript}"`}</p>
                    )}

                    {!isListening && (
                      <p className="mt-3 text-sm text-gray-600">Presiona el botón para hablar</p>
                    )}
                  </>
                ) : (
                  <div className="text-center p-4 bg-yellow-50 rounded-lg text-yellow-700">
                    <p>Tu navegador no soporta reconocimiento de voz.</p>
                    <p className="text-sm mt-2">Intenta usar Chrome o Edge en un dispositivo de escritorio.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Bottom bar with copyright */}
      <div className="bg-dark py-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Nodo EAFIT. Todos los derechos reservados.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="/privacidad" className="text-sm text-gray-300 hover:text-accent-green mx-3 transition-colors">Privacidad</a>
            <a href="/terminos" className="text-sm text-gray-300 hover:text-accent-green mx-3 transition-colors">Términos</a>
            <a
              href="https://www.eafit.edu.co/Paginas/PQRSF.aspx"
              target="_blank"
              rel="noopener"
              className="text-sm text-gray-300 hover:text-accent-green mx-3 transition-colors"
            >
              PQRS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}