import useSpeechRecognition from '~/hooks/useSpeechRecognition';
import { useState, useEffect } from 'react';

interface VoiceRecorderProps {
  onTranscript: (transcript: string) => void;
  disabled?: boolean;
}

export default function VoiceRecorder({ onTranscript, disabled = false }: VoiceRecorderProps) {
  const { 
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    error
  } = useSpeechRecognition();
  
  const [manualInput, setManualInput] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  // Send transcript when user stops speaking
  useEffect(() => {
    if (!isListening && transcript && !disabled) {
      onTranscript(transcript);
      resetTranscript();
    }
  }, [isListening, transcript, disabled, onTranscript, resetTranscript]);
  
  // Show manual input if we've tried 3 times
  useEffect(() => {
    if (error && error.includes('No se pudo establecer conexión')) {
      setShowManualInput(true);
    }
  }, [error]);
  
  // Track retry attempts
  useEffect(() => {
    if (error && error.includes('Retrying')) {
      setRetryCount(c => c + 1);
    }
  }, [error]);

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualInput.trim()) {
      onTranscript(manualInput);
      setManualInput('');
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-sm bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
        <p className="text-yellow-700 font-medium">Tu navegador no soporta reconocimiento de voz.</p>
        <p className="text-yellow-600 mt-2">Puedes escribir tu pregunta directamente en el chat.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      {showManualInput ? (
        <div className="w-full">
          <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg mb-3">
            <p className="text-yellow-700 text-sm">
              El reconocimiento de voz no está funcionando en este momento. Puedes escribir tu mensaje:
            </p>
          </div>
          
          <form onSubmit={handleManualSubmit} className="flex w-full">
            <input
              type="text"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              disabled={disabled}
            />
            <button
              type="submit"
              className="bg-primary-blue text-white p-3 rounded-r-lg focus:outline-none"
              disabled={disabled || !manualInput.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          
          <button
            onClick={() => {
              setShowManualInput(false);
              setRetryCount(0);
              startListening();
            }}
            className="text-primary-blue text-sm mt-2 hover:underline"
          >
            Intentar con voz nuevamente
          </button>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={isListening ? stopListening : startListening}
            disabled={disabled}
            className={`p-4 rounded-full focus:outline-none ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-primary-blue text-white hover:bg-primary-blue/90'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} transition-all`}
            aria-label={isListening ? 'Detener grabación' : 'Iniciar grabación de voz'}
          >
            {isListening ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>
          
          {/* Status indicators */}
          <div className="mt-3 text-center">
            {isListening && (
              <div className="text-sm text-primary-blue animate-pulse font-medium">
                Escuchando... Habla ahora
              </div>
            )}
            
            {isListening && transcript && (
              <div className="mt-2 text-sm text-gray-600 max-w-xs">
                "{transcript}"
              </div>
            )}
            
            {error && !isListening && (
              <div className="mt-2 flex flex-col items-center">
                <div className="text-sm text-red-500 max-w-xs text-center mb-2">
                  {error}
                </div>
                
                {retryCount >= 2 && (
                  <button 
                    onClick={() => setShowManualInput(true)}
                    className="text-primary-blue text-sm hover:underline"
                  >
                    Escribir mensaje manualmente
                  </button>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}