// app/routes/api/speech.ts
import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { OpenAI } from 'openai';

export const action: ActionFunction = async ({ request }) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const formData = await request.formData();
    const text = formData.get('text');
    
    if (!text || typeof text !== 'string') {
      return json({ error: 'Text is required' }, { status: 400 });
    }
    
    const audioResponse = await client.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });
    
    // Convert to base64 for frontend use
    const buffer = Buffer.from(await audioResponse.arrayBuffer());
    const base64Audio = buffer.toString('base64');
    
    return json({ audio: base64Audio });
  } catch (error) {
    console.error('Error generating speech:', error);
    return json({ error: 'Failed to generate speech' }, { status: 500 });
  }
};