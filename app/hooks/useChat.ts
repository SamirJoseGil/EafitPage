import { useState, useRef } from "react";
import { sendMessage, textToSpeech } from "~/services/chatService";

export interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

export default function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [isSpeechPaused, setIsSpeechPaused] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const sendUserMessage = async (userMessage: string) => {
    const newMessage: Message = { text: userMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      const response = await sendMessage(userMessage);
      const assistantMessage: Message = { text: response, sender: "assistant" };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      // Convert response to speech
      speakResponse(response);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const speakResponse = async (text: string) => {
    setSpeaking(true);
    setIsSpeechPaused(false);
    
    try {
      const audioBlob = await textToSpeech(text);
      
      if (audioBlob) {
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          setSpeaking(false);
          setIsSpeechPaused(false);
        };
        
        audio.onerror = () => {
          URL.revokeObjectURL(audioUrl);
          setSpeaking(false);
          setIsSpeechPaused(false);
        };
        
        // Start playing
        await audio.play();
      } else {
        setSpeaking(false);
      }
    } catch (error) {
      console.error("Error in speech playback:", error);
      setSpeaking(false);
    }
  };

  const pauseSpeech = () => {
    if (audioRef.current && !isSpeechPaused) {
      audioRef.current.pause();
      setIsSpeechPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (audioRef.current && isSpeechPaused) {
      audioRef.current.play().catch(err => {
        console.error("Error resuming speech:", err);
      });
      setIsSpeechPaused(false);
    }
  };

  return { 
    messages, 
    loading, 
    speaking, 
    sendUserMessage,
    pauseSpeech,
    resumeSpeech,
    isSpeechPaused
  };
}