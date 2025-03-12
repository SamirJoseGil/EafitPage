// /app/routes/admin.enterate.tsx
import { useState } from "react";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { createNoticia, NoticiaSimple } from "~/services/noticesService";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const titulo = formData.get("titulo") as string;
  const resumen = formData.get("resumen") as string;
  const contenido = formData.get("contenido") as string;
  const imagen = formData.get("imagen") as string;
  const categoria = formData.get("categoria") as any;
  const autor = formData.get("autor") as string;
  const tagsString = formData.get("tags") as string;
  const tags = tagsString.split(',').map(tag => tag.trim());
  const destacado = formData.get("destacado") === "true";
  
  const noticia: NoticiaSimple = {
    titulo,
    resumen,
    contenido,
    imagen,
    fecha: new Date().toISOString().split('T')[0],
    categoria,
    autor,
    tags,
    destacado
  };

  try {
    await createNoticia(noticia);
    return redirect("/enterate");
  } catch (error) {
    return json({ error: "Error al crear la noticia" }, { status: 500 });
  }
};

export default function AdminEnterate() {
  // Mismo código que te proporcioné antes...
}