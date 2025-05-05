import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const PhilosophyContent: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.what_we_stand_for')}</h3>
          <p className="text-s28-gray-700 text-justify">
            {translate('philosophy.what_we_stand_for_desc')}
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.who_we_serve')}</h3>
          <p className="text-s28-gray-700 text-justify">
            {translate('philosophy.who_we_serve_desc')}
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">{translate('philosophy.what_we_achieve')}</h3>
          <p className="text-s28-gray-700 text-justify">
            {translate('philosophy.what_we_achieve_desc')}
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <button 
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) {
              window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>{translate('philosophy.start_journey')}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhilosophyContent;
