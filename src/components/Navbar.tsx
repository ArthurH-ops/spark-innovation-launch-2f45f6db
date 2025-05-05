import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { translate, currentLanguage, setLanguage } = useLanguage();
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

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'de' ? 'en' : 'de');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-s28-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className={`${textColorClass} text-2xl font-semibold transition-all duration-300 hover:text-s28 bg-transparent border-none cursor-pointer mr-4`}
          >
            <span>s28 Forge</span>
          </button>
          <button
            onClick={toggleLanguage}
            className={`${textColorClass} hover:text-s28 transition-colors bg-s28-black/40 hover:bg-s28-black/60 rounded-full p-2 flex items-center justify-center`}
            aria-label="Switch language"
          >
            <Globe size={18} />
            <span className="ml-1 text-sm font-medium">{currentLanguage === 'en' ? 'DE' : 'EN'}</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
            aria-label="Jump to Top"
          >
            {translate('nav.home')}
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            {translate('nav.philosophy')}
          </button>
          <button 
            onClick={() => scrollToSection('success-stories')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            {translate('nav.success_stories')}
          </button>
          <button 
            onClick={() => scrollToSection('workflow')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            {translate('nav.how_we_work')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            {translate('nav.about_us')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${textColorClass} hover:text-s28 transition-colors underline-hover bg-transparent border-none cursor-pointer`}
          >
            {translate('nav.contact')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary animate-pulse-subtle"
          >
            {translate('nav.get_in_touch')}
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
            onClick={toggleLanguage}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 flex items-center gap-2"
            type="button"
          >
            <Globe size={18} />
            <span>{currentLanguage === 'en' ? 'Switch to German' : 'Zu Englisch wechseln'}</span>
          </button>
          <div className="border-t border-s28-gray-700/30 pt-4"></div>
          <button 
            onClick={() => scrollToSection('philosophy')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            {translate('nav.philosophy')}
          </button>
          <button 
            onClick={() => scrollToSection('success-stories')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            {translate('nav.success_stories')}
          </button>
          <button 
            onClick={() => scrollToSection('workflow')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            {translate('nav.how_we_work')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            {translate('nav.about_us')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-s28-white hover:text-s28 transition-all duration-300 py-2 transform hover:translate-x-2"
            type="button"
          >
            {translate('nav.contact')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-center hover-scale animate-pulse-subtle"
            type="button"
          >
            {translate('nav.get_in_touch')}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
