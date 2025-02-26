// app/routes/api/chat.ts
import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { OpenAI } from 'openai';

export const action: ActionFunction = async ({ request }) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const formData = await request.formData();
    const message = formData.get('message');
    
    if (!message || typeof message !== 'string') {
      return json({ error: 'Message is required' }, { status: 400 });
    }
    
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Eres un asistente conversacional con voz." },
        { role: "user", content: message }
      ]
    });
    
    return json({ message: response.choices[0].message.content });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return json({ error: 'Failed to process request' }, { status: 500 });
  }
};