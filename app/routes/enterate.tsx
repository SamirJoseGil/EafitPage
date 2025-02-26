import { useState } from "react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

// Definición de la interfaz para las noticias
interface Noticia {
    id: number;
    titulo: string;
    resumen: string;
    contenido: string;
    imagen: string;
    fecha: string;
    categoria: 'evento' | 'noticia' | 'blog' | 'actualización';
    autor?: string;
    tags?: string[];
    destacado?: boolean;
}

// Datos de muestra para noticias
const noticias: Noticia[] = [
    {
        "id": 1,
        "titulo": "EAFIT lanza Nodo para cerrar brecha de 70 mil roles en TI",
        "resumen": "Nuevo centro de formación tecnológica ofrece rutas de aprendizaje con retos reales de empresas aliadas como Bancolombia y Pragma.",
        "contenido": "El Centro Nodo de EAFIT, presentado en enero de 2025, combina formación en desarrollo web con metodologías ágiles basadas en retos industriales. Su primera ruta incluye tres módulos virtuales enfocados en programación, machine learning y ciencia de datos, con posibilidad de completarse en un año. Las empresas participantes proponen desafíos reales para aplicar los conocimientos[4][8].",
        "imagen": "https://universidadeafit.widen.net/content/afefbf23-d5f7-4759-9638-b1a309a4fd78/web/Nodo-centro.jpg?crop=yes&amp;k=c&amp;w=823&amp;h=450&amp;itok=OjfiOu9r",
        "fecha": "2025-01-26",
        "categoria": "noticia",
        "autor": "Equipo Nodo",
        "tags": ["transformación digital", "habilidades tech", "alianzas empresariales"],
        "destacado": false
    },
    {
        "id": 2,
        "titulo": "Cloud Native: nuevo curso de arquitecturas escalables",
        "resumen": "Programa actualizado en computación en la nube incluye AWS, Azure y Google Cloud con mentorías de expertos.",
        "contenido": "El curso Cloud Native (2025) profundiza en contenedores Docker, Kubernetes y microservicios, requiriendo 26 horas semanales de dedicación. Combina 72 horas de mentorías con plataforma Edublocks, permitiendo certificación en múltiples proveedores cloud. Última cohorte inicia en marzo 2025 con descuentos para comunidad EAFIT[3][6].",
        "imagen": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cCloudNativeMiniaturas-Nuevas-Nodo.jpg",
        "fecha": "2025-02-20",
        "categoria": "noticia",
        "autor": "Equipo Cloud",
        "tags": ["aws", "azure", "devops", "kubernetes"],
        "destacado": false
    },
    {
        "id": 3,
        "titulo": "Ruta Desarrollo Web 2025 abre inscripciones",
        "resumen": "Programa intensivo de 12 meses con módulos en Front-End (React), Back-End (Node.js) y Cloud (AWS).",
        "contenido": "La ruta incluye proyectos reales con empresas TI, mentorías personalizadas y opción de empleabilidad desde el primer módulo. Modalidades intensiva (3 meses/módulo) y semi-intensiva (4.5 meses) adaptables a horarios laborales. Nuevo contenido 2025: Web3 y arquitecturas serverless[1][2][6].",
        "imagen": "https://www.eafit.edu.co/PublishingImages/inscripcionesbanner.jpg",
        "fecha": "2025-02-15",
        "categoria": "noticia",
        "autor": "Equipo Desarrollo",
        "tags": ["react", "nodejs", "web3", "empleabilidad"],
        "destacado": false
    },
    {
        "id": 4,
        "titulo": "Samir José, el urraeño de 16 años que tiene becado el sueño de ser programador",
        "resumen": "Gracias a su participación destacada en Parche Tek, Samir José Gil obtuvo una beca para estudiar desarrollo web en Nodo, el centro de formación en tecnología de EAFIT.",
        "contenido": "Samir José Gil, un joven de 16 años oriundo de Urrao, Antioquia, descubrió su pasión por la programación mientras cursaba noveno grado en la Institución Educativa Jaiperá, donde se ofrece formación técnica en sistemas en convenio con el SENA. Motivado por una convocatoria que encontró en Instagram, se unió a Parche Tek, un proyecto colaborativo entre El Colombiano, EAFIT y empresas tecnológicas, cuyo objetivo era desarrollar un newsgame que explorara el mundo de los programadores en el Valle de Aburrá. Su dedicación y aportes en este proyecto le valieron una de las seis becas otorgadas para estudiar la ruta completa de desarrollo web en Nodo, el centro de formación en tecnología de EAFIT.",
        "imagen": "https://www.eafit.edu.co/sites/catalogo/PublishingImages/Noticias/2023/Parche-Tek.jpg",
        "fecha": "2023-08-11",
        "categoria": "noticia",
        "autor": "Universidad EAFIT",
        "tags": ["Parche Tek", "Nodo", "beca", "desarrollo web"],
        "destacado": true
    }
];

// Función para formatear fechas
const formatearFecha = (fechaStr: string): string => {
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
    actualización: 'bg-dark text-white'
};

export default function Enterate() {
    // Estado para filtrar por categoría
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

    // Noticias filtradas según la selección
    const noticiasFiltradas = categoriaSeleccionada
        ? noticias.filter(noticia => noticia.categoria === categoriaSeleccionada)
        : noticias;

    // Noticia destacada (primera en la lista o marcada como destacada)
    const noticiaDestacada = noticias.find(noticia => noticia.destacado) || noticias[0];

    // Resto de noticias (excluyendo la destacada)
    const restaNoticias = noticiasFiltradas.filter(noticia => noticia.id !== noticiaDestacada.id);

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
                                    onClick={() => setCategoriaSeleccionada(cat)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${categoriaSeleccionada === cat
                                        ? coloresCategorias[cat]
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
                                    src={noticiaDestacada.imagen}
                                    alt={noticiaDestacada.titulo}
                                    className="w-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${coloresCategorias[noticiaDestacada.categoria]}`}>
                                        {noticiaDestacada.categoria.charAt(0).toUpperCase() + noticiaDestacada.categoria.slice(1)}
                                    </span>
                                </div>
                            </div>
                            <div className="lg:col-span-5 flex flex-col justify-center py-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {formatearFecha(noticiaDestacada.fecha)}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-dark">
                                    {noticiaDestacada.titulo}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {noticiaDestacada.contenido}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {noticiaDestacada.tags?.map((tag, index) => (
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
                                {restaNoticias.map((noticia) => (
                                    <div
                                        key={noticia.id}
                                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="relative">
                                            <img
                                                src={noticia.imagen}
                                                alt={noticia.titulo}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${coloresCategorias[noticia.categoria]}`}>
                                                    {noticia.categoria.charAt(0).toUpperCase() + noticia.categoria.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm text-gray-500">
                                                    {formatearFecha(noticia.fecha)}
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

                        {/* Paginación básica */}
                        {restaNoticias.length > 0 && (
                            <div className="flex justify-center mt-12">
                                <nav className="flex items-center space-x-2">
                                    <button className="w-10 h-10 rounded-full bg-white text-dark border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                                        <span className="sr-only">Anterior</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center">
                                        1
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-dark border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                                        2
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white text-dark border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                                        <span className="sr-only">Siguiente</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
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