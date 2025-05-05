import React from 'react';
import Section from '../Section';
import { useLanguage } from '@/context/LanguageContext';

const PhilosophySection: React.FC = () => {
  const { translate } = useLanguage();
  
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
    <Section id="philosophy" className="py-24 bg-gradient-to-br from-s28-black via-gray-900 to-s28-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {translate('philosophy.title')}
          </h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.what_we_stand_for')}</h3>
            <p className="text-s28-gray-200 text-justify">
              {translate('philosophy.what_we_stand_for_desc')}
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.who_we_serve')}</h3>
            <p className="text-s28-gray-200 text-justify">
              {translate('philosophy.who_we_serve_desc')}
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.what_we_achieve')}</h3>
            <p className="text-s28-gray-200 text-justify">
              {translate('philosophy.what_we_achieve_desc')}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>{translate('nav.get_in_touch')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default PhilosophySection;
