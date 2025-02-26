import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export default function CodigoNodo() {
    return (
        <>
            <NavBar />
            <div className="max-w-screen overflow-hidden">

                {/* Sección Bienvenido */}
                <section className="relative py-24 bg-dark overflow-hidden">
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary-blue opacity-5"></div>
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-accent-yellow opacity-5"></div>
                    <div className="absolute top-1/3 left-1/3 w-10 h-10 rounded-full bg-accent-green opacity-30"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-accent-yellow opacity-20"></div>
                    
                    {/* Líneas decorativas */}
                    <div className="absolute top-10 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute bottom-20 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-16 space-y-8">
                                {/* Título principal con animación y estilizado */}
                                <div className="space-y-3">
                                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
                                        Bienvenido a una <span className="text-white font-normal block md:inline">comunidad</span>
                                    </h1>
                                    
                                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                        <span className="font-normal">donde cada noder es un</span> <br className="hidden md:block" />
                                        <span className="text-accent-yellow inline-block relative">
                                            código único
                                            <span className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-accent-yellow opacity-20"></span>
                                        </span>
                                    </h2>
                                </div>

                                <div className="w-20 h-1 bg-accent-green"></div>
                                
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    para la <span className="text-primary-blue">transformación<span className="text-white">.</span></span>
                                </h2>
                            </div>

                            {/* Contenido adicional o CTA */}
                            <div className="flex justify-center md:justify-end">
                                <a 
                                    href="#que-pasa" 
                                    className="inline-flex items-center text-white hover:text-accent-yellow transition-colors duration-300"
                                >
                                    <span className="mr-2">Descubre más</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seccion que pasa en 3 meses */}
                <section id="que-pasa" className="py-20 bg-white relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-accent-yellow opacity-10"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-blue opacity-10"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Columna izquierda */}
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">¿Qué pasa en <span className="text-primary-blue">tres meses</span> en nodo?</h2>
                                        <div className="w-16 h-1 bg-accent-yellow mb-6"></div>
                                        <p className="text-xl text-gray-700">Nuestros noders te lo contarán.</p>
                                    </div>
                                    
                                    <div className="relative pl-6 border-l-2 border-accent-green py-4 mt-12">
                                        <h3 className="text-3xl font-bold text-dark mb-2">Tu código,</h3>
                                        <h3 className="text-3xl font-bold text-dark mb-2">tu viaje,</h3>
                                        <h3 className="text-3xl font-bold text-dark">tu éxito.</h3>
                                    </div>
                                </div>
                                
                                {/* Columna derecha - Testimonios/Imágenes */}
                                <div className="relative">
                                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent-green opacity-20"></div>
                                    
                                    {/* Contenedor para imágenes o testimonios */}
                                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                                N
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold text-dark">Noder destacado</h4>
                                                <p className="text-sm text-gray-600">Desarrollador Full Stack</p>
                                            </div>
                                        </div>
                                        
                                        <blockquote className="text-gray-700 italic mb-4">
                                            "En solo tres meses, pasé de tener conocimientos básicos a desarrollar mis primeras aplicaciones web completas. La metodología práctica y el apoyo constante marcaron la diferencia."
                                        </blockquote>
                                        
                                        {/* Progreso visual */}
                                        <div className="mt-8">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-medium">Progreso en 3 meses</span>
                                                <span className="text-accent-yellow font-bold">85%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-accent-yellow h-2 rounded-full" style={{ width: "85%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seccion Conviertete en noder */}
                <section className="py-16 bg-accent-yellow relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-primary-blue/50 via-dark/20 to-accent-green/50"></div>
                    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-dark opacity-5"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-dark opacity-5"></div>
                    
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                            ¿Listo para ser parte del <span className="text-primary-blue">código</span>?
                        </h2>
                        
                        <p className="text-xl text-dark max-w-2xl mx-auto mb-12">
                            Únete a una comunidad en crecimiento y desarrolla habilidades de programación que te abrirán las puertas del futuro digital.
                        </p>
                        
                        <a
                            href="/codigoNodo"
                            className="inline-flex items-center justify-center bg-dark hover:bg-dark/80 text-white py-4 px-10 rounded-md text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg uppercase"
                        >
                            Conviértete en noder
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
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
            </div>
            <Footer />
        </>
    );
}