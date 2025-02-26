import { ActionFunction, json } from '@remix-run/node';

// Respuesta simulada para desarrollo local cuando no hay API key
const MOCK_RESPONSES = {
  greeting: "¡Hola! Soy el asistente virtual de NODO. ¿Cómo puedo ayudarte hoy?",
  courses: "NODO ofrece cursos en desarrollo de software, inteligencia artificial y habilidades digitales. Todos nuestros cursos están diseñados para profesionales que desean actualizar sus conocimientos.",
  contact: "Puedes contactar a NODO al teléfono +57 311 209 9519 o por correo a info@nodo.eafit.edu.co. Estamos ubicados en la Universidad EAFIT, Medellín, Colombia.",
  default: "Gracias por tu interés en NODO. Para información específica sobre nuestros programas, te recomendaría contactar directamente con nuestro equipo."
};

export const action: ActionFunction = async ({ request }) => {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      const formData = await request.formData();
      body = { message: formData.get('message') };
    }

    const message = body.message;

    if (!message) {
      return json({ error: 'Message is required' }, { status: 400 });
    }

    // Get API key from environment variable
    const apiKey = process.env.OPENAI_API_KEY;
    
    // Determinar si estamos en desarrollo
    const isDev = process.env.NODE_ENV === 'development';

    // Mostrar más información para depuración
    console.log("Environment:", process.env.NODE_ENV);
    console.log("API Key exists:", !!apiKey);
    
    // Si no hay API key, usar respuestas simuladas en desarrollo
    if (!apiKey) {
      console.warn('Missing OpenAI API key');
      
      if (isDev) {
        console.log("Using mock response for development");
        // Elegir una respuesta simulada basada en el mensaje
        let mockResponse = MOCK_RESPONSES.default;
        const lowerMsg = message.toLowerCase();
        
        if (lowerMsg.includes('hola') || lowerMsg.includes('saludos')) {
          mockResponse = MOCK_RESPONSES.greeting;
        } else if (lowerMsg.includes('curso') || lowerMsg.includes('program')) {
          mockResponse = MOCK_RESPONSES.courses;
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('teléfono') || lowerMsg.includes('correo')) {
          mockResponse = MOCK_RESPONSES.contact;
        }
        
        return json({ response: mockResponse });
      } else {
        return json({ error: 'Configuration error: Missing API Key' }, { status: 500 });
      }
    }

    // El contexto sobre NODO se mantiene igual
    const NODO_CONTEXT = `
      Eres el Asistente Virtual de NODO, un programa educativo de EAFIT en Colombia.

      INFORMACIÓN SOBRE NODO:
      - NODO es una plataforma de innovación y aprendizaje de la Universidad EAFIT.
      - Ofrecemos formación en desarrollo de software, inteligencia artificial, y habilidades digitales.
      - Nuestros programas están diseñados para profesionales que quieren actualizar sus conocimientos.
      - Tenemos cursos tanto presenciales como virtuales.
      - Nuestra sede principal está ubicada en Medellín, Colombia.
      - NODO trabaja con empresas para desarrollar soluciones tecnológicas a medida.
      - Contamos con un equipo de expertos en diversas áreas de tecnología y desarrollo.

      SERVICIOS DE NODO:
      1. Formación especializada en tecnología
      2. Desarrollo de proyectos a medida para empresas
      3. Consultoría en transformación digital
      4. Reclutamiento y formación de talento para empresas tecnológicas

      CONTACTO:
      - Teléfono: +57 311 209 9519
      - Correo: info@nodo.eafit.edu.co
      - Dirección: Universidad EAFIT, Carrera 49 # 7 Sur-50, Medellín, Colombia

      Navegación y Secciones de Soporte

      Enlaces Principales:

      - INICIO: Regresa a la página principal.
      - CURSOS: Catálogo de formación y recursos educativos.
      - BLOG: Artículos, noticias y contenidos didácticos.
      - PREGUNTAS FRECUENTES: Ayuda para resolver dudas comunes.
      - CONTÁCTENOS: Información para comunicarse con la institución.

      Responde de forma amable, concisa y profesional. Si te preguntan sobre temas que no están relacionados con NODO o EAFIT, menciona que estás especializado en información sobre estos programas específicamente.
    `;

    try {
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
            { role: 'system', content: NODO_CONTEXT },
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenAI API Error:", errorData);
        return json({ error: errorData.error?.message || 'Error en la API de OpenAI' }, { status: response.status });
      }

      const data = await response.json();
      return json({ response: data.choices[0].message.content });
    } catch (apiError) {
      console.error("Error calling OpenAI API:", apiError);
      return json({ error: 'Error al comunicarse con la API de OpenAI' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing chat request:', error);
    return json({ error: 'Error interno del servidor', details: String(error) }, { status: 500 });
  }
};