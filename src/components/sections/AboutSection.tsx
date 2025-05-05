import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
            <img 
              src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
              alt="Kariem El Saedi"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">Kariem El Saedi</h3>
          <p className="text-s28 mb-4">{translate('about.team_kariem_title')}</p>
          <p className="text-center text-s28-gray-600">
            {translate('about.team_kariem_desc')}
          </p>
        </div>
        
        {/* Team Member 2 */}
        <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
            <img 
              src="/lovable-uploads/99f79872-0640-4d7e-ba49-c9f3c82ab4ef.png"
              alt="Arthur Handler"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">Arthur Handler</h3>
          <p className="text-s28 mb-4">{translate('about.team_arthur_title')}</p>
          <p className="text-center text-s28-gray-600">
            {translate('about.team_arthur_desc')}
          </p>
        </div>
      </div>
      
      {/* Partnerships Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-10 text-center">{translate('about.partnerships')}</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Partner 1 - Aspekt */}
          <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="h-16 mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                alt="Aspekt Logo"
                className="max-h-12 object-contain"
              />
            </div>
            <p className="text-center text-s28-gray-700">
              {translate('about.partner_aspekt_desc')}
            </p>
          </div>
          
          {/* Partner 2 - Mazal */}
          <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="h-16 mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1b56a043-67eb-4ec1-90a5-188c15a51240.png"
                alt="Mazal Logo"
                className="max-h-12 object-contain"
              />
            </div>
            <p className="text-center text-s28-gray-700">
              {translate('about.partner_mazal_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
