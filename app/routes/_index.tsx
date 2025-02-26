// app/routes/index.tsx
import { Outlet } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import DynamicImageSlider from "~/components/DynamicImageSlider";
import { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/1500x500/FF5733/ffffff?text=Imagen+1",
  "https://via.placeholder.com/1500x500/33FF57/ffffff?text=Imagen+2",
  "https://via.placeholder.com/1500x500/3357FF/ffffff?text=Imagen+3",
];

const reasons = [
  {
    img: "https://es.nodoeafit.com/wp-content/uploads/2023/11/eafit.svg",
    text: "Somos parte del ecosistema Eafit.",
  },
  {
    img: "https://es.nodoeafit.com/wp-content/uploads/2023/11/tiempo.svg",
    text: "Te preparas en poco tiempo con los mejores de la industria.",
  },
  {
    img: "https://es.nodoeafit.com/wp-content/uploads/2023/11/opcion1.svg",
    text: "Puedes tomar los cursos a tu ritmo.",
  },
  {
    img: "https://es.nodoeafit.com/wp-content/uploads/2023/11/Icono2.svg",
    text: "Conexión directa con el mundo laboral.",
  },
  {
    img: "https://es.nodoeafit.com/wp-content/uploads/2023/11/icono3.svg",
    text: "Metodología práctica y experiencial.",
  },
];

const companyImages = [
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/cadena.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/complementos.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/journal.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/longevo.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/m.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/postobon.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/pragma.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/prami.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/savant.jpg",
  "https://es.nodoeafit.com/wp-content/uploads/2023/11/seguros-boliar.jpg",
];

const testimonials = [
  {
    id: 1,
    initials: "AG",
    name: "Alejandro Gómez",
    role: "Graduado Frontend Developer",
    quote: "NODO cambió mi vida profesional. En menos de 6 meses pasé de no saber nada de programación a conseguir mi primer trabajo como desarrollador. La metodología práctica y el acompañamiento fueron claves."
  },
  {
    id: 2,
    initials: "MC",
    name: "María Cardona",
    role: "Estudiante de Backend Developer",
    quote: "La calidad de los mentores y el enfoque práctico de NODO me permitieron aplicar lo aprendido inmediatamente. He construido proyectos reales que ahora forman parte de mi portafolio profesional."
  },
  {
    id: 3,
    initials: "JR",
    name: "Juan Rodríguez",
    role: "Graduado Full Stack Developer",
    quote: "Después de años trabajando en otra industria, NODO me dio las herramientas para reinventarme profesionalmente. Ahora trabajo en lo que realmente me apasiona con un salario mucho mejor."
  }
];

export default function Index() {

  const [currentReason, setCurrentReason] = useState(0);

  const nextReason = () => {
    setCurrentReason((prevReason) => (prevReason + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentReason((prevReason) => (prevReason - 1 + reasons.length) % reasons.length);
  };

  // Configurar el cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextReason();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Agregar este useEffect para cambio automático de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Cambiar cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NavBar />
      <main className="flex-grow overflow-hidden">

        {/* Sección de Slider */}
        <section className="bg-white shadow-md h-screen bg-gray-100">
          <DynamicImageSlider/>
        </section>

        {/* Sección Quienes Somos */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left content - Text */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h2 className="text-7xl font-semi-bold text-dark mb-2">QUIENES</h2>
                  <h2 className="text-6xl font-bold mb-4 bg-dark text-white px-4 py-2">
                    SOMOS<span className="text-accent-yellow">.</span>
                  </h2>
                </div>

                <div className="w-20 h-1 bg-accent-green"></div>

                <div className="text-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Somos el centro de formación en nuevas tecnologías de la Universidad EAFIT. Desarrollamos capacidades en personas y organizaciones, brindando soluciones a sus desafíos tecnológicos.
                  </p>
                  <p>
                    Ofrecemos educación flexible, colaborativa y significativa que se adapta a las necesidades del mundo actual.
                  </p>
                </div>
              </div>

              {/* Right content - Image and decoration */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent-yellow opacity-20 z-0"></div>
                <div className="bg-white rounded-xl p-8 relative z-10">
                  <img
                    loading="lazy"
                    width="556"
                    height="116"
                    src="https://es.nodoeafit.com/wp-content/uploads/2023/11/logo-nodo-azul.svg"
                    alt="Logo Nodo"
                    className="w-full max-w-md mx-auto"
                  />

                  <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-accent-green">
                    <p className="text-dark italic">
                      "Transformamos el futuro a través de la tecnología y la educación"
                    </p>
                    <p className="text-right text-sm text-gray-500 mt-2">— Equipo NODO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Razones para crecer - Con fondo oscuro y tarjetas blancas */}
        <section className="py-24 bg-dark relative overflow-hidden">
          {/* Elementos decorativos para el fondo oscuro */}
          <div className="hidden md:block absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-white opacity-5 -z-10"></div>
          <div className="hidden md:block absolute right-1/4 top-0 w-48 h-48 rounded-full bg-accent-yellow opacity-10 -z-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row">

              {/* Columna izquierda - Títulos con fondo oscuro y bordes de acento */}
              <div className="w-full md:w-2/5 uppercase">
                <div className="bg-dark rounded-xl md:sticky md:top-24 h-full border border-gray-700">
                  <div className="p-4">
                    <h2 className="text-5xl md:text-6xl font-semi-bold text-white">5 razones para</h2>
                    <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 mt-4">
                      Creer y crecer
                    </h2>
                  </div>
                  <div className="p-4 bg-accent-green">
                    <h2 className="text-6xl md:text-7xl font-bold text-dark">en nodo</h2>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Carrusel con fondo blanco y altura fija */}
              <div className="w-full md:w-3/5 mt-10 md:mt-0">
                {/* Carrusel de Razones */}
                <div className="relative max-w-xl mx-auto">
                  {/* Botones de navegación */}
                  <button
                    onClick={prevReason}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-accent-green rounded-full shadow-lg flex items-center justify-center hover:bg-accent-yellow hover:text-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                    aria-label="Razón anterior"
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>

                  {/* Contenedor con altura fija - Ahora con fondo blanco */}
                  <div className="bg-white rounded-xl p-8 shadow-2xl">
                    <div className="min-h-[400px] flex flex-col items-center justify-center">
                      {/* Imagen en círculo */}
                      <div className="mb-8 p-6 rounded-full w-48 h-48 flex items-center justify-center border-2 border-accent-green bg-gray-100">
                        <img
                          src={reasons[currentReason].img}
                          alt={`Razón ${currentReason + 1}`}
                          className="w-32 h-32 object-contain"
                        />
                      </div>

                      {/* Texto con altura fija para evitar cambios de tamaño - Ahora en negro */}
                      <div className="min-h-[100px] flex items-center">
                        <h3 className="text-2xl font-bold text-dark text-center">
                          <span className="text-3xl text-primary-blue mr-2">{currentReason + 1}.</span>
                          {reasons[currentReason].text}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={nextReason}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-accent-green rounded-full shadow-lg flex items-center justify-center hover:bg-accent-yellow hover:text-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                    aria-label="Razón siguiente"
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>

                {/* Indicadores de posición */}
                <div className="flex justify-center mt-6">
                  {reasons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReason(index)}
                      className={`mx-1 w-3 h-3 rounded-full ${currentReason === index ? 'bg-accent-yellow' : 'bg-gray-400'
                        } focus:outline-none`}
                      aria-label={`Ir a razón ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Noders */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Contenido izquierdo - Texto y CTA */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h2 className="text-6xl font-semi-bold text-dark mb-2">CONOCE</h2>
                  <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-4 py-2 inline-block">
                    NUESTROS <span className="text-accent-yellow">NODERS</span>
                  </h2>
                </div>

                <div className="w-20 h-1 bg-accent-green"></div>

                <div className="text-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Los Noders son profesionales apasionados por la tecnología que han transformado sus carreras
                    a través de nuestros programas de formación. Ahora son parte de nuestra comunidad y
                    trabajan en las empresas más innovadoras del sector.
                  </p>
                  <p>
                    Descubre sus historias de éxito y cómo nuestro enfoque práctico les ayudó a
                    alcanzar sus metas profesionales.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="/codigoNodo"
                    className="inline-flex items-center bg-primary-blue hover:bg-dark text-white py-3 px-6 rounded-md text-lg font-medium transition-colors duration-300 shadow-md"
                  >
                    Conoce a nuestros Noders
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contenido derecho - Imágenes de Noders */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent-yellow opacity-20 z-0"></div>

                <div className="bg-white rounded-xl p-8 relative z-10">
                  {/* Barra de éxito */}
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent-green">
                    <p className="text-dark font-medium">
                      95% de nuestros graduados consiguen trabajo en el sector tecnológico en menos de 6 meses.
                    </p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-accent-green h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary-blue opacity-10 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección DESCUBRE NUESTROS CURSOS */}
        <section className="bg-primary-blue relative overflow-hidden">
          <div className="container mx-auto relative">
            {/* Layout con posición relativa para permitir superposición */}
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-0 h-full z-10 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://es.nodoeafit.com/wp-content/uploads/2023/11/cursosbanhme.jpg"
                  alt="Nuestros cursos"
                  className="w-full h-full object-cover"
                />
                {/* Degradado para suavizar la transición entre imagen y fondo */}
                <div className="absolute inset-0 bg-gradient-to-l from-primary-blue via-primary-blue/70 to-transparent"></div>
              </div>

              {/* Contenido superpuesto centrado sobre la imagen y el fondo */}
              <div className="relative z-20 md:ml-auto md:w-3/5 py-48 h-4/5">
                <div className="space-y-2 md:pl-32">
                  <div>
                    <h2 className="text-6xl font-bold text-white mb-2">DESCUBRE</h2>
                    <h2 className="text-5xl font-bold text-white bg-dark inline-block px-4 py-2 shadow-xl">
                      NUESTROS <span className="text-accent-yellow">CURSOS</span>
                    </h2>
                  </div>

                  <div className="w-40 h-1 bg-accent-green"></div>

                  {/* Botón de acción */}
                  <div className="pt-8">
                    <a
                      href="/cursos"
                      className="inline-flex items-center bg-white hover:bg-accent-yellow text-primary-blue hover:text-dark py-4 px-8 rounded-md text-xl font-bold transition-colors duration-300 shadow-lg"
                    >
                      Ver todos los cursos
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Imagen visible solo en móvil */}
              <div className="md:hidden w-full mb-8">
                <img
                  loading="lazy"
                  src="https://es.nodoeafit.com/wp-content/uploads/2023/11/cursosbanhme.jpg"
                  alt="Nuestros cursos"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección FUNDAMENTALS */}
        <section className="py-24 bg-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Contenido izquierdo - Imagen y botón "Curso gratis" */}
              <div className="w-full md:w-1/2 relative order-2 md:order-1">
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent-yellow opacity-20 z-0"></div>

                {/* Imagen con efecto de superposición parcial */}
                <div className="relative z-10">
                  <div className="relative">
                    <img
                      loading="lazy"
                      width="800"
                      height="706"
                      src="https://es.nodoeafit.com/wp-content/uploads/2023/11/elementals.png"
                      alt="Elementals"
                      className="w-full h-auto max-w-xl mx-auto"
                    />

                    {/* Elemento decorativo para la superposición */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary-blue opacity-20 z-0"></div>
                  </div>

                  {/* Botón "Curso gratis" debajo de la imagen, sin bordes redondeados */}
                  <div className="mt-1 max-w-xl mx-auto">
                    <a
                      className="w-full block text-center bg-accent-yellow hover:bg-accent-yellow/90 text-dark py-2 uppercase text-4xl font-bold transition-colors duration-300 shadow-lg"
                    >
                      Curso gratis
                    </a>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary-blue opacity-10 z-0"></div>
              </div>

              {/* Contenido derecho - Texto y botón "¡Inscríbete ahora!" */}
              <div className="w-full md:w-1/2 space-y-8 relative z-20 order-1 md:order-2">
                <div>
                  <h2 className="text-7xl font-bold text-accent-yellow mb-4 relative">
                    FUNDAMENTALS
                    <span className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-accent-green opacity-20 -z-10"></span>
                  </h2>
                  <h2 className="text-4xl font-bold text-white uppercase">
                    ¡El código que te llevará al futuro!
                  </h2>
                </div>

                <div className="w-32 h-1 bg-accent-green"></div>

                <div className="text-lg text-gray-300 leading-relaxed">
                  <p className="mb-2">
                    Comienza este recorrido por Fundamentals, el denominado módulo cero. Lo llamamos así porque es el que toda persona que quiera hacer parte de este nivel base debe alcanzar. La invitación es a que abordes la lógica de programación, que analices cómo se resuelven los problemas desde la parte y el pensamiento computacional, y que comprendas cómo funciona una computadora y cómo nos genera soluciones. Ten en cuenta que este es el nivel que debes abordar antes de estudiar desarrollo Front, desarrollo Back y desarrollo en nube. ¡Adelante con este corto módulo e inicia esta adaptación al mundo digital!
                  </p>
                </div>

                {/* Solo botón de inscripción */}
                <div className="pt-2">
                  <a
                    href="https://aula.nodoeafit.com/curso/2401/fundamentals"
                    target="_blank"
                    className="inline-flex items-center justify-center bg-accent-green hover:bg-accent-green/80 text-dark py-3 px-8 rounded-md text-xl font-bold transition-colors duration-300 shadow-lg uppercase"
                  >
                    ¡Inscríbete ahora!
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Elementos decorativos adicionales */}
            <div className="hidden md:block absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-white opacity-5 -z-10"></div>
            <div className="hidden md:block absolute right-1/4 top-0 w-48 h-48 rounded-full bg-accent-yellow opacity-10 -z-10"></div>
          </div>
        </section>

        {/* Sección ¿Cómo lo hacemos? */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Imagen de fondo posicionada a la derecha */}
          <div className="hidden md:block absolute right-0 top-0 h-full w-2/3 z-0">
            <img
              loading="lazy"
              src="https://es.nodoeafit.com/wp-content/uploads/2023/11/como-los-hacemos-nodo-1.jpg"
              alt="¿Cómo lo hacemos?"
              className="w-full h-full object-cover"
            />
            {/* Degradado para suavizar la transición entre imagen y fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="md:max-w-lg">
              {/* Título superpuesto */}
              <div className="relative mb-16 z-20">
                <h2 className="text-6xl font-semi-bold text-dark mb-2">¿CÓMO LO</h2>
                <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-8 py-3 inline-block shadow-xl">
                  HACEMOS<span className="text-accent-yellow">?</span>
                </h2>
                <div className="w-20 h-1 bg-accent-green mt-4"></div>
              </div>

              {/* Descripción breve */}
              <div className="mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  En NODO combinamos metodologías ágiles con aprendizaje experiencial para desarrollar habilidades tecnológicas
                  prácticas y relevantes. Nuestro enfoque se basa en tres pilares: experiencia práctica, mentorías
                  personalizadas y conexión con la industria.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen visible solo en móvil */}
          <div className="md:hidden w-full mt-12 px-4">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                loading="lazy"
                src="https://es.nodoeafit.com/wp-content/uploads/2023/11/como-los-hacemos-nodo-1.jpg"
                alt="¿Cómo lo hacemos?"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sección ¿Dónde te ves trabajando en el futuro? */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Títulos con el mismo estilo que otras secciones */}
            <div className="relative mb-16 z-20 text-center">
              <h2 className="text-6xl font-semi-bold text-dark mb-2">¿DÓNDE TE VES</h2>
              <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-8 py-3 inline-block shadow-xl">
                TRABAJANDO <span className="text-accent-yellow">EN EL FUTURO?</span>
              </h2>
              <div className="w-20 h-1 bg-accent-green mt-4 mx-auto"></div>

              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Nuestros estudiantes han encontrado oportunidades en estas <span className="font-bold text-primary-blue">empresas</span>
              </p>
            </div>

            {/* Contenedor del carrusel */}
            <div className="w-full relative mt-12 px-4">
              {/* Indicador visual de desplazamiento */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 bg-gradient-to-r from-white to-transparent h-full z-10"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 bg-gradient-to-l from-white to-transparent h-full z-10"></div>

              {/* Carrusel con animación */}
              <div className="overflow-hidden">
                <div className="companies-carousel flex space-x-8 py-8">
                  {companyImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={src}
                        alt={`empresa-${index + 1}`}
                        className="w-48 h-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </div>
                  ))}
                  {/* Duplicar las primeras imágenes para crear efecto continuo */}
                  {companyImages.slice(0, 4).map((src, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0">
                      <img
                        src={src}
                        alt={`empresa-${index + 1}`}
                        className="w-48 h-auto object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección combinada de Testimonios y Contacto con fondo oscuro */}
        <section className="py-24 relative overflow-hidden bg-dark text-white">
          {/* Imagen de fondo con overlay más oscuro */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark opacity-90 z-10"></div>
            <img
              src="https://es.nodoeafit.com/wp-content/uploads/2023/11/banner_nodo_contacto.jpg"
              alt="Fondo NODO"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Elementos decorativos */}
          <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-accent-yellow opacity-10 -z-10"></div>
          <div className="absolute right-0 bottom-1/4 w-48 h-48 rounded-full bg-accent-green opacity-10 -z-10"></div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Columna izquierda - Qué dicen de nosotros */}
              <div className="flex flex-col items-center space-y-8">
                <div className="text-center relative">
                  <h2 className="text-6xl font-semi-bold text-white mb-2">QUÉ DICEN</h2>
                  <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-4 py-2 inline-block shadow-xl border border-gray-800">
                    DE <span className="text-accent-yellow">NOSOTROS</span>
                  </h2>
                  <div className="w-20 h-1 bg-accent-green mx-auto mt-4"></div>
                </div>

                <div className="w-full flex justify-center mb-8">
                  <img
                    loading="lazy"
                    width="315"
                    height="119"
                    src="https://es.nodoeafit.com/wp-content/uploads/2023/11/logo-nodo-mini.svg"
                    alt="Logo Nodo Mini"
                    className="w-56 h-auto"
                  />
                </div>

                {/* Testimonios en tarjetas - Con carrusel automático y manual */}
                <div className="w-full">
                  <div className="relative">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={`bg-white h-62 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white border-opacity-20 transition-opacity duration-500 ${currentTestimonial === index
                          ? "opacity-100"
                          : "absolute inset-0 opacity-0 pointer-events-none"
                          }`}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center text-dark font-bold text-xl mr-4">
                            {testimonial.initials}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-accent-yellow text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="italic text-gray-100">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Indicadores */}
                  <div className="mt-4 flex justify-center">
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={testimonial.id}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${index === currentTestimonial ? 'bg-accent-yellow' : 'bg-white opacity-50 hover:opacity-75'
                          }`}
                        aria-label={`Ver testimonio de ${testimonial.name}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Columna derecha - Escríbenos ahora */}
              <div className="flex flex-col items-center space-y-8">
                <div className="text-center relative">
                  <h2 className="text-6xl font-semi-bold text-white mb-2">ESCRÍBENOS</h2>
                  <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-4 py-2 inline-block shadow-xl border border-gray-800">
                    <span className="text-accent-yellow">AHORA</span>
                  </h2>
                  <div className="w-20 h-1 bg-accent-green mx-auto mt-4"></div>
                </div>

                {/* Formulario de contacto */}
                <div className="w-full bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white border-opacity-20">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-200 mb-1">Nombre completo</label>
                        <input
                          type="text"
                          id="nombre"
                          className="w-full bg-dark bg-opacity-50 border border-gray-400 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Correo electrónico</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-dark bg-opacity-50 border border-gray-400 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                          placeholder="correo@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-200 mb-1">Asunto</label>
                      <input
                        type="text"
                        id="asunto"
                        className="w-full bg-dark bg-opacity-50 border border-gray-400 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="Asunto del mensaje"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-200 mb-1">Mensaje</label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className="w-full bg-dark bg-opacity-50 border border-gray-400 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                        placeholder="Escribe tu mensaje aquí..."
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-accent-yellow hover:bg-accent-yellow/90 text-dark py-3 px-8 rounded-md text-xl font-bold transition-colors duration-300 shadow-lg"
                      >
                        Enviar mensaje
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
