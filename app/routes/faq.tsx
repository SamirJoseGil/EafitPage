import { useState } from "react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

// Actualizar la interfaz FAQItem para incluir categoría
type FAQItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
  categoria: 'general' | 'cursos' | 'pagos';
};

// Datos actualizados con categorías
const faqItems: FAQItem[] = [
  {
    id: "faq1",
    question: "¿Cómo puedo realizar el proceso de compra de un curso?",
    answer: (
      <p>
        <a
          className="text-blue-600 hover:text-blue-800"
          href="/wp-content/uploads/2023/11/manual_proceso_de_pago_compressed.pdf"
          target="_blank"
        >
          Descargar manual proceso de compra
        </a>
      </p>
    ),
    categoria: "pagos"
  },
  {
    id: "faq2",
    question: "¿Cuál es la disponibilidad horaria ideal para estudiar en Nodo?",
    answer: (
      <p>
        Para aprender en Nodo sugerimos una disponibilidad de 5 horas diarias dedicadas al aprendizaje autónomo,
        al encuentro con tutores y al trabajo en equipo.
      </p>
    ),
    categoria: "cursos"
  },
  {
    id: "faq3",
    question: "¿Cuánto dura una ruta de aprendizaje en Nodo?",
    answer: (
      <div>
        <p>
          Nuestras rutas están compuestas por módulos, cada módulo tiene una duración de 3 meses,
          exceptuando nuestro módulo de Fundamentals que puedes completar en menos tiempo,
          es gratuito y puedes iniciarlo hoy mismo.
        </p>
        <p className="mt-4">
          Para el caso de nuestra ruta de Desarrollo web proponemos un primer módulo de Frontend,
          luego un módulo de Backend, un módulo de Nube y algunas electivas que próximamente
          estarán disponibles. Cada módulo podría ser suficiente para iniciar en la búsqueda
          de empleo como programador junior, pero completar toda la ruta podría darte muchas
          más oportunidades de conseguir el empleo de tus sueños y hacer de tu perfil profesional algo único.
        </p>
      </div>
    ),
    categoria: "cursos"
  },
  {
    id: "faq4",
    question: "¿Con lo que aprenderé en Nodo será suficiente para conseguir un trabajo o necesito complementar con algo más?",
    answer: (
      <div>
        <p>
          Lo que aprenderás en Nodo elevará el nivel de tus habilidades, bien sea porque
          quieras incursionar en el desarrollo web como programador junior, porque busques
          complementar y actualizar tus conocimientos o porque quieras reorientar de rumbo tu vida profesional.
        </p>
        <p className="mt-4">
          Es claro que, como en cualquier área del conocimiento, practicar y profundizar
          será la clave para especializarse y seguir creciendo, por eso descubre qué más
          puedes aprender en Nodo que te permita conseguir un perfil atractivo.
        </p>
      </div>
    ),
    categoria: "general"
  },
  {
    id: "faq5",
    question: "¿Qué se viene para Nodo?",
    answer: (
      <p>
        En el momento contamos con una sólida ruta de aprendizaje en Desarrollo web y
        próximamente llegará nuestra ruta de Internet de las cosas y muchas otras más.
        Sigue atento a nuestras noticias inscribiéndote en nuestro newsletter para que
        no te pierdas nada de lo que tenemos preparado para ti.
      </p>
    ),
    categoria: "general"
  },
  {
    id: "faq6",
    question: "¿Necesito conocimientos previos?",
    answer: (
      <p>
        Necesitas conocimientos en lógica de programación, matemáticas fundamentales y
        matriciales, nociones en el funcionamiento de internet y las páginas web.
        Te invitamos a realizar nuestro curso de Fundamentals que es completamente gratis.
      </p>
    ),
    categoria: "cursos"
  },
  {
    id: "faq7",
    question: "¿Qué equipo necesito para tomar el curso?",
    answer: (
      <p>Necesitas un equipo de gama media, buena conexión a internet, muchas ganas y disciplina.</p>
    ),
    categoria: "cursos"
  },
  {
    id: "faq8",
    question: "¿En qué tipo de roles o proyectos podré trabajar una vez termine el curso?",
    answer: (
      <p>
        Podrás trabajar en proyectos y empresas de desarrollo de software y en el sector TI en general,
        como parte de los equipos que crean soluciones en frontend y backend.
      </p>
    ),
    categoria: "general"
  },
  {
    id: "faq9",
    question: "¿Cuáles son las proporciones de trabajo individual vs trabajo grupal?",
    answer: (
      <p>
        En los equipos tech como en cualquier trabajo, muchas de las tareas se realizan en equipo.
        Por tanto, tendrás mucho trabajo en equipo además del estudio autónomo.
      </p>
    ),
    categoria: "cursos"
  },
  {
    id: "faq10",
    question: "¿Cómo se calcula mi nota final?",
    answer: (
      <p>
        La nota será calculada por las actividades realizadas en las sesiones con tutores,
        las actividades asincrónicas, el trabajo en equipo en el reto asignado y
        las actividades en el módulo de inglés.
      </p>
    ),
    categoria: "cursos"
  },
  {
    id: "faq11",
    question: "¿Puedo pagar en cuotas?",
    answer: (
      <p>
        Sí, ofrecemos opciones de pago flexible. Puedes pagar con tarjeta de crédito en cuotas
        según el plan que te ofrezca tu banco, o solicitar información sobre nuestros convenios
        con entidades financieras para financiamiento educativo.
      </p>
    ),
    categoria: "pagos"
  },
  {
    id: "faq12",
    question: "¿Hay descuentos para estudiantes o egresados de EAFIT?",
    answer: (
      <p>
        Sí, los estudiantes y egresados de EAFIT cuentan con descuentos especiales en nuestros programas.
        Por favor comunícate con nuestro equipo de atención para conocer los porcentajes y condiciones vigentes.
      </p>
    ),
    categoria: "pagos"
  },
  {
    id: "faq13",
    question: "¿Qué métodos de pago aceptan?",
    answer: (
      <p>
        Aceptamos pagos con tarjetas de crédito/débito, transferencias bancarias, PSE y pago en efectivo
        a través de corresponsales bancarios. También tenemos convenios con entidades financieras para
        crédito educativo.
      </p>
    ),
    categoria: "pagos"
  }
];


export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  // Estado para la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>("general");

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Filtrar preguntas según la categoría seleccionada
  const preguntasFiltradas = categoriaSeleccionada
    ? faqItems.filter(item => item.categoria === categoriaSeleccionada)
    : faqItems;

  // Conteo de preguntas por categoría para mostrar en los botones
  const conteoGeneral = faqItems.filter(item => item.categoria === 'general').length;
  const conteoCursos = faqItems.filter(item => item.categoria === 'cursos').length;
  const conteoPagos = faqItems.filter(item => item.categoria === 'pagos').length;


  return (
    <>
      <NavBar />
      <div className="w-screen min-h-screen">

        {/* Sección de header mejorada */}
        <section className="bg-dark text-white py-16 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-yellow opacity-5"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-primary-blue opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-yellow/20">
                <svg
                  className="w-10 h-10 text-accent-yellow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"></path>
                  <path d="M11 7h2v8h-2V7zm0 10h2v2h-2v-2z"></path>
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Preguntas Frecuentes<span className="text-accent-yellow">.</span>
              </h1>
              <p className="text-xl text-gray-300">
                Encuentra respuestas a las dudas más comunes sobre nuestros programas
              </p>
              <div className="w-24 h-1 bg-accent-green mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* Sección principal de FAQ con categorías */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4">
            {/* Pestañas de categorías - Implementadas */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setCategoriaSeleccionada("general")}
                className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center ${categoriaSeleccionada === "general"
                    ? 'bg-dark text-white'
                    : 'bg-white text-dark border border-gray-300 hover:bg-gray-100'
                  }`}
              >
                General
                <span className="ml-2 bg-accent-yellow text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {conteoGeneral}
                </span>
              </button>
              <button
                onClick={() => setCategoriaSeleccionada("cursos")}
                className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center ${categoriaSeleccionada === "cursos"
                    ? 'bg-dark text-white'
                    : 'bg-white text-dark border border-gray-300 hover:bg-gray-100'
                  }`}
              >
                Cursos
                <span className="ml-2 bg-accent-yellow text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {conteoCursos}
                </span>
              </button>
              <button
                onClick={() => setCategoriaSeleccionada("pagos")}
                className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center ${categoriaSeleccionada === "pagos"
                    ? 'bg-dark text-white'
                    : 'bg-white text-dark border border-gray-300 hover:bg-gray-100'
                  }`}
              >
                Pagos
                <span className="ml-2 bg-accent-yellow text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {conteoPagos}
                </span>
              </button>
              <button
                onClick={() => setCategoriaSeleccionada(null)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${categoriaSeleccionada === null
                    ? 'bg-dark text-white'
                    : 'bg-white text-dark border border-gray-300 hover:bg-gray-100'
                  }`}
              >
                Ver todo
              </button>
            </div>

            {/* Acordeón mejorado */}
            <div className="space-y-4">
              {preguntasFiltradas.length > 0 ? (
                preguntasFiltradas.map((item, index) => (
                  <div
                    key={item.id}
                    className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-400 transition-all duration-300 hover:shadow-md ${index < preguntasFiltradas.length - 1 ? "mb-6 pb-2 border-b-2 border-b-gray-300" : ""
                      }`}
                  >
                    <button
                      className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none transition-colors"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={openItem === item.id}
                      aria-controls={`content-${item.id}`}
                    >
                      <span className="font-semibold text-lg text-dark pr-8">
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openItem === item.id ? 'bg-accent-yellow text-dark' : 'bg-gray-100 text-gray-500'
                        }`}>
                        {openItem === item.id ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </div>
                    </button>

                    {openItem === item.id && (
                      <div
                        id={`content-${item.id}`}
                        className="py-5 px-6 text-gray-600 bg-gray-50 border-t border-gray-100"
                      >
                        <div className="prose max-w-none">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white p-10 rounded-xl text-center shadow-sm">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No hay preguntas en esta categoría</h3>
                  <p className="text-gray-500">
                    Por favor selecciona otra categoría o contacta con nosotros si tienes alguna pregunta específica
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sección de contacto adicional */}
        <section className="py-12 bg-accent-yellow relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-dark opacity-5"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-blue opacity-5"></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 rounded-full bg-accent-green opacity-10"></div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-dark mb-4">
                  ¿No encontraste tu respuesta?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Nuestro equipo está listo para resolver todas tus dudas y brindarte la orientación que necesitas para comenzar tu camino en Nodo
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:nodo@eafit.edu.co"
                  className="inline-flex items-center bg-dark hover:bg-dark/80 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Escríbenos
                </a>
                <a
                  href="tel:+5745662222"
                  className="inline-flex items-center bg-accent-green hover:bg-accent-green/80 text-dark py-3 px-6 rounded-md text-lg font-semibold transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Llámanos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}