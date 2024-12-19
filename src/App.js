import React, { useEffect, useState } from "react";
import Navbar from './components/Navigation/Navbar';
import HomeSection from './components/Sections/HomeSection';
import PortfolioSection from './components/Sections/PortfolioSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'portfolio', 'experience'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Navbar 
        scrolled={scrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <HomeSection />
      <PortfolioSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;