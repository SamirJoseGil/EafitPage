import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";





const cursos = [
  {
    title: "Procesamiento de datos",
    image: "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Procesamiento-de-datos_1300x872.jpg",
    description: "¡Fortalece tu potencial con nuestro curso de Procesamiento de Datos! Descubre las habilidades fundamentales que necesitas para conocer el mundo del procesamiento de datos. Los módulos especializados que conforman el curso son: Programación con Python; Estadística básica con Python; Bases de datos relacionales; y Limpieza y transformación de datos en Python. ¡No te pierdas esta oportunidad de adquirir conocimientos esenciales y aplicables en el mercado laboral actual! Con recursos de calidad, te acompañaremos en cada paso del camino. ¡Prepárate para acceder al mundo de posibilidades en el procesamiento de datos!",
    type: "curso virtual",
    price: "$2.716.450",
    link: "https://aula.nodoeafit.com/curso/2678/procesamiento-de-datos"
  },
  {
    title: "SinergIA para asesores inmobiliarios",
    image: "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Sinergia-Básico (1).png",
    description: "Descubre el poder de la inteligencia artificial con este curso. A través de ejemplos prácticos y herramientas accesibles, aprenderás qué es la IA, cómo funciona y cómo aplicarla en tu día a día. Desde la optimización de tareas hasta la creación de asistentes virtuales y generación de contenido, este curso te dará las bases para integrar la IA en tu entorno laboral y personal.",
    type: "curso presencial",
    price: "$504.000",
    link: "https://aula.nodoeafit.com/curso/3281/sinergia-para-asesores-inmobiliarios"
  },
  {
    title: "SinergIA - Nivel Intermedio",
    image: "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Sinergia-intermedio.png",
    description: "Lleva tus habilidades en inteligencia artificial al siguiente nivel con un enfoque práctico y estratégico. En este curso, aprenderás a integrar IA en la generación de contenido y la automatización de procesos en escenarios reales de alta exigencia. A través de actividades guiadas, desafíos aplicados a la industria y personalización según tu sector, desarrollarás soluciones innovadoras adaptadas a tu entorno laboral o empresarial.",
    type: "curso presencial",
    price: "$545.000",
    link: "https://aula.nodoeafit.com/curso/3277/sinergia-nivel-intermedio"
  },
  {
    title: "Git y Github",
    image: "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Miniatura-1300x872.jpg",
    description: "Aprende a gestionar versiones, colaborar eficazmente y mejorar tu flujo de trabajo como desarrollador. Este curso de Git y GitHub te permite comenzar a dominar estas habilidades necesarias actualmente. ¡Empieza y transforma tu experiencia de desarrollo!",
    type: "curso virtual",
    price: "$472.348",
    link: "https://aula.nodoeafit.com/curso/3168/git-y-github"
  },
  {
    title: "IA para todos",
    image: "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Miniatura 1300x872.jpg",
    description: "¡Descubre cómo la IA está revolucionando el mundo! Conoce los conceptos clave de la IA, cómo surgió, cómo está impactando las industrias a nivel mundial, las posibilidades que nos brinda, cómo utilizarla y cómo esta tecnología está cambiando el futuro.",
    type: "curso virtual",
    price: "$472.348",
    link: "https://aula.nodoeafit.com/curso/3146/ia-para-todos"
  },
  {
    "title": "SinergIA - Nivel básico",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Sinergia-Básico (1).png",
    "description": "Descubre el poder de la inteligencia artificial con este curso. A través de ejemplos prácticos y herramientas accesibles, aprenderás qué es la IA, cómo funciona y cómo aplicarla en tu día a día. Desde la optimización de tareas hasta la creación de asistentes virtuales y generación de contenido, este curso te dará las bases para integrar la IA en tu entorno laboral y personal.",
    "type": "curso presencial",
    "price": "$495.000",
    "link": "https://aula.nodoeafit.com/curso/3105/sinergia-nivel-basico"
  },
  {
    "title": "Power BI aplicado a datos económicos",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/PowerBI_1300x872.jpg",
    "description": "Power BI es una herramienta de Microsoft que convierte grandes volúmenes de datos en gráficos y reportes interactivos. Conecta diferentes fuentes de información, lo que permite analizar indicadores económicos, y visualizar rápidamente sus relaciones para tomar decisiones informadas basadas en análisis. En este curso, de la mano de un gran experto y conocedor, desarrollaremos habilidades de comunicación de datos usando la herramienta para el análisis exploratorio de datos del área de economía.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2982/power-bi-aplicado-a-datos-economicos"
  },
  {
    "title": "Minería y modelos aplicados",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Minería y modelos aplicados_1300x872.jpg",
    "description": "Bienvenidos a nuestro curso de Minería y modelos aplicados. Explora datos tabulares y texto, aprende sobre datos multimodales y descubre la actualidad y las tendencias en este sector. Abordaremos temas como el sesgo y la ética en los datos, esenciales en todo campo, y más ahora en la inteligencia artificial.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2951/mineria-y-modelos-aplicados"
  },
  {
    "title": "TensorFlow",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/TensorFlow_1300x872.jpg",
    "description": "En nuestro curso de TensorFlow podrás descubrir el potencial de esta herramienta para el desarrollo de modelos de machine learning. Desde los fundamentos básicos hasta técnicas avanzadas, este curso te guiará paso a paso en el manejo de datos, la creación de modelos efectivos y la implementación de soluciones de inteligencia artificial.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2898/tensorflow"
  },
  {
    "title": "DAX",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/DAX_1300x872.jpg",
    "description": "En este curso sobre el lenguaje de programación DAX aprenderás desde los fundamentos y conceptos básicos hasta la creación y optimización de modelos de datos, dominando técnicas avanzadas que te permitirán realizar análisis eficientes.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2878/dax"
  },
  {
    "title": "Seaborn",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/Miniatura_Seaborn_1300x872.jpg",
    "description": "¡Únete a nuestro curso sobre Seaborn! Es el momento de conocer todo sobre esta poderosa biblioteca que te permite crear gráficos complejos con pocas líneas de código y estilos preconfigurados que aportan una apariencia profesional.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2887/seaborn"
  },
  {
    "title": "Cloud Native",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cCloudNativeMiniaturas-Nuevas-Nodo.jpg",
    "description": "Cloud Native te introduce a la computación en la nube, contenedores, orquestación y arquitecturas de microservicios. Aprende a implementar y gestionar aplicaciones escalables y eficientes en plataformas como AWS, Azure, y Google Cloud, mejorando tus habilidades técnicas y blandas en un entorno de aprendizaje colaborativo.",
    "type": "curso virtual",
    "price": "$2.716.450",
    "link": "https://aula.nodoeafit.com/curso/2242/cloud-native"
  },
  {
    "title": "Frontend",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cFront-end-Miniaturas-Nuevas-Nodo.jpg",
    "description": "Inicia el recorrido por este curso con el abordaje de cuatro temas esenciales: Estructura de Datos I, HTML, CSS y Typescript. Empieza en las ciencias básicas y llega hasta el ciclo especializado desde lo más general hasta lo más específico.",
    "type": "curso virtual",
    "price": "$2.716.450",
    "link": "https://aula.nodoeafit.com/curso/2197/frontend"
  },
  {
    "title": "Backend",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cBackend-Miniaturas-Nuevas-Nodo.jpg",
    "description": "Aquí podrás crear los servicios y las funciones que procesan los datos del usuario y que retornan una respuesta. Aprenderás cómo se cumple este proceso y qué existe luego de que alguien teclea 'Enviar'.",
    "type": "curso virtual",
    "price": "$2.716.450",
    "link": "https://aula.nodoeafit.com/curso/2326/backend"
  },
  {
    "title": "Fundamentals Web",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cFundamentals-Miniaturas-Nuevas-Nodo.jpg",
    "description": "Comienza este recorrido por Fundamentals, el denominado módulo cero. Lo llamamos así porque es el que toda persona que quiera hacer parte de este nivel base debe alcanzar.",
    "type": "curso virtual",
    "price": "Gratis",
    "link": "https://aula.nodoeafit.com/curso/2401/fundamentals-web"
  },
  {
    "title": "Python",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cPython-Miniaturas-Nuevas-Nodo.jpg",
    "description": "El coding o programación se convirtió en una habilidad de gran demanda y valoración en el mundo digital, y Python es uno esos lenguajes de mayor uso por su facilidad de diseño y aplicación.",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2026/python"
  },
  {
    "title": "Introducción a JAVA",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cJava-Miniaturas-Nuevas-Nodo.jpg",
    "description": "En este curso entenderás una parte del vasto mundo de la programación con Java, un lenguaje que ha sido fundamental en el desarrollo de software durante décadas. A través de un viaje pedagógico, meticulosamente diseñado, te introducirás en la esencia del lenguaje, desde su sintaxis básica hasta sus características avanzadas. ¡Te damos la bienvenida!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2031/introduccion-a-java"
  },
  {
    "title": "Diálogos digitales: GPT para principiantes",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cGPT-Miniaturas-Nuevas-Nodo.jpg",
    "description": "En este curso aprenderás a usar desde cero desarrollos de IA, como ChatGPT, y cómo aplicar estas inteligencias de forma práctica, entendiendo su alcance y limitaciones, para sacarles todo el provecho posible, aumentar tu productividad y lograr resultados extraordinarios en tus proyectos laborales y personales. ¡Comencemos!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2135/dialogos-digitales-gpt-para-principiantes"
  },
  {
    "title": "DesignOps",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cdesignopsMiniaturas-Nuevas-Nodo.jpg",
    "description": "El diseño de operaciones, más conocido como DesignOps, es un enfoque ampliamente utilizado en organizaciones modernas. En este curso aprenderás de qué se trata, y por qué son importantes la comunicación, el desarrollo del talento de diseño y las mediciones para lograr su implementación con éxito. ¡Comencemos!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2466/designops"
  },
  {
    "title": "Business Analyst",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cBusines_-Analyst_1300x872.jpg",
    "description": "Is acquiring the power of Agile and Scrum still on your to-do list? If you want to deploy better business analysis, this course is for you. You will learn the essentials, from introduction to Agile and Scrum and user stories, to estimation, planning and continuous improvement to elevate your skills. Join this transformative learning journey today!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2507/business-analyst"
  },
  {
    "title": "Flutter",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cFlutter_1300x872.jpg",
    "description": "¡Welcome to your Flutter course! From this moment on, you begin your immersion in the world of Google's UI toolkit, which is revolutionizing the world of mobile app design. Knowing and mastering Flutter is essential if you want to be at the forefront of creating dynamic, appealing, and user-friendly interfaces. ¡Let's start!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2564/flutter"
  },
  {
    "title": "Design thinking for software developers",
    "image": "https://aula.nodoeafit.com//contenido/modulo_conferencias/img/1cDesign-thinking-for-software-developers_1300x872.jpg",
    "description": "Welcome to the Design Thinking for Software Developers course! Throughout this program, we'll embark on a journey to enhance our creativity in idea generation and develop the necessary skills to approach software development with a user-centered mindset. The key topics we'll cover include ideate, prototype, learning from users and implementing design thinking. Let's dive in and start learning!",
    "type": "curso virtual",
    "price": "$472.348",
    "link": "https://aula.nodoeafit.com/curso/2585/design-thinking-for-software-developers"
  }
];

export default function Cursos() {
  return (
    <>
      <NavBar />
      <div className="max-w-screen">

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

        {/* Sección Todos los cursos */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              {/* Título de sección */}
              <h2 className="text-5xl md:text-6xl font-bold text-dark mb-2">TODOS LOS</h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-dark text-white px-4 py-2 inline-block">
                CURSOS<span className="text-accent-yellow">.</span>
              </h2>
              <div className="w-20 h-1 bg-accent-green mt-2 mb-2"></div>
            </div>

            {/* Grid de cursos responsive - Ajustado a máximo 3 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cursos.map((curso, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full bg-white rounded-lg border border-gray-300 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Imagen del curso - Más alta */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={curso.image}
                      alt={curso.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* Badge tipo de curso */}
                    <div className="absolute top-4 left-0 bg-primary-blue py-1 px-3 text-white text-xs uppercase font-bold rounded-r-full">
                      {curso.type}
                    </div>
                  </div>

                  {/* Contenido - Padding aumentado */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Título del curso - altura fija aumentada */}
                    <h3 className="text-xl font-bold text-dark leading-tight h-20 line-clamp-2 mb-4">
                      {curso.title}
                    </h3>

                    {/* Descripción corta - más líneas visibles */}
                    <p className="text-gray-600 text-sm mb-5 line-clamp-4 flex-grow">
                      {curso.description.substring(0, 150)}...
                    </p>

                    {/* Precio y tipo de curso */}
                    <div className="flex justify-between items-center mb-5 mt-auto">
                      <span className="text-sm uppercase font-bold text-primary-blue">
                        {curso.type}
                      </span>
                      <span className="text-xl font-bold text-dark">
                        {curso.price}
                      </span>
                    </div>

                    {/* Botones de acción - Más grandes */}
                    <div className="flex justify-between items-center mt-2 gap-3">
                      <a
                        href={curso.link}
                        className="flex-1 py-3 px-4 bg-accent-yellow hover:bg-accent-yellow/80 text-dark font-bold text-center rounded-md transition-colors uppercase text-sm"
                      >
                        Ver curso
                      </a>
                      <a
                        href={curso.link}
                        className="flex-1 py-3 px-4 bg-accent-green hover:bg-accent-green/80 text-dark font-bold text-center rounded-md transition-colors uppercase text-sm"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección "¡ÚNETE A LA EVOLUCIÓN!" */}
        <section className="py-12 bg-accent-yellow relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Elementos decorativos de fondo */}
            <div className="absolute left-10 top-10 w-40 h-40 rounded-full bg-dark opacity-5"></div>
            <div className="absolute right-10 bottom-10 w-56 h-56 rounded-full bg-dark opacity-5"></div>

            <div className="flex flex-col items-center mb-12 relative">
              {/* Título principal con estilo destacado */}
              <h2 className="text-8xl md:text-9xl font-extrabold text-dark mb-4 uppercase tracking-wider text-center relative">
                ¡ÚNETE A LA
                <span className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-accent-green opacity-20 -z-10"></span>
              </h2>
              <h2 className="text-6xl md:text-7xl font-extrabold text-dark mb-2 uppercase tracking-wider text-center">
                EVOLUCIÓN<span className="text-primary-blue">!</span>
              </h2>
              <div className="w-32 h-1 bg-primary-blue mt-2 mb-6"></div>

              <p className="text-xl text-dark text-center max-w-3xl mb-2 uppercase">
                Forma parte de una comunidad en constante crecimiento y adquiere las habilidades digitales
                más demandadas del mercado con nuestra metodología innovadora
              </p>
            </div>

            {/* Cards con beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {/* Beneficio 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-blue text-4xl font-bold mb-4">#1</div>
                <h3 className="text-xl font-bold text-dark mb-3">PROFESORES EXPERTOS</h3>
                <p className="text-gray-700">
                  Aprende de profesionales activos en la industria con amplia experiencia en las tecnologías más demandadas.
                </p>
              </div>

              {/* Beneficio 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-blue text-4xl font-bold mb-4">#2</div>
                <h3 className="text-xl font-bold text-dark mb-3">CURSOS ACTUALIZADOS</h3>
                <p className="text-gray-700">
                  Contenido constantemente renovado para mantenerte al día con las últimas tendencias tecnológicas.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-blue text-4xl font-bold mb-4">#3</div>
                <h3 className="text-xl font-bold text-dark mb-3">COMUNIDAD ACTIVA</h3>
                <p className="text-gray-700">
                  Conecta con estudiantes, egresados y profesionales para expandir tu red y oportunidades laborales.
                </p>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="flex justify-center">
              <a
                href="https://es.nodoeafit.com/codigo-nodo/"
                className="inline-flex items-center justify-center bg-dark hover:bg-dark/80 text-white py-4 px-10 rounded-md text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg uppercase"
              >
                Conoce más sobre nuestros programas
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Onda decorativa en la parte inferior */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-12"
              fill="#FFFFFF"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,2,0,2v0c0,0,72,32.6,158,55.69a769.56,769.56,0,0,0,163.36,28.03Z"></path>
            </svg>
          </div>
        </section>

        {/* Sección "CÓMO ESTUDIAMOS" */}
        <section className="py-24 bg-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Elementos decorativos de fondo */}
            <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-primary-blue opacity-5"></div>
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent-yellow opacity-5"></div>

            <div className="flex flex-col items-center mb-16">
              {/* Título principal con estilo destacado */}
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-2 uppercase tracking-wider text-center">CÓMO</h2>
              <h2 className="text-6xl md:text-7xl font-bold text-accent-yellow mb-6 uppercase tracking-wider text-center">ESTUDIAMOS</h2>
              <div className="w-32 h-1 bg-accent-green mt-2 mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Tarjeta 1: Aprendizaje en vivo */}
              <div className="bg-dark-secondary bg-opacity-30 p-8 rounded-lg border border-gray-700">
                <div className="text-accent-green text-5xl font-bold mb-6">01</div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-wide">APRENDIZAJE EN VIVO Y PREGRABADO</h3>
                <p className="text-gray-300 uppercase leading-relaxed text-sm">
                  Combinamos clases en tiempo real con materiales disponibles las 24/7 para adaptarnos a tu ritmo y necesidades. Contamos con módulos pregrabados así como clases en vivo con profes y alumnos que aprenden a tu ritmo y en equipo.
                </p>
              </div>

              {/* Tarjeta 2: Retos reales */}
              <div className="bg-dark-secondary bg-opacity-30 p-8 rounded-lg border border-gray-700">
                <div className="text-accent-yellow text-5xl font-bold mb-6">02</div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-wide">RETOS REALES DE LA INDUSTRIA</h3>
                <p className="text-gray-300 uppercase leading-relaxed text-sm">
                  Desafiamos, creamos y aprendemos con proyectos que reflejan el dinamismo y las demandas del mundo laboral actual, preparándote para enfrentar situaciones reales en el campo profesional.
                </p>
              </div>

              {/* Tarjeta 3: A tu ritmo */}
              <div className="bg-dark-secondary bg-opacity-30 p-8 rounded-lg border border-gray-700">
                <div className="text-accent-green text-5xl font-bold mb-6">03</div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-wide">A TU RITMO</h3>
                <p className="text-gray-300 uppercase leading-relaxed text-sm">
                  En Nodo puedes adaptar tu formación a tu estilo de vida y aprender a desaprender sin importar si estudias, trabajas o tienes mucho tiempo libre, con tiempos de estudio intensivo o semi-intensivo.
                </p>
              </div>
            </div>

            {/* Sección de módulos */}
            <div className="mt-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-12">
                DESARROLLO DE <span className="text-accent-yellow">4 MÓDULOS COMPLETOS</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                {/* Modalidad intensiva */}
                <div className="bg-dark-secondary bg-opacity-30 p-8 rounded-lg border border-gray-700 relative">
                  <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-accent-yellow opacity-20"></div>
                  <h3 className="text-3xl font-bold text-white uppercase mb-6">MODALIDAD INTENSIVA</h3>
                  <ul className="text-gray-300 uppercase text-left space-y-4">
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Dedicación de tiempo por módulo: 3 meses</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Dedicación total: 1 año</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Opción de empleabilidad: módulo 1 – Junior Plus</span>
                    </li>
                  </ul>
                </div>

                {/* Modalidad semi intensiva */}
                <div className="bg-dark-secondary bg-opacity-30 p-8 rounded-lg border border-gray-700 relative">
                  <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-primary-blue opacity-20"></div>
                  <h3 className="text-3xl font-bold text-white uppercase mb-6">MODALIDAD SEMI INTENSIVA</h3>
                  <ul className="text-gray-300 uppercase text-left space-y-4">
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Dedicación de tiempo por módulo: 4.5 meses</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Dedicación total: 1 año y 6 meses</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Opción de empleabilidad: módulo 1 – Junior Plus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Lo que aprendo en nodo" */}
        <section className="py-20 relative overflow-hidden bg-gray-100">

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl ml-auto mr-4 md:mr-12">
              <div className="flex flex-col items-start space-y-8">
                {/* Título con elementos destacados */}
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-6xl font-bold text-dark">
                    Lo que <span className="text-primary-blue">aprendo y</span>
                  </h2>
                  <h2 className="text-5xl md:text-6xl font-bold text-dark">
                    encuentro <span className="text-primary-blue">en nodo</span>
                  </h2>
                  <div className="w-32 h-1 bg-accent-green mt-4"></div>
                </div>

                {/* Contenido descriptivo */}
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Nodo es mucho más que un espacio de aprendizaje: es una comunidad donde encontrarás el apoyo
                    y los recursos que necesitas para crecer profesionalmente en el mundo digital.
                  </p>
                  <p className="mb-4">
                    Nuestros estudiantes no sólo adquieren conocimientos técnicos, sino que desarrollan
                    habilidades prácticas aplicables inmediatamente en el mercado laboral.
                  </p>
                </div>

                {/* Beneficios en forma de lista */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {[
                    "Mentorías personalizadas",
                    "Networking con profesionales",
                    "Proyectos reales",
                    "Bolsa de empleo",
                    "Comunidad activa",
                    "Eventos exclusivos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Imagen visible solo en móviles */}
                <div className="block md:hidden w-full mx-auto mt-6">
                  <img
                    src="https://es.nodoeafit.com/wp-content/uploads/2023/11/comunidad-nodo.png"
                    alt="Comunidad Nodo"
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </div>

                {/* Botón de acción */}
                <a
                  href="/codigoNodo"
                  className="inline-flex items-center justify-center bg-primary-blue hover:bg-primary-blue/80 text-white py-4 px-10 rounded-md text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg mt-4"
                >
                  ¡Únete a nuestra comunidad!
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Imagen de primer plano flotante - visible solo en escritorio */}
            <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 max-w-md">
              <div className="relative">
                <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-accent-yellow opacity-20 z-0"></div>
                <img
                  src="https://es.nodoeafit.com/wp-content/uploads/2023/11/comunidad-nodo.png"
                  alt="Comunidad Nodo"
                  className="w-full h-auto relative z-10"
                />
                <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-accent-green opacity-20 z-0"></div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos */}
          <div className="hidden md:block absolute right-10 top-10 w-32 h-32 rounded-full bg-primary-blue opacity-5"></div>
          <div className="hidden md:block absolute left-1/4 bottom-10 w-40 h-40 rounded-full bg-accent-green opacity-5"></div>
        </section>
      </div>
      <Footer />
    </>
  );
}