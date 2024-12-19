import React from 'react';
import NavButton from './NavButton';

const Navbar = ({ scrolled, activeSection, scrollToSection }) => {
  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
    `}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-200"
        >
          Hoon Kang
        </button>

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
      </div>
    </nav>
  );
};

export default Navbar;