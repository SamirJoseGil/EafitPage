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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);
  const MAX_RETRIES = 3;
  const LISTEN_TIMEOUT = 5000; // 5 segundos, como en Python

  // Verificar conexión a internet
  const checkConnection = useCallback(() => {
    if (!navigator.onLine) {
      setError('No hay conexión a internet. Verifica tu red.');
      return false;
    }
    return true;
  }, []);

  // Verificar micrófono
  const verifyMicrophone = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return stream;
    } catch (err) {
      console.error("Error accediendo al micrófono:", err);
      setError('No se pudo acceder al micrófono. Verifica los permisos.');
      return null;
    }
  }, []);

  // Configurar reconocimiento de voz - similar a Python
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (SpeechRecognition) {
          setBrowserSupport(true);
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

    // Limpiar timeouts al desmontar
    return () => {
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Crear una instancia fresca de reconocimiento para cada sesión
  const createRecognitionInstance = useCallback(() => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return null;

      const recognition = new SpeechRecognition();
      
      // Configuración inicial - menos consumo de red
      recognition.continuous = false; // Como en Python, escucha una vez
      recognition.interimResults = false; // Solo resultados finales
      recognition.lang = 'es-ES';
      
      // Configurar manejadores de eventos
      recognition.onresult = (event: any) => {
        // Eliminar timeout sin voz
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          console.log(`🗣️ Tú: ${finalTranscript}`);
          setTranscript(finalTranscript);
          retryCountRef.current = 0; // Reset retry count on success
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error(`Speech recognition error: ${event.error}`);
        
        if (event.error === 'network') {
          setError('Error de red. Verifica tu conexión.');
          
          // Retry logic similar to Python
          if (retryCountRef.current < MAX_RETRIES) {
            retryCountRef.current++;
            console.log(`Retrying speech recognition (${retryCountRef.current}/${MAX_RETRIES})...`);
            
            retryTimeoutRef.current = setTimeout(() => {
              if (isListening) {
                startRecognitionSession();
              }
            }, 1000);
          } else {
            setError('No se pudo establecer conexión después de varios intentos');
            setIsListening(false);
          }
        } else if (event.error === 'not-allowed') {
          setError('Permiso de micrófono denegado');
          setIsListening(false);
        } else if (event.error === 'no-speech') {
          setError('No se detectó voz. Intenta hablar más fuerte.');
          setIsListening(false);
        } else {
          setError(`Error: ${event.error}`);
          setIsListening(false);
        }
      };
      
      recognition.onend = () => {
        console.log('Speech recognition ended');
        
        if (isListening && retryCountRef.current < MAX_RETRIES) {
          // Solo auto-reiniciar si seguimos en modo escucha y no hay errores severos
          // Esto hace que sea más similar al bucle while True en Python
          if (!error || error.includes('red') || error.includes('no se detectó')) {
            startRecognitionSession();
          }
        } else {
          setIsListening(false);
        }
      };
      
      return recognition;
    } catch (error) {
      console.error('Error creating recognition instance:', error);
      return null;
    }
  }, [error, isListening]);

  // Iniciar una sesión de reconocimiento (similar a la función escuchar() en Python)
  const startRecognitionSession = useCallback(async () => {
    // Detener cualquier instancia anterior
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {
        // Ignorar errores
      }
    }
    
    // Limpiar timeouts previos
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    
    // Crear nueva instancia
    const recognition = createRecognitionInstance();
    if (!recognition) {
      setError('No se pudo inicializar el reconocimiento de voz');
      setIsListening(false);
      return;
    }
    
    recognitionRef.current = recognition;
    
    try {
      console.log("🎤 Escuchando... Habla ahora.");
      
      // Pequeña pausa para "calibración" - similar a adjust_for_ambient_noise
      setTimeout(() => {
        try {
          recognition.start();
          setError(null);
          
          // Timeout si no hay detección de voz (como en Python)
          timeoutRef.current = setTimeout(() => {
            if (isListening) {
              console.log("⚠️ Timeout: No se detectó voz");
              try {
                recognition.stop();
                setError('No se detectó voz en el tiempo límite');
              } catch (e) {
                // Ignorar errores
              }
            }
          }, LISTEN_TIMEOUT);
          
        } catch (err) {
          console.error("Error starting recognition:", err);
          setError('Error al iniciar el reconocimiento de voz');
          setIsListening(false);
        }
      }, 300);
      
    } catch (err) {
      console.error("Error in recognition session:", err);
      setError('Error en la sesión de reconocimiento de voz');
      setIsListening(false);
    }
  }, [createRecognitionInstance, isListening]);

  // API pública: Iniciar escucha
  const startListening = useCallback(async () => {
    if (!browserSupport) {
      setError('Este navegador no soporta reconocimiento de voz');
      return;
    }
    
    if (!checkConnection()) return;
    
    // Reset state
    retryCountRef.current = 0;
    setIsListening(true);
    setTranscript('');
    setError(null);
    
    // Verificar micrófono antes de iniciar
    const stream = await verifyMicrophone();
    if (!stream) return;
    
    // Cerrar stream después de verificar
    stream.getTracks().forEach(track => track.stop());
    
    // Iniciar reconocimiento
    startRecognitionSession();
    
  }, [browserSupport, checkConnection, verifyMicrophone, startRecognitionSession]);

  // API pública: Detener escucha
  const stopListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    
    // Limpiar timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
    
    try {
      recognition.abort();
      console.log("🛑 Reconocimiento de voz detenido.");
    } catch (error) {
      console.error('Error stopping recognition:', error);
    } finally {
      setIsListening(false);
    }
  }, []);

  // API pública: Resetear transcripción
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