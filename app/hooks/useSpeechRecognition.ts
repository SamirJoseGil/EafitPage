import { useState, useEffect, useCallback } from 'react';
import type { SpeechRecognitionEvent } from '~/types/browser';

interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  browserSupportsSpeechRecognition: boolean;
}

export default function useSpeechRecognition(): SpeechRecognitionHook {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [browserSupport, setBrowserSupport] = useState(false);
  
  // Initialize recognition with proper type handling
  const [recognition, setRecognition] = useState<any>(null);

  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Define types for browser speech recognition with type assertion
      const SpeechRecognition = (window as any).SpeechRecognition || 
                               (window as any).webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = 'es-ES';
        
        setRecognition(recognitionInstance);
        setBrowserSupport(true);
      } else {
        console.error('Speech recognition not supported in this browser');
        setBrowserSupport(false);
      }
    }
  }, []);

  // Set up event listeners when recognition changes
  useEffect(() => {
    if (!recognition) return;
    
    const handleResult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      
      setTranscript(transcript);
    };
    
    const handleError = (event: Event) => {
      // Use type assertion for error
      console.error('Speech recognition error:', (event as any).error);
      setIsListening(false);
    };
    
    const handleEnd = () => {
      setIsListening(false);
    };
    
    // Add event listeners
    recognition.addEventListener('result', handleResult);
    recognition.addEventListener('error', handleError);
    recognition.addEventListener('end', handleEnd);
    
    // Cleanup
    return () => {
      recognition.removeEventListener('result', handleResult);
      recognition.removeEventListener('error', handleError);
      recognition.removeEventListener('end', handleEnd);
    };
  }, [recognition]);

  const startListening = useCallback(() => {
    if (!recognition) return;
    
    setIsListening(true);
    try {
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (!recognition) return;
    
    setIsListening(false);
    try {
      recognition.stop();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  }, [recognition]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition: browserSupport
  };
}