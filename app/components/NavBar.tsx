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