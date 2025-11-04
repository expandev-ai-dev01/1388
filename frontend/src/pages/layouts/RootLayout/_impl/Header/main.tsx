import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

/**
 * @component Header
 * @summary Application header with navigation menu
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif font-bold text-primary-700">
            Restaurante Italiano
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              Sobre
            </a>
            <a href="#menu" className="text-gray-700 hover:text-primary-600 transition-colors">
              Cardápio
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-primary-600 transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <nav
          className={clsx(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#menu"
              className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
