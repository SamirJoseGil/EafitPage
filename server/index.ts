import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Endpoint para obtener cursos
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching courses" });
  }
});

// Endpoint para crear un curso
app.post("/api/courses", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCourse = await prisma.course.create({
      data: { title, description },
    });
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating course" });
  }
});

// Endpoint para obtener noticias
app.get("/api/noticias", async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    // El modelo es "Noticia" en el schema, pero accedemos como "prisma.noticia"
    const noticias = await prisma.noticia.findMany({
      orderBy: { fechaPublicacion: 'desc' },
      skip,
      take: limit
    });
    
    const total = await prisma.noticia.count();
    
    res.json({
      data: noticias,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching noticias" });
  }
});

// Endpoint para crear o actualizar noticia
app.post("/api/noticias", async (req, res) => {
  try {
    const { titulo, contenido, resumen, imagenUrl, fuente, externalId, 
            fechaPublicacion, categoria, autor, tags, destacado } = req.body;
    
    // Verificar si la noticia ya existe para evitar duplicados
    if (externalId) {
      // suprimir mensaje de error
      const existingNoticia = await prisma.noticia.findUnique({
        where: { externalId }
      });
      
      if (existingNoticia) {
        // Actualizar noticia existente
        const updatedNoticia = await prisma.noticia.update({
          where: { id: existingNoticia.id },
          data: { 
            titulo, contenido, resumen, imagenUrl, fuente,
            fechaPublicacion: fechaPublicacion ? new Date(fechaPublicacion) : new Date(),
            categoria, autor, tags, destacado
          }
        });
        return res.json({ message: "Noticia actualizada", noticia: updatedNoticia });
      }
    }
    
    // Crear nueva noticia
    const newNoticia = await prisma.noticia.create({
      data: { 
        titulo, 
        contenido, 
        resumen, 
        imagenUrl, 
        fuente,
        externalId,
        fechaPublicacion: fechaPublicacion ? new Date(fechaPublicacion) : new Date(),
        categoria,
        autor,
        tags: tags || [],
        destacado: destacado || false
      }
    });
    
    res.status(201).json({ message: "Noticia creada", noticia: newNoticia });
  } catch (error) {
    console.error("Error al guardar noticia:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});