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
  const actionData = useActionData<typeof action>();
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();
  
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Crear Nueva Noticia</h1>
        
        {actionData?.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {actionData.error}
          </div>
        )}
        
        <Form method="post" className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
              Título
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">
              Resumen
            </label>
            <textarea
              name="resumen"
              id="resumen"
              rows={3}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenido">
              Contenido
            </label>
            <textarea
              name="contenido"
              id="contenido"
              rows={6}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
              URL de la Imagen
            </label>
            <input
              type="url"
              name="imagen"
              id="imagen"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setPreviewImage(e.target.value)}
              required
            />
            {previewImage && (
              <div className="mt-2">
                <img src={previewImage} alt="Preview" className="h-40 object-cover rounded" />
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
              Categoría
            </label>
            <select
              name="categoria"
              id="categoria"
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="noticia">Noticia</option>
              <option value="evento">Evento</option>
              <option value="blog">Blog</option>
              <option value="actualización">Actualización</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="autor">
              Autor
            </label>
            <input
              type="text"
              name="autor"
              id="autor"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
              Tags (separados por coma)
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="noticias, eafit, programación"
            />
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="destacado"
                value="true"
                className="mr-2"
              />
              <span className="text-gray-700">Destacar noticia</span>
            </label>
          </div>
          
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-primary-blue/80"
            >
              Crear Noticia
            </button>
            <button
              type="button"
              onClick={() => navigate('/enterate')}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
}