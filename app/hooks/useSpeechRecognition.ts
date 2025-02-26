// app/hooks/useSpeechRecognition.ts
import { useState, useEffect, useCallback, useRef } from 'react';

interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  browserSupportsSpeechRecognition: boolean;
  error: string | null;
}

export default function useSpeechRecognition(): SpeechRecognitionHook {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [browserSupport, setBrowserSupport] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);
  const MAX_RETRIES = 3;
  
  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Define types for browser speech recognition with type assertion
        const SpeechRecognition = window.SpeechRecognition || 
                                window.webkitSpeechRecognition;
        
        if (SpeechRecognition) {
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.lang = 'es-ES';
          
          recognitionRef.current = recognition;
          setBrowserSupport(true);
          setError(null);
        } else {
          console.error('Speech recognition not supported in this browser');
          setBrowserSupport(false);
          setError('Este navegador no soporta reconocimiento de voz');
        }
      } catch (error) {
        console.error('Error initializing speech recognition:', error);
        setBrowserSupport(false);
        setError('Error al inicializar el reconocimiento de voz');
      }
    }
    
    // Clear any timeouts when unmounting
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  // Set up event listeners when recognition instance changes
  useEffect(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    
    const handleResult = (event: any) => {
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        }
      }
      
      if (finalTranscript) {
        setTranscript(prev => prev + finalTranscript);
      }
      
      // Reset error state when we get a result
      if (error) setError(null);
      retryCountRef.current = 0; // Reset retry count on successful result
    };
    
    const handleError = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      
      // Set appropriate error message
      if (event.error === 'network') {
        setError('Error de conexión. Verifica tu internet y permisos.');
        
        // Retry logic for network errors
        if (retryCountRef.current < MAX_RETRIES) {
          retryCountRef.current++;
          console.log(`Retrying speech recognition (${retryCountRef.current}/${MAX_RETRIES})...`);
          
          retryTimeoutRef.current = setTimeout(() => {
            if (retryCountRef.current < MAX_RETRIES) {
              startListeningInternal();
            } else {
              setError('No se pudo establecer conexión después de varios intentos');
            }
          }, 2000); // Wait 2 seconds before retry
        }
      } else if (event.error === 'not-allowed') {
        setError('Permiso de micrófono denegado. Verifica la configuración de tu navegador.');
      } else if (event.error === 'no-speech') {
        setError('No se detectó voz. Intenta hablar más fuerte.');
      } else {
        setError(`Error: ${event.error}`);
      }
    };
    
    const handleEnd = () => {
      console.log('Speech recognition ended');
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
      
      // Ensure we stop recognition when unmounting
      try {
        recognition.stop();
      } catch (e) {
        // Ignore errors on cleanup
      }
    };
  }, [error]);

  const startListeningInternal = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    
    try {
      console.log("Starting speech recognition");
      recognition.start();
      setError(null);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
      setError('Error al iniciar el reconocimiento de voz');
    }
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    
    // Reset state before starting
    retryCountRef.current = 0;
    setIsListening(true);
    setTranscript('');
    setError(null);
    
    // Request microphone permission explicitly
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        startListeningInternal();
      })
      .catch(err => {
        console.error("Microphone permission error:", err);
        setIsListening(false);
        setError('No se pudo acceder al micrófono. Verifica los permisos.');
      });
  }, [startListeningInternal]);

  const stopListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    
    // Clear any retry timeouts
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
    
    try {
      console.log("Stopping speech recognition");
      recognition.stop();
      // We don't set isListening to false here because the 'end' event will do that
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
      setIsListening(false);
    }
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition: browserSupport,
    error
  };
}