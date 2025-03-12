import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { getNoticias } from "~/services/noticesService";
import type { Noticia } from "~/services/noticesService";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = 10;

    const { data, pagination } = await getNoticias(page, limit);

    return json({
        noticias: data,
        pagination
    });
}

// Función para formatear fechas
const formatearFecha = (fechaStr: string | Date): string => {
    const fecha = new Date(fechaStr);
    return new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(fecha);
};

// Colores para las categorías
const coloresCategorias: Record<string, string> = {
    evento: 'bg-accent-yellow text-dark',
    noticia: 'bg-primary-blue text-white',
    blog: 'bg-accent-green text-dark',
    actualización: 'bg-dark text-white',
    default: 'bg-primary-blue text-white'
};

export default function Enterate() {
    const { noticias, pagination } = useLoaderData<typeof loader>();
    
    // Estado para filtrar por categoría
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

    // Si no hay noticias o es el primer render con datos vacíos
    if (!noticias || noticias.length === 0) {
        return (
            <>
                <NavBar />
                <div className="container mx-auto py-12 px-4">
                    <h1 className="text-3xl font-bold mb-8">Entérate</h1>
                    <p className="text-center text-gray-500 py-12">Cargando noticias...</p>
                </div>
                <Footer />
            </>
        );
    }

    // Noticias filtradas según la selección
    const noticiasFiltradas = categoriaSeleccionada
        ? noticias.filter((noticia: Noticia) => noticia.categoria === categoriaSeleccionada)
        : noticias;

    // Noticia destacada (primera en la lista o marcada como destacada)
    const noticiaDestacada = noticias.find((noticia: Noticia) => noticia.destacado) || noticias[0];
    
    // Resto de noticias (excluyendo la destacada)
    const restaNoticias = noticiasFiltradas.filter((noticia: Noticia) => noticia.id !== noticiaDestacada.id);

    return (
        <>
            <NavBar />
            <div className="max-w-screen overflow-hidden">
                {/* Header con título principal */}
                <section className="bg-dark text-white py-16 relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-yellow opacity-5"></div>
                    <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-primary-blue opacity-5"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                Entérate<span className="text-accent-yellow">.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                Mantente al día con las últimas noticias, eventos y actualizaciones del mundo Nodo
                            </p>
                            <div className="w-24 h-1 bg-accent-green mx-auto mt-8"></div>
                        </div>
                    </div>
                </section>

                {/* Filtros de categorías */}
                <section className="py-8 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => setCategoriaSeleccionada(null)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${categoriaSeleccionada === null
                                    ? 'bg-dark text-white'
                                    : 'bg-white text-dark hover:bg-gray-200'
                                    }`}
                            >
                                Todos
                            </button>
                            {['evento', 'noticia', 'blog', 'actualización'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategoriaSeleccionada(cat as any)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${categoriaSeleccionada === cat
                                        ? coloresCategorias[cat] || coloresCategorias.default
                                        : 'bg-white text-dark hover:bg-gray-200'
                                        }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}s
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Noticia destacada */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 flex items-center">
                            <span className="w-6 h-6 bg-accent-yellow rounded-full mr-3"></span>
                            Destacado
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-7 rounded-xl overflow-hidden relative">
                                <img
                                    src={noticiaDestacada.imagenUrl || "https://via.placeholder.com/800x500?text=Sin+imagen"}
                                    alt={noticiaDestacada.titulo}
                                    className="w-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                                        coloresCategorias[noticiaDestacada.categoria as keyof typeof coloresCategorias] || coloresCategorias.default
                                    }`}>
                                        {noticiaDestacada.categoria?.charAt(0).toUpperCase() + 
                                         (noticiaDestacada.categoria?.slice(1) || "Noticia")}
                                    </span>
                                </div>
                            </div>
                            <div className="lg:col-span-5 flex flex-col justify-center py-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {formatearFecha(noticiaDestacada.fechaPublicacion)}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-dark">
                                    {noticiaDestacada.titulo}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {noticiaDestacada.resumen}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {noticiaDestacada.tags?.map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="bg-accent-green text-dark py-3 px-6 rounded-md font-bold flex items-center w-fit hover:bg-accent-green/80 transition-colors">
                                    Leer más
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid de noticias */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 flex items-center">
                            <span className="w-6 h-6 bg-primary-blue rounded-full mr-3"></span>
                            {categoriaSeleccionada ?
                                `${categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1)}s` :
                                "Últimas actualizaciones"
                            }
                        </h2>

                        {restaNoticias.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {restaNoticias.map((noticia: Noticia) => (
                                    <div
                                        key={noticia.id}
                                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="relative">
                                            <img
                                                src={noticia.imagenUrl || "https://via.placeholder.com/400x240?text=Sin+imagen"}
                                                alt={noticia.titulo}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                    coloresCategorias[noticia.categoria as keyof typeof coloresCategorias] || coloresCategorias.default
                                                }`}>
                                                    {noticia.categoria?.charAt(0).toUpperCase() + 
                                                     (noticia.categoria?.slice(1) || "Noticia")}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm text-gray-500">
                                                    {formatearFecha(noticia.fechaPublicacion)}
                                                </span>
                                                {noticia.autor && (
                                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                        Por: {noticia.autor}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 line-clamp-2 text-dark">
                                                {noticia.titulo}
                                            </h3>
                                            <p className="text-gray-600 mb-5 line-clamp-3">
                                                {noticia.resumen}
                                            </p>
                                            <button className="text-primary-blue font-semibold flex items-center hover:text-primary-blue/80 transition-colors">
                                                Leer más
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-10 rounded-xl text-center">
                                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">No hay noticias en esta categoría</h3>
                                <p className="text-gray-500">
                                    Intenta seleccionar otra categoría o vuelve pronto para nuevas actualizaciones
                                </p>
                            </div>
                        )}

                        {/* Paginación dinámica */}
                        {pagination.pages > 1 && (
                            <div className="flex justify-center mt-12">
                                <nav className="flex items-center space-x-2">
                                    <a 
                                        href={`/enterate?page=${Math.max(1, pagination.currentPage - 1)}`} 
                                        className="w-10 h-10 rounded-full bg-white text-dark border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <span className="sr-only">Anterior</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </a>
                                    
                                    {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                                        <a 
                                            key={page}
                                            href={`/enterate?page=${page}`}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                page === pagination.currentPage 
                                                ? "bg-primary-blue text-white" 
                                                : "bg-white text-dark border border-gray-300 hover:bg-gray-100"
                                            }`}
                                        >
                                            {page}
                                        </a>
                                    ))}
                                    
                                    <a 
                                        href={`/enterate?page=${Math.min(pagination.pages, pagination.currentPage + 1)}`}
                                        className="w-10 h-10 rounded-full bg-white text-dark border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <span className="sr-only">Siguiente</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        )}
                    </div>
                </section>

                {/* Suscripción a newsletter */}
                <section className="py-16 bg-dark text-white relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent-yellow opacity-5"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-blue opacity-5"></div>

                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                No te pierdas nada<span className="text-accent-yellow">.</span>
                            </h2>
                            <p className="text-gray-300">
                                Suscríbete a nuestro newsletter y recibe las últimas novedades directamente en tu bandeja de entrada
                            </p>
                        </div>

                        <form className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 px-6 py-4 rounded-md border-0 focus:ring-2 focus:ring-accent-green text-dark"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-accent-yellow hover:bg-accent-yellow/80 text-dark font-bold py-4 px-8 rounded-md transition-colors"
                            >
                                Suscribirme
                            </button>
                        </form>

                        <p className="text-sm text-center mt-4 text-gray-400">
                            Prometemos no enviar spam. Puedes darte de baja en cualquier momento.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}