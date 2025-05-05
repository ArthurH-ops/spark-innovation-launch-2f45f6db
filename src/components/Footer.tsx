import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { currentLanguage, setLanguage, translate } = useLanguage();
  
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
              {translate('nav.philosophy')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              {translate('nav.about_us')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              {translate('nav.contact')}
            </button>
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer"
            >
              {translate('nav.home')}
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
        
        <div className="mt-8 pt-6 border-t border-s28-gray-600/30 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <Link to="/imprint" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
            {translate('footer.legal')}
          </Link>
          <Link to="/privacy" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
            {translate('footer.privacy')}
          </Link>
          <button 
            className="text-s28-gray-300 hover:text-s28 text-sm transition-colors bg-transparent border-none cursor-pointer" 
            onClick={() => {
              setLanguage(currentLanguage === 'de' ? 'en' : 'de');
            }}
          >
            <span className="flex items-center gap-1">
              <span>🌐</span>
              <span>{translate('footer.language')}</span>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
