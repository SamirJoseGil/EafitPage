// Chat message interface
export interface Message {
    text: string;
    sender: 'user' | 'assistant';
  }
  
  // Chat service response
  export interface ChatResponse {
    response: string;
    error?: string;
  }
  
  // Text-to-speech response
  export interface SpeechResponse {
    audioUrl?: string;
    error?: string;
  }