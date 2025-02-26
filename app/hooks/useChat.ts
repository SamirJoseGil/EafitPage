import { useState } from "react";
import { sendMessage, textToSpeech } from "~/services/chatService";

export interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

export default function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [speaking, setSpeaking] = useState<boolean>(false);

  const sendUserMessage = async (userMessage: string) => {
    const newMessage: Message = { text: userMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      const response = await sendMessage(userMessage);
      const assistantMessage: Message = { text: response, sender: "assistant" };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      // Convert response to speech if needed
      speakResponse(response);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const speakResponse = async (text: string) => {
    setSpeaking(true);
    try {
      const audioBlob = await textToSpeech(text);
      
      // Check if we got an audio blob
      if (audioBlob) {
        // Convert blob to audio element
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        
        // Set up event handler for when audio finishes
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl); // Clean up URL object
          setSpeaking(false);
        };
        
        // Handle any errors during playback
        audio.onerror = (err) => {
          console.error('Audio playback error:', err);
          URL.revokeObjectURL(audioUrl);
          setSpeaking(false);
        };
        
        // Start playing
        try {
          await audio.play();
        } catch (playError) {
          console.error('Error playing audio:', playError);
          URL.revokeObjectURL(audioUrl);
          setSpeaking(false);
        }
      } else {
        console.error('No audio blob received from text-to-speech service');
        setSpeaking(false);
      }
    } catch (error) {
      console.error('Error speaking response:', error);
      setSpeaking(false);
    }
  };

  return { messages, loading, speaking, sendUserMessage };
}