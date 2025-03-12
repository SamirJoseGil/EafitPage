import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { executeQuery } from "~/services/db.server";

export async function action({ request }: ActionFunctionArgs) {
  // Solo permitir solicitudes POST
  if (request.method !== "POST") {
    return json({ error: "Método no permitido" }, { status: 405 });
  }

  try {
    // Verificar API key para seguridad
    const apiKey = request.headers.get("X-API-Key");
    const webhookSecret = process.env.WEBHOOK_SECRET;
    
    if (!apiKey || apiKey !== webhookSecret) {
      return json({ error: "No autorizado" }, { status: 401 });
    }

    // Procesar el cuerpo de la solicitud
    const body = await request.json();
    
    // Procesar la noticia
    const { 
      titulo, contenido, resumen, imagenUrl, 
      fuente, externalId, fechaPublicacion, 
      categoria, autor, tags, destacado 
    } = body;

    // Verificar campos obligatorios
    if (!titulo || !contenido) {
      return json({ error: "Los campos título y contenido son obligatorios" }, { status: 400 });
    }

    // IMPORTANTE: Convertir el array de tags a formato JSON
    const tagsJson = JSON.stringify(tags || []);
    
    console.log("Tags convertidos a JSON:", tagsJson);

    // Crear nueva noticia
    const [newNoticia] = await executeQuery(
      `INSERT INTO "Noticia" (
        "titulo", "contenido", "resumen", "imagenUrl", "fuente",
        "externalId", "fechaPublicacion", "categoria", "autor", 
        "tags", "destacado", "createdAt", "updatedAt"
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
      RETURNING id`,
      [
        titulo,
        contenido,
        resumen || null,
        imagenUrl || null,
        fuente || null,
        externalId || null,
        new Date(fechaPublicacion || Date.now()),
        categoria || 'noticia',
        autor || null,
        tagsJson, // ← AQUÍ ESTÁ EL CAMBIO CLAVE
        destacado || false
      ]
    );
    
    return json({ success: true, id: newNoticia.id });
    
  } catch (error) {
    console.error("Error en el webhook de noticias:", error);
    return json({ error: "Error al procesar la noticia" }, { status: 500 });
  }
}