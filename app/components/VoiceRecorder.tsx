import useSpeechRecognition from '~/hooks/useSpeechRecognition';
import { useEffect } from 'react';

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
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  // Send transcript when user stops speaking
  useEffect(() => {
    if (!isListening && transcript && !disabled) {
      onTranscript(transcript);
      resetTranscript();
    }
  }, [isListening, transcript, disabled, onTranscript, resetTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-sm text-gray-500 mt-2">
        Tu navegador no soporta reconocimiento de voz.
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={isListening ? stopListening : startListening}
        disabled={disabled}
        className={`p-3 rounded-full focus:outline-none ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-primary-blue text-white hover:bg-primary-blue/90'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label={isListening ? 'Detener grabación' : 'Iniciar grabación de voz'}
      >
        {isListening ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
      
      {isListening && (
        <div className="text-sm text-gray-600 mt-2 animate-pulse">
          Escuchando...
        </div>
      )}
      
      {transcript && isListening && (
        <div className="mt-2 text-sm text-gray-600">
          <span className="font-medium">Escuchando:</span> {transcript}
        </div>
      )}
    </div>
  );
}