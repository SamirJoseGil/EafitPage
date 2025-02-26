import VoiceAssistant from "~/components/VoiceAssistant";
import { useEffect } from "react";
import { useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

// Definir información del contexto que queremos que la IA conozca
export const loader: LoaderFunction = async () => {
  // Esta información se podría cargar desde una base de datos
  return json({
    title: "Asistente Virtual NODO",
    contextInfo: {
      institution: "EAFIT",
      program: "NODO",
      currentYear: 2024
    }
  });
};

export default function AsistentePage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'voice'; // Default to voice
  
  // Check browser compatibility when component loads
  useEffect(() => {
    const checkSpeechSupport = () => {
      const speechSupported = 'SpeechRecognition' in window || 
                            'webkitSpeechRecognition' in window;
      
      if (!speechSupported) {
        console.warn('Speech recognition is not supported in this browser');
      }
      
      const audioSupported = 'AudioContext' in window || 
                           'webkitAudioContext' in window;
      
      if (!audioSupported) {
        console.warn('Audio playback might not be fully supported in this browser');
      }
    };
    
    checkSpeechSupport();
  }, []);

  return <VoiceAssistant initialMode={mode === 'voice' ? 'voice' : 'text'} />;
}