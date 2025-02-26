// app/routes/asistente.tsx
import VoiceAssistant from "~/components/VoiceAssistant";
import { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";

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

  return (
    <div className="relative">
      <VoiceAssistant initialMode={mode === 'voice' ? 'voice' : 'text'} />
    </div>
  );
}