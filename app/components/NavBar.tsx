import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Función para verificar si una ruta está activa
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Función para generar clases de enlaces según estado activo
  const linkClasses = (path: string) => {
    const baseClasses = "py-4 px-2 font-medium transition-colors duration-200";
    return isActive(path)
      ? `${baseClasses} text-accent-green`
      : `${baseClasses} text-white hover:text-accent-green`;
  };

  const mobileLinkClasses = (path: string) => {
    const baseClasses = "block py-2 transition-colors duration-200";
    return isActive(path)
      ? `${baseClasses} text-accent-green`
      : `${baseClasses} text-white hover:text-accent-green`;
  };

  return (
    <>
      <header className="bg-primary-blue p-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            <img src="https://es.nodoeafit.com/wp-content/uploads/2024/05/noddso.png" alt="Nodo" className="w-48" />
          </Link>

          {/* Menú en desktop */}
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8">
              <Link to="/cursos" className={linkClasses('/cursos')}>Cursos</Link>
              <Link to="/codigoNodo" className={linkClasses('/codigoNodo')}>Código nodo</Link>
              <Link to="/enterate" className={linkClasses('/enterate')}>Entérate</Link>
              <Link to="/faq" className={linkClasses('/faq')}>FAQ</Link>
              <Link to="/Empresas" className={linkClasses('/Empresas')}>Empresas</Link>
              <a
                href="https://www.eafit.edu.co/Paginas/PQRSF.aspx"
                target="_blank"
                rel="noopener"
                className="py-4 px-2 font-medium text-white hover:text-accent-green transition-colors duration-200"
              >
                PQRS
              </a>
              {/* Assistant Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <Link
                  to="/asistente?mode=text"
                  className="p-2 rounded-full bg-primary-blue hover:bg-primary-blue/90 transition"
                  aria-label="Chat asistente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>

                <Link
                  to="/asistente?mode=voice"
                  className="p-2 rounded-full bg-accent-yellow hover:bg-accent-yellow/90 transition"
                  aria-label="Asistente de voz"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </Link>
              </div>
            </nav>

            {/* Botón para desplegar el menú en móvil */}
            <button
              className="md:hidden text-white ml-4 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menú en móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4 py-2 bg-dark rounded-md">
            <Link to="/cursos" className={mobileLinkClasses('/cursos')}>Cursos</Link>
            <Link to="/codigoNodo" className={mobileLinkClasses('/codigoNodo')}>Código nodo</Link>
            <Link to="/enterate" className={mobileLinkClasses('/enterate')}>Entérate</Link>
            <Link to="/faq" className={mobileLinkClasses('/faq')}>FAQ</Link>
            <Link to="/Empresas" className={mobileLinkClasses('/Empresas')}>Empresas</Link>
            <a
              href="https://www.eafit.edu.co/Paginas/PQRSF.aspx"
              target="_blank"
              rel="noopener"
              className="block py-2 text-white hover:text-accent-green transition-colors duration-200"
            >
              PQRS
            </a>
          </div>
        )}
      </header>
    </>
  );
}