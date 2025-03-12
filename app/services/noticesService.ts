export interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  resumen: string;
  imagenUrl: string;  // Mantenemos este nombre para compatibilidad con el backend
  fuente?: string | null;
  fechaPublicacion: Date;  // Mantenemos Date para compatibilidad
  externalId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  categoria: 'evento' | 'noticia' | 'blog' | 'actualización';
  autor?: string | null;
  tags: string[];
  destacado: boolean;
}

// Alias para mantener compatibilidad con tu estructura preferida
export type NoticiaSimple = {
  id?: number;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
  fecha: string;
  categoria: 'evento' | 'noticia' | 'blog' | 'actualización';
  autor?: string;
  tags?: string[];
  destacado?: boolean;
};

// URL del servidor - cambia según el entorno
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://tu-backend-vercel.vercel.app'
  : 'http://localhost:3001';

export async function getNoticias(page = 1, limit = 10) {
  try {
    const response = await fetch(`${API_URL}/api/noticias?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching noticias:', error);
    return { data: [], pagination: { total: 0, pages: 0, currentPage: 1 } };
  }
}

export type NoticiaInput = Omit<Noticia, 'id' | 'createdAt' | 'updatedAt'>;

// Función para convertir NoticiaSimple a NoticiaInput
export function convertirNoticia(noticia: NoticiaSimple): NoticiaInput {
  return {
    titulo: noticia.titulo,
    contenido: noticia.contenido,
    resumen: noticia.resumen,
    imagenUrl: noticia.imagen,
    fechaPublicacion: new Date(noticia.fecha),
    categoria: noticia.categoria,
    autor: noticia.autor || null,
    tags: noticia.tags || [],
    destacado: noticia.destacado || false,
    fuente: null,
    externalId: null
  };
}

export async function createNoticia(noticia: NoticiaInput | NoticiaSimple) {
  try {
    // Convertir si es NoticiaSimple
    const noticiaParaEnviar = 'imagen' in noticia ? 
      convertirNoticia(noticia as NoticiaSimple) : 
      noticia;
    
    const response = await fetch(`${API_URL}/api/noticias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noticiaParaEnviar),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating noticia:', error);
    throw error;
  }
}