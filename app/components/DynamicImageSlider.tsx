import React, { useState, useEffect, useCallback } from "react";

// Interfaz mejorada para datos de slides con más opciones
interface SlideData {
  id: number;
  backgroundImage: string;
  mainImage?: string;
  logoImage?: string;
  titleImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: "primary" | "accent" | "dark"; // Para diferentes estilos de botón
  textAlign?: "left" | "center" | "right";
  imagePosition?: "right" | "left"; // Para alternar la posición de las imágenes
  overlayOpacity?: number; // Control de opacidad del overlay
  textColor?: string; // Color de texto personalizado
  hasGradient?: boolean; // Si debe tener un degradado adicional
}

// Datos de slides mejorados con más información y estructura
const slidesData: SlideData[] = [
  {
    id: 1,
    backgroundImage: "https://es.nodoeafit.com/wp-content/uploads/2024/08/Fondo-web-Becas-fraternidad.jpg",
    mainImage: "https://es.nodoeafit.com/wp-content/uploads/2024/08/imagen-web-Becas-fraternidad.png",
    logoImage: "https://es.nodoeafit.com/wp-content/uploads/2024/08/logo-nodo-fraternidad.png",
    titleImage: "https://es.nodoeafit.com/wp-content/uploads/2024/08/Texto-1-.png",
    subtitle: "¡Impúlsate hacia el futuro digital!",
    description: "Obtén una beca completa para estudiar desarrollo de software en NODO EAFIT con nuestro programa de becas fraternidad.",
    buttonText: "Postúlate aquí",
    buttonLink: "https://es.nodoeafit.com/beca-futuro-digital-fraternidad/",
    buttonVariant: "primary",
    textAlign: "left",
    imagePosition: "right",
    overlayOpacity: 0.4,
    hasGradient: true
  },
  {
    id: 2,
    backgroundImage: "https://es.nodoeafit.com/wp-content/uploads/2023/11/cursosbanhme.jpg",
    titleImage: "https://es.nodoeafit.com/wp-content/uploads/2023/11/logo-nodo-azul.svg",
    title: "DESCUBRE NUESTROS CURSOS",
    subtitle: "Formación especializada en tecnologías digitales",
    description: "Aprende las habilidades más demandadas en el mercado con nuestros programas intensivos diseñados para convertirte en un profesional digital.",
    buttonText: "Explora nuestros cursos",
    buttonLink: "/cursos",
    buttonVariant: "accent",
    textAlign: "left",
    overlayOpacity: 0.6,
    hasGradient: true
  },
  {
    id: 3,
    backgroundImage: "https://es.nodoeafit.com/wp-content/uploads/2023/11/como-los-hacemos-nodo-1.jpg",
    logoImage: "https://es.nodoeafit.com/wp-content/uploads/2023/11/logo-nodo-mini.svg",
    titleImage: "https://es.nodoeafit.com/wp-content/uploads/2023/11/elementals.png",
    title: "FUNDAMENTALS",
    subtitle: "¡El código que te llevará al futuro!",
    description: "Comienza tu viaje en programación con nuestro curso gratuito Fundamentals. Aprende los conceptos básicos del desarrollo web en tan solo 4 semanas.",
    buttonText: "¡Inscríbete gratis!",
    buttonLink: "/fundamentals",
    buttonVariant: "dark",
    textAlign: "left",
    imagePosition: "right",
    overlayOpacity: 0.5
  }
];

// Props que puede recibir el componente (opcional)
interface DynamicImageSliderProps {
  customSlides?: SlideData[];
}

const DynamicImageSlider: React.FC<DynamicImageSliderProps> = ({ customSlides }) => {
  // Usar slides personalizados si se proporcionan, de lo contrario usar los predeterminados
  const slides = customSlides || slidesData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setDirection('next');
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

    // Desactivar la bandera de transición después de que termine la animación
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, slides.length]);

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setDirection('prev');
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );

    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, slides.length]);

  // Cambiar automáticamente de slide cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Navegar a un slide específico
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Función para obtener clases de botones según la variante
  const getButtonClasses = (variant: SlideData['buttonVariant'] = 'primary') => {
    const baseClasses = "inline-flex items-center justify-center py-4 px-8 rounded-md text-lg font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-1";

    switch (variant) {
      case 'accent':
        return `${baseClasses} bg-accent-yellow hover:bg-accent-yellow/90 text-dark`;
      case 'dark':
        return `${baseClasses} bg-dark hover:bg-dark/90 text-white hover:bg-opacity-90`;
      case 'primary':
      default:
        return `${baseClasses} bg-primary-blue hover:bg-primary-blue/90 text-white`;
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Contenedor principal */}
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          // Clases para las animaciones de entrada/salida
          const containerClasses = `absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`;

          // Construir las clases para el overlay según la configuración del slide
          const overlayClasses = `absolute inset-0 z-10 ${slide.hasGradient
              ? 'bg-gradient-to-r from-dark to-transparent'
              : `bg-dark opacity-${slide.overlayOpacity ? slide.overlayOpacity * 100 : 40}`
            }`;

          return (
            <div
              key={slide.id}
              className={containerClasses}
            >
              {/* Imagen de fondo con overlay */}
              <div className="absolute inset-0 z-0">
                <div className={overlayClasses}></div>
                <img
                  src={slide.backgroundImage}
                  alt={`Slide ${index + 1} background`}
                  className="w-full h-full object-cover animate-scale"
                  style={{
                    animation: isActive ? 'scale 8s ease-in-out infinite alternate' : 'none'
                  }}
                />
              </div>

              {/* Contenido del slide */}
              <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                <div className={`w-full flex flex-col md:flex-row items-center ${slide.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                  }`}>
                  {/* Contenido de texto */}
                  <div className={`w-full md:w-1/2 pt-16 md:pt-0 flex flex-col ${slide.textAlign === 'center' ? 'items-center text-center' :
                      slide.textAlign === 'right' ? 'items-end text-right' : 'items-start text-left'
                    } ${isActive ? 'animate-fade-in-up' : ''}`}>
                    {slide.logoImage && (
                      <div className="mb-4 transform transition-all duration-1000 delay-300">
                        <img
                          src={slide.logoImage}
                          alt="Logo"
                          className="h-12 md:h-16"
                        />
                      </div>
                    )}

                    {slide.titleImage && (
                      <div className="mb-6 max-w-md transform transition-all duration-1000 delay-500">
                        <img
                          src={slide.titleImage}
                          alt="Title"
                          className="w-full h-auto"
                        />
                      </div>
                    )}

                    {slide.title && (
                      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${slide.textColor || 'text-white'
                        } transform transition-all duration-1000 delay-700`}>
                        {slide.title}
                      </h2>
                    )}

                    {slide.subtitle && (
                      <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${slide.textColor || 'text-accent-yellow'
                        } transform transition-all duration-1000 delay-900`}>
                        {slide.subtitle}
                      </h3>
                    )}

                    {slide.description && (
                      <p className={`text-base md:text-lg mb-6 max-w-lg ${slide.textColor || 'text-white'
                        } opacity-80 transform transition-all duration-1000 delay-1100`}>
                        {slide.description}
                      </p>
                    )}

                    {/* Botón de acción */}
                    {slide.buttonText && (
                      <div className="mt-4 md:mt-8 transform transition-all duration-1000 delay-1300">
                        <a
                          href={slide.buttonLink || "#"}
                          className={getButtonClasses(slide.buttonVariant)}
                          target={slide.buttonLink?.startsWith('http') ? "_blank" : undefined}
                          rel={slide.buttonLink?.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {slide.buttonText}
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Imagen principal (si existe) */}
                  {slide.mainImage && (
                    <div className={`w-full md:w-1/2 flex justify-center items-center p-6 md:p-12 ${isActive ? 'animate-fade-in-right' : ''
                      }`}>
                      <img
                        src={slide.mainImage}
                        alt="Main content"
                        className="max-h-[60vh] w-auto object-contain transform transition-all duration-1000 delay-500 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicadores de posición */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1.5 h-3 rounded-full focus:outline-none transition-all duration-500 ${index === currentSlide
                ? 'bg-accent-yellow w-12'
                : 'bg-white bg-opacity-60 hover:bg-opacity-80 w-3'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default DynamicImageSlider;