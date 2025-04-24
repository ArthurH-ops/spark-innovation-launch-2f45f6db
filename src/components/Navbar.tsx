import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = isScrolled ? 'text-s28-white' : 'text-s28-white';

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-s28-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className={`${textColorClass} text-2xl font-semibold transition-all duration-300 hover:text-s28 bg-transparent border-none cursor-pointer`}
        >
          <span>s28 Forge</span>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
            aria-label="Jump to Top"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Get in Touch
          </button>
        </nav>

        <button
          className={`md:hidden ${textColorClass} hover:text-s28 transition-all duration-300 transform hover:scale-110`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={isMobileMenuOpen ? "md:hidden absolute top-full left-0 w-full bg-s28-black/95 backdrop-blur-md py-6 shadow-lg transition-all duration-300" : "hidden"}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('philosophy')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-center hover-scale animate-pulse-subtle"
            type="button"
          >
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
