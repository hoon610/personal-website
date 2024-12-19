import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import ProjectItem from "./components/ProjectItem";
import { ProjectList } from "./helpers/ProjectList";
import SkillCard from "./components/SkillCard";
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'experience'];
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

      {/* Navbar */}
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
              onClick={() => scrollToSection('porfolio')}
              active={activeSection === 'porfolio'}
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

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Hi, I'm Hoon</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A myrmecologist turned software engineer with a passion for problem-solving
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <SocialLink href="https://www.linkedin.com/in/hoon-kang-az" icon={<LinkedInIcon />} />
              <SocialLink href="https://drive.google.com/file/d/1yHsLVhMSge7rrfBlquR45-_xgU5otqSc/view?usp=sharing" icon={<ArticleIcon />} />
              <SocialLink href="mailto:bhoonkang@gmail.com" icon={<EmailIcon />} />
              <SocialLink href="https://github.com/hoon610" icon={<GitHubIcon />} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <SkillCard 
                title="Languages"
                skills={["TypeScript/JavaScript", "Python", "R", "HTML/CSS", "C#"]}
              />
              <SkillCard 
                title="Tools and Technologies"
                skills={["Git", "React", "Node.js", "GCP", "AWS", "Firebase", "Docker"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="porfolio" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectList.map((project, idx) => (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              github={project.github}
              link={project.link}
              documentation={project.documentation}
              summary={project.summary}  // Add this line
            />
          ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <ExperienceSection />
        </div>
      </section>
      <Footer />

    </div>
  );
}

function NavButton({ onClick, active, children }) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'text-blue-400' : 'text-gray-300'
      } hover:text-blue-400 transition-colors duration-200 font-medium`}
    >
      {children}
    </button>
  );
}


function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
    >
      {icon}
    </a>
  );
}


export default App;
