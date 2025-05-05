
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{translate('about.title')}</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            {/* Team Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-10 text-center">{translate('about.team.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
                      alt="Arthur Handler"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Arthur Handler</h3>
                    <a 
                      href="https://www.linkedin.com/in/arthur-handler/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <p className="text-s28 mb-4">{translate('about.team.arthur.role')}</p>
                  <p className="text-center text-s28-gray-600">
                    {translate('about.team.arthur.description')}
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                      alt="Kariem El Saedi"
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Kariem El Saedi</h3>
                    <a 
                      href="https://www.linkedin.com/in/kariem-elsaedi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <p className="text-s28 mb-4">{translate('about.team.kariem.role')}</p>
                  <p className="text-center text-s28-gray-600">
                    {translate('about.team.kariem.description')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Partnerships Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-10 text-center">{translate('about.partnerships.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partner 1 - Aspekt */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/1b56a043-67eb-4ec1-90a5-188c15a51240.png"
                      alt="Aspekt Development Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Aspekt Development</h3>
                    <a 
                      href="https://www.linkedin.com/company/aspekt-development-gmbh/posts/?feedView=all" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <p className="text-center text-s28-gray-700">
                    {translate('about.partnerships.aspekt.description')}
                  </p>
                </div>
                
                {/* Partner 2 - Mazal */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/99f79872-0640-4d7e-ba49-c9f3c82ab4ef.png"
                      alt="Mazal Advisory Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Mazal Advisory</h3>
                    <a 
                      href="https://www.linkedin.com/in/markus-mazal-a47424150/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <p className="text-center text-s28-gray-700">
                    {translate('about.partnerships.mazal.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default About;
