import type { SpeechRecognitionEvent } from "~/types/browser";

export function initSpeechRecognition() {
  // Check HTTPS requirement
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    console.error('Speech recognition requires HTTPS (except on localhost)');
    return null;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error('Speech recognition not supported in this browser');
    return null;
  }

  const recognition = new SpeechRecognition();
  
  // Change these settings to reduce network issues
  recognition.continuous = false; // Set to false instead of true
  recognition.interimResults = false; // Set to false for more reliable results
  recognition.maxAlternatives = 1; // Limit alternatives to reduce bandwidth
  recognition.lang = 'es-ES';

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    console.log('Speech result:', event.results);
  };

  return recognition;
}

export function startListening(recognition: any) {
  if (!recognition) {
    console.error('No se puede iniciar el reconocimiento de voz. No es compatible con este navegador.');
    return;
  }

  try {
    recognition.start();
    console.log('Reconocimiento de voz iniciado.');
  } catch (err) {
    console.error('Error al iniciar el reconocimiento de voz:', err);
  }
}

export function stopListening(recognition: any) {
  if (!recognition) return;

  try {
    recognition.stop();
    console.log('Reconocimiento de voz detenido.');
  } catch (err) {
    console.error('Error al detener el reconocimiento de voz:', err);
  }
}
