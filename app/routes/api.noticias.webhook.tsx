import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { executeQuery } from "~/services/db.server";

export async function action({ request }: ActionFunctionArgs) {
  // Solo permitir solicitudes POST
  if (request.method !== "POST") {
    return json({ error: "Método no permitido" }, { status: 405 });
  }

  try {
    // Verificar API key o secreto para mayor seguridad
    const apiKey = request.headers.get("X-API-Key");
    const webhookSecret = process.env.WEBHOOK_SECRET;
    
    if (!apiKey || apiKey !== webhookSecret) {
      return json({ error: "No autorizado" }, { status: 401 });
    }

    // Procesar el cuerpo de la solicitud
    const body = await request.json();
    const noticias = Array.isArray(body) ? body : [body];
    
    // Registros para depuración
    console.log(`Recibidas ${noticias.length} noticias del webhook`);

    // Procesar cada noticia
    const resultados = await Promise.all(noticias.map(async (noticia) => {
      const { 
        titulo, contenido, resumen, imagenUrl, 
        fuente, externalId, fechaPublicacion, 
        categoria, autor, tags, destacado 
      } = noticia;

      // Verificar campos obligatorios
      if (!titulo || !contenido) {
        return { error: "Los campos título y contenido son obligatorios", noticia };
      }

      // Verificar si ya existe la noticia
      if (externalId) {
        const [existingNoticia] = await executeQuery(
          `SELECT id FROM "Noticia" WHERE "externalId" = $1 LIMIT 1`,
          [externalId]
        );

        if (existingNoticia) {
          // Actualizar noticia existente
          const [updated] = await executeQuery(
            `UPDATE "Noticia" SET 
              "titulo" = $1, "contenido" = $2, "resumen" = $3, 
              "imagenUrl" = $4, "fuente" = $5, "fechaPublicacion" = $6,
              "categoria" = $7, "autor" = $8, "tags" = $9, "destacado" = $10,
              "updatedAt" = NOW()
            WHERE id = $11 RETURNING *`,
            [
              titulo,
              contenido,
              resumen || null,
              imagenUrl || null,
              fuente || null,
              new Date(fechaPublicacion || Date.now()),
              categoria || 'noticia',
              autor || null,
              JSON.stringify(tags || []),
              destacado || false,
              existingNoticia.id
            ]
          );
          
          return { message: "Noticia actualizada", id: existingNoticia.id };
        }
      }

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
          JSON.stringify(tags || []),
          destacado || false
        ]
      );
      
      return { message: "Noticia creada", id: newNoticia.id };
    }));

    return json({ success: true, resultados });
    
  } catch (error) {
    console.error("Error en el webhook de noticias:", error);
    return json({ error: "Error al procesar las noticias" }, { status: 500 });
  }
}