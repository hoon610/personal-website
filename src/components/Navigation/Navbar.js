import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavButton from './NavButton';

const MobileMenu = ({ isOpen, onClose, scrollToSection, activeSection }) => {
  return (
    <div
      className={`
        fixed inset-0 bg-gray-900/95 backdrop-blur-sm transition-all duration-300 z-40
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div 
        className={`
          fixed inset-y-0 right-0 w-48 bg-gray-800 shadow-xl transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        onClick={e => e.stopPropagation()}
      >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 p-2"
        aria-label="Close menu"
      >
        <X size={24} />
      </button>
        <div className="flex flex-col space-y-4 p-4 pt-16">
          <NavButton 
            onClick={() => {
              scrollToSection('home');
              onClose();
            }}
            active={activeSection === 'home'}
            className="w-full text-left px-4 py-2"
          >
            Home
          </NavButton>
          <NavButton 
            onClick={() => {
              scrollToSection('portfolio');
              onClose();
            }}
            active={activeSection === 'portfolio'}
            className="w-full text-left px-4 py-2"
          >
            Portfolio
          </NavButton>
          <NavButton 
            onClick={() => {
              scrollToSection('experience');
              onClose();
            }}
            active={activeSection === 'experience'}
            className="w-full text-left px-4 py-2"
          >
            Experience
          </NavButton>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ scrolled, activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <nav className={`
      fixed top-0 w-full z-40 transition-all duration-300
      ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
    `}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-200"
          >
            Hoon Kang
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavButton 
              onClick={() => scrollToSection('home')}
              active={activeSection === 'home'}
            >
              Home
            </NavButton>
            <NavButton 
              onClick={() => scrollToSection('portfolio')}
              active={activeSection === 'portfolio'}
            >
              Portfolio
            </NavButton>
            <NavButton 
              onClick={() => scrollToSection('experience')}
              active={activeSection === 'experience'}
            >
              Experience
            </NavButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-gray-100 p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;