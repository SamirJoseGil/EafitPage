import { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  try {
    // Check if we're getting the request body properly
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error("Error parsing request body:", error);
      // Try to get form data instead if JSON parsing fails
      const formData = await request.formData();
      body = { text: formData.get('text') };
    }

    const text = body.text;

    if (!text) {
      console.error("No text provided in request");
      return new Response(JSON.stringify({ error: 'Text is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify API key exists
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OpenAI API key is missing");
      return new Response(JSON.stringify({ error: 'API configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log("Sending TTS request to OpenAI with text length:", text.length);

    // Call OpenAI text-to-speech API
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: 'alloy',
        input: text
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI TTS API error:", errorText);
      return new Response(JSON.stringify({ error: 'Error en el servicio de texto a voz' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return the audio directly
    const audioBuffer = await response.arrayBuffer();
    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString()
      }
    });
  } catch (error) {
    console.error('Error in speech API:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor', details: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};