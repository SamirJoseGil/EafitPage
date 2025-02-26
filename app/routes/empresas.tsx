import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export default function Empresas() {
    return (
        <>
            <NavBar />
            <div className="w-screen min-h-screen">

                {/* Sección para nodo compañías */}
                <section className="bg-primary-blue relative overflow-hidden py-24">
                    {/* Efecto de puntos en el fondo */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.15) 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-dark opacity-5"></div>
                    <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-accent-yellow opacity-5"></div>

                    <div className="container mx-auto px-4 py-16 relative z-10">
                        <div className="flex flex-col items-center">
                            <h2 className="text-6xl md:text-7xl font-bold text-accent-yellow mb-8">NODO</h2>
                            <div className="text-white text-center max-w-3xl">
                                <h2 className="text-3xl font-semibold mb-6">
                                    ES EL NOMBRE DE LA RESOLUCIÓN DE PROBLEMAS
                                </h2>
                                <div className="inline-block bg-accent-green px-6 py-3 transform rotate-1 shadow-lg">
                                    <h2 className="text-2xl md:text-3xl font-bold text-dark transform -rotate-1">
                                        REALES PARA TU COMPAÑÍA
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Servicios */}
                <section className="bg-white w-full py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
                            {/* Columna izquierda - Tipos de servicios */}
                            <div className="w-full md:w-1/3 bg-gradient-to-br from-primary-blue to-primary-blue/80 text-dark">
                                <div className="p-10">
                                    <h2 className="text-4xl font-bold relative mb-8">
                                        SKILLING
                                        <span className="block w-12 h-1 bg-accent-yellow mt-2"></span>
                                    </h2>
                                    <div className="border-t border-white/20 my-6"></div>
                                    <h2 className="text-4xl font-bold relative mb-8">
                                        RESKILLING
                                        <span className="block w-12 h-1 bg-accent-yellow mt-2"></span>
                                    </h2>
                                    <div className="border-t border-white/20 my-6"></div>
                                    <h2 className="text-4xl font-bold relative mb-8">
                                        UPSKILLING
                                        <span className="block w-12 h-1 bg-accent-yellow mt-2"></span>
                                    </h2>
                                </div>
                            </div>

                            {/* Columna derecha - Descripciones */}
                            <div className="w-full md:w-2/3 bg-gray-50">
                                <div className="p-10">
                                    <div className="max-w-lg space-y-10">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                <svg className="w-4 h-4 text-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-semibold text-dark">
                                                Formamos en tecnologías y en áreas vitales para el empleo del futuro.
                                            </h2>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                <svg className="w-4 h-4 text-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-semibold text-dark">
                                                Creamos rutas de formación que permiten un giro profesional y laboral.
                                            </h2>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-accent-yellow flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                <svg className="w-4 h-4 text-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-semibold text-dark">
                                                Fortalecemos y acompañamos la formación de equipos de trabajo ya consolidados.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección "Creemos un proyecto" */}
                <section className="bg-dark w-full py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">
                            {/* Columna izquierda - Ahora con fondo más oscuro */}
                            <div className="w-full md:w-2/3 bg-gray-900 p-10">
                                <div className="max-w-lg uppercase">
                                    <span className="text-2xl font-medium text-gray-300 block mb-2">creemos</span>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center text-white">
                                        un <span className="text-accent-yellow ml-3">proyecto</span>
                                    </h2>
                                    <h3 className="text-2xl font-medium text-gray-300 leading-relaxed">
                                        ¡Es el momento de salir de la caja y crear juntos el futuro!
                                    </h3>

                                    <div className="mt-10">
                                        <a href="#contacto" className="inline-flex items-center bg-accent-yellow hover:bg-accent-yellow/90 text-dark py-3 px-6 rounded-md text-lg font-medium transition-all duration-300 hover:translate-x-2">
                                            Hablemos
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Columna derecha - Con fondo más intenso */}
                            <div className="w-full md:w-1/3 bg-primary-blue relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>
                                <div className="p-10 h-full flex items-center justify-center">
                                    <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección "Hagamos una alianza" */}
                <section className="bg-white w-full">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row">
                            {/* Columna izquierda - Imagen */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="https://es.nodoeafit.com/wp-content/uploads/2023/11/alianzanodo.jpg"
                                    alt="Alianza Nodo"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Columna derecha - Contenido */}
                            <div className="w-full md:w-1/2 bg-gray-100 p-8">
                                <div className="p-6">
                                    <div className="max-w-lg uppercase">
                                        <h2 className="text-3xl font-bold text-gray-700">HAGAMOS</h2>
                                        <h2 className="text-4xl font-bold mb-6">
                                            una<span className="text-yellow-500"> ALIANZA</span>
                                        </h2>
                                        <p className="text-gray-700 mb-6">
                                            En NODO potenciamos nuestro ecosistema de relacionamiento con empresas
                                            que creen y crean para el futuro.
                                        </p>
                                        <h2 className="text-xl font-bold bg-accent-green p-2">
                                            Hablemos para cambiar el mundo
                                        </h2>
                                    </div>
                                    <div className="hidden md:block">
                                        {/* Content hidden on mobile */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección empresas visionarias con carrusel */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        {/* Títulos con estilo destacado */}
                        <div className="relative mb-16 z-20 text-center">
                            <h2 className="text-6xl font-bold text-dark mb-2">EMPRESAS</h2>
                            <h2 className="text-5xl font-bold mb-4 bg-dark text-white px-8 py-3 inline-block shadow-xl">
                                VISIONARIAS <span className="text-accent-yellow">DEL FUTURO</span>
                            </h2>
                            <div className="w-20 h-1 bg-accent-green mt-4 mx-auto"></div>

                            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                                Empresas que ya hacen parte de la revolución <span className="font-bold underline decoration-accent-yellow decoration-4">nodo</span>
                            </p>
                        </div>

                        {/* Contenedor del carrusel */}
                        <div className="w-full relative mt-12 px-4">
                            {/* Indicador visual de desplazamiento */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 bg-gradient-to-r from-white to-transparent h-full z-10"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 bg-gradient-to-l from-white to-transparent h-full z-10"></div>

                            {/* Carrusel con animación */}
                            <div className="overflow-hidden">
                                <div className="flex space-x-12 py-8 animate-marquee">
                                    {/* Grupo 1 de logos */}
                                    <div className="flex space-x-12 mx-4">
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/cadena.jpg" alt="Cadena" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/complementos.jpg" alt="Complementos" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/journal.jpg" alt="Journal" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/longevo.jpg" alt="Longevo" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/m.jpg" alt="M" />
                                    </div>

                                    {/* Grupo 2 de logos */}
                                    <div className="flex space-x-12 mx-4">
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/postobon.jpg" alt="Postobón" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/pragma.jpg" alt="Pragma" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/prami.jpg" alt="Prami" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/savant.jpg" alt="Savant" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/seguros-boliar.jpg" alt="Seguros Bolívar" />
                                    </div>

                                    {/* Repetir el primer grupo para crear efecto continuo */}
                                    <div className="flex space-x-12 mx-4">
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/cadena.jpg" alt="Cadena" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/complementos.jpg" alt="Complementos" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/journal.jpg" alt="Journal" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/longevo.jpg" alt="Longevo" />
                                        <img className="h-20 object-contain shadow-sm hover:shadow-md transition-shadow" src="https://es.nodoeafit.com/wp-content/uploads/2023/11/m.jpg" alt="M" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-blue opacity-5"></div>
                    <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-accent-yellow opacity-5"></div>
                </section>

                {/* Sección Qué buscas y Hablemos para cambiar el mundo */}
                <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-blue opacity-5"></div>
                    <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-accent-yellow opacity-5"></div>
                    <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-accent-green opacity-10"></div>

                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16 bg-dark p-4">
                            <h2 className="text-5xl font-bold text-white my-4 inline-block relative">
                                ¿QUÉ BUSCAS?
                                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-yellow"></span>
                            </h2>
                            <p className="text-xl text-white max-w-xl mx-auto my-4">
                                En NODO conectamos tus necesidades con soluciones innovadoras
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-8">
                            {/* Opción 1 - Card con hover effect */}
                            <div className="w-full md:w-1/2 bg-white rounded-xl border border-slate-400 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                                <div className="p-8 flex flex-col h-full">
                                    <div className="bg-primary-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark mb-4">Talento para <span className="text-accent-yellow">mi equipo interno</span></h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        Encontramos y formamos el talento ideal para impulsar el crecimiento de tu organización. Perfiles técnicos y creativos con las habilidades del futuro.
                                    </p>
                                    <div className="flex justify-end">
                                        <button className="flex items-center text-primary-blue font-semibold group-hover:text-accent-yellow transition-colors">
                                            Conocer más
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Opción 2 - Card con hover effect */}
                            <div className="w-full md:w-1/2 bg-white rounded-xl border border-slate-400 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                                <div className="p-8 flex flex-col h-full">
                                    <div className="bg-accent-yellow/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark mb-4">Crear un proyecto <span className="text-accent-yellow">a medida</span></h3>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        Diseñamos y desarrollamos soluciones personalizadas para los desafíos específicos de tu empresa. Innovación y tecnología al servicio de tu crecimiento.
                                    </p>
                                    <div className="flex justify-end">
                                        <button className="flex items-center text-primary-blue font-semibold group-hover:text-accent-yellow transition-colors">
                                            Conocer más
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sección CTA - Hablemos para cambiar el mundo */}
                        <div className="mt-16">
                            <div className="bg-dark rounded-2xl border border-slate-400 overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    {/* Contenido izquierda */}
                                    <div className="w-full md:w-2/3 p-10 md:p-12">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                            Hablemos para <span className="text-accent-yellow">cambiar el mundo</span>
                                        </h2>
                                        <p className="text-gray-100 text-lg mb-8">
                                            En NODO potenciamos nuestro ecosistema de relacionamiento con empresas
                                            que creen y crean para el futuro. ¿Estás listo para formar parte del cambio?
                                        </p>
                                        <div className="flex space-x-4">
                                            <a href="#contacto" className="inline-flex items-center bg-accent-yellow hover:bg-accent-yellow/90 text-dark py-3 px-8 rounded-lg text-lg font-medium transition-all duration-300 hover:translate-x-1">
                                                Comenzar ahora
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </a>
                                            <a href="#info" className="inline-flex items-center bg-transparent border border-white text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300">
                                                Saber más
                                            </a>
                                        </div>
                                    </div>

                                    {/* Imagen/Gráfico derecha */}
                                    <div className="w-full md:w-1/3 bg-gradient-to-br from-primary-blue to-primary-blue/80 relative overflow-hidden">
                                        {/* Patrón de fondo con puntos */}
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
                                            backgroundSize: '20px 20px'
                                        }}></div>

                                        {/* Elemento gráfico */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative h-40 w-40">
                                                <div className="absolute inset-0 rounded-full border-4 border-accent-yellow/30 animate-ping-slow"></div>
                                                <div className="absolute inset-2 rounded-full border-4 border-accent-yellow/50"></div>
                                                <div className="absolute inset-4 rounded-full border-4 border-accent-yellow/70"></div>
                                                <div className="absolute inset-6 rounded-full border-4 border-accent-yellow"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <svg className="w-16 h-16 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}