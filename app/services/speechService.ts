import type { SpeechRecognitionEvent } from "~/types/browser";

export function initSpeechRecognition() {
  // Use type assertion to avoid TypeScript errors
  const SpeechRecognition = window.SpeechRecognition || 
                           (window as any).webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    throw new Error('Speech recognition not supported in this browser');
  }
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'es-ES';

  // Handle properly typed events
  recognition.onresult = (event: SpeechRecognitionEvent) => {
    // Process speech results
    // Implementation details...
  };

  recognition.onerror = (event: Event) => {
    // Use type assertion for the error property
    const errorEvent = event as any;
    console.error('Speech recognition error:', errorEvent.error);
  };

  return recognition;
}

export function startListening(recognition: any) {
  try {
    recognition.start();
  } catch (err) {
    console.error('Error starting speech recognition:', err);
  }
}

export function stopListening(recognition: any) {
  try {
    recognition.stop();
  } catch (err) {
    console.error('Error stopping speech recognition:', err);
  }
}