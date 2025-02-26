import { ActionFunction, json } from '@remix-run/node';

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
      body = { message: formData.get('message') };
    }

    const message = body.message;
    
    if (!message) {
      console.error("No message provided in request");
      return json({ error: 'Message is required' }, { status: 400 });
    }

    // Verify API key exists
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OpenAI API key is missing");
      return json({ error: 'API configuration error' }, { status: 500 });
    }

    console.log("Sending request to OpenAI with message:", message);

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Eres un asistente conversacional con voz.' },
          { role: 'user', content: message }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      return json({ error: errorData.error?.message || 'Error en la API de OpenAI' }, { status: response.status });
    }

    const data = await response.json();
    return json({ response: data.choices[0].message.content });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return json({ error: 'Error interno del servidor', details: String(error) }, { status: 500 });
  }
};