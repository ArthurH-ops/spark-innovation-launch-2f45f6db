import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const S28ExplainedSection: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-s28-white via-slate-50 to-s28-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-s28 flex items-center justify-center text-white font-bold text-xl mr-4">
                S28
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{translate('s28explained.title')}</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-s28-gray-700">
                {translate('s28explained.main_text')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 border-l-4 border-s28 bg-gray-50">
                  <h3 className="font-semibold mb-2">Silicon (Si)</h3>
                  <p className="text-s28-gray-600">Element 28 on the periodic table, the foundation of semiconductors and the modern digital revolution.</p>
                </div>
                
                <div className="p-4 border-l-4 border-s28 bg-gray-50">
                  <h3 className="font-semibold mb-2">Structure</h3>
                  <p className="text-s28-gray-600">Like silicon's crystalline structure, we provide the framework that turns raw potential into structured success.</p>
                </div>
                
                <div className="p-4 border-l-4 border-s28 bg-gray-50">
                  <h3 className="font-semibold mb-2">Forge</h3>
                  <p className="text-s28-gray-600">A place where things are crafted with skill and transformed through heat and pressure—just like we transform research through expertise and market forces.</p>
                </div>
              </div>
              
              <p className="text-lg text-s28-gray-700">
                "Forge" reflects our hands-on approach to company building. We don't just advise — we actively shape, strengthen, and craft ventures alongside our researcher partners. Through our signature equity-for-consulting model, we're personally invested in every venture's success.
              </p>
              
              <div className="flex justify-center mt-8">
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
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>{translate('s28explained.partner')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S28ExplainedSection;