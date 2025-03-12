// /app/routes/api.noticias.tsx
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { executeQuery } from "~/services/db.server";

// GET - Obtener noticias
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;
  
  try {
    // Consulta para obtener noticias con paginación
    const noticias = await executeQuery(
      `SELECT * FROM "Noticia" ORDER BY "fechaPublicacion" DESC LIMIT $1 OFFSET $2`,
      [limit, skip]
    );
    
    // Consulta para contar el total de noticias
    const [countResult] = await executeQuery(`SELECT COUNT(*) as total FROM "Noticia"`);
    const total = parseInt(countResult.total);
    
    return json({
      data: noticias,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page
      }
    });
  } catch (error) {
    console.error("Error fetching noticias:", error);
    return json({ error: "Error fetching noticias" }, { status: 500 });
  }
}

// POST - Crear o actualizar noticias
export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  const { titulo, contenido, resumen, imagenUrl, fuente, externalId, 
          fechaPublicacion, categoria, autor, tags, destacado } = body;
  
  try {
    // Verificar si la noticia ya existe
    if (externalId) {
      const [existingNoticia] = await executeQuery(
        `SELECT id FROM "Noticia" WHERE "externalId" = $1`,
        [externalId]
      );
      
      if (existingNoticia) {
        // Actualizar noticia existente
        const updatedNoticia = await executeQuery(
          `UPDATE "Noticia" SET 
          "titulo" = $1, "contenido" = $2, "resumen" = $3, "imagenUrl" = $4,
          "fuente" = $5, "fechaPublicacion" = $6, "categoria" = $7, 
          "autor" = $8, "tags" = $9, "destacado" = $10, "updatedAt" = NOW()
          WHERE id = $11 RETURNING *`,
          [
            titulo, contenido, resumen, imagenUrl, fuente,
            new Date(fechaPublicacion || Date.now()), 
            categoria, autor, JSON.stringify(tags || []), 
            destacado || false, existingNoticia.id
          ]
        );
        
        return json({ message: "Noticia actualizada", noticia: updatedNoticia[0] });
      }
    }
    
    // Crear nueva noticia
    const newNoticia = await executeQuery(
      `INSERT INTO "Noticia" (
        "titulo", "contenido", "resumen", "imagenUrl", "fuente",
        "externalId", "fechaPublicacion", "categoria", "autor", 
        "tags", "destacado", "createdAt", "updatedAt"
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
      RETURNING *`,
      [
        titulo, contenido, resumen, imagenUrl, fuente, externalId,
        new Date(fechaPublicacion || Date.now()), 
        categoria, autor, JSON.stringify(tags || []), 
        destacado || false
      ]
    );
    
    return json({ message: "Noticia creada", noticia: newNoticia[0] }, { status: 201 });
  } catch (error) {
    console.error("Error al guardar noticia:", error);
    return json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}