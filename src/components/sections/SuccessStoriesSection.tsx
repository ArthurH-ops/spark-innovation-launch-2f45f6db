import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const SuccessStoriesSection: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <section id="success-stories" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translate('success.title')}</h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
          <p className="mt-6 text-lg text-s28-gray-700 max-w-3xl mx-auto">
            {translate('success.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Success Story 1 */}
          <div className="bg-s28-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="h-64 bg-gradient-to-br from-s28 to-s28/50 flex items-center justify-center text-white">
              <div className="p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.42 7.05c.52-.3.58-1.04.11-1.41l-4.02-4.02c-.37-.37-1.1-.31-1.41.11l-4.1 7.1M6 7l1.5 2.5M13 7l-1.5 2.5M3 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2ZM17 6h.01M6 16l2 3M11 16l-2 3M15.7 14.5c.86.5 1.92.5 2.78 0 .86-.49 1.39-1.4 1.4-2.39 0-.99-.53-1.9-1.39-2.39-.86-.49-1.92-.49-2.78 0-.86.49-1.39 1.4-1.39 2.39-.01.99.52 1.9 1.38 2.39Z"></path>
                </svg>
                <h3 className="text-xl font-bold">{translate('success.story1.title')}</h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">{translate('success.story1.company')}</h4>
              <p className="text-s28-gray-700 mb-4">
                {translate('success.story1.description')}
              </p>
              <p className="text-s28-gray-700 mb-4">
                <strong>Result:</strong> {translate('success.story1.result')}
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-s28-gray-600">
                {translate('success.story1.metrics').split('|').map((item, index) => (
                  <span key={index} className="mb-1 md:mb-0">{item.trim()}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-s28-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="h-64 bg-gradient-to-br from-s28 to-s28/50 flex items-center justify-center text-white">
              <div className="p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5c.5-2.5 4.5-2.5 5 0M17.5 5h-11M14 17v-4"></path>
                  <circle cx="6.5" cy="11.5" r="2.5"></circle>
                  <circle cx="17.5" cy="11.5" r="2.5"></circle>
                  <path d="M20 22v-7.5a2 2 0 0 0-2-2h-1M4 22v-7.5a2 2 0 0 1 2-2h1"></path>
                  <path d="M12 22v-3a2 2 0 0 0-2-2h-1v-2.5"></path>
                </svg>
                <h3 className="text-xl font-bold">{translate('success.story2.title')}</h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">{translate('success.story2.company')}</h4>
              <p className="text-s28-gray-700 mb-4">
                {translate('success.story2.description')}
              </p>
              <p className="text-s28-gray-700 mb-4">
                <strong>Result:</strong> {translate('success.story2.result')}
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-s28-gray-600">
                {translate('success.story2.metrics').split('|').map((item, index) => (
                  <span key={index} className="mb-1 md:mb-0">{item.trim()}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
            <span>{translate('success.start_your_success')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;