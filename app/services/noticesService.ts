export interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  resumen: string;
  imagenUrl: string;
  fuente?: string | null;
  fechaPublicacion: Date;
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

export async function getNoticias(page = 1, limit = 10) {
  try {
    // Determinar si estamos en el cliente o el servidor
    const isClient = typeof window !== 'undefined';
    
    let url: URL;
    if (isClient) {
      // En el cliente: usar URL relativa
      url = new URL(`/api/noticias`, window.location.origin);
    } else {
      // En el servidor: usar la URL interna completa de Vercel
      const host = process.env.VERCEL_URL || 'localhost:3000';
      const protocol = host.includes('localhost') ? 'http' : 'https';
      url = new URL(`/api/noticias`, `${protocol}://${host}`);
    }
    
    // Agregar los parámetros de query
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    
    const response = await fetch(url.toString());
    
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
    
    // Determinar si estamos en el cliente o el servidor
    const isClient = typeof window !== 'undefined';
    
    let url: URL;
    if (isClient) {
      // En el cliente: usar URL relativa
      url = new URL(`/api/noticias`, window.location.origin);
    } else {
      // En el servidor: usar la URL interna completa de Vercel
      const host = process.env.VERCEL_URL || 'localhost:3000';
      const protocol = host.includes('localhost') ? 'http' : 'https';
      url = new URL(`/api/noticias`, `${protocol}://${host}`);
    }
    
    const response = await fetch(url.toString(), {
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