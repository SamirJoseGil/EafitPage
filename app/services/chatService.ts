export async function sendMessage(message: string): Promise<string> {
  try {
    console.log("Sending message to API:", message);
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error("API error response:", data);
      throw new Error(data.error || 'Error sending message');
    }
    
    return data.response;
  } catch (error) {
    console.error('Chat service error:', error);
    throw error;
  }
}

export async function textToSpeech(text: string): Promise<Blob | null> {
  try {
    console.log("Converting text to speech, length:", text.length);
    
    const response = await fetch('/api/speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("TTS API error response:", errorData);
      throw new Error(errorData.error || 'Error converting text to speech');
    }
    
    return await response.blob();
  } catch (error) {
    console.error('Text to speech service error:', error);
    return null;
  }
}