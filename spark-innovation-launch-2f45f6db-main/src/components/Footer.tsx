import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-s28-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-s28-white text-sm">
              &copy; {new Date().getFullYear()} S28 Forge
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('philosophy')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-s28-gray-300 hover:text-s28 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
