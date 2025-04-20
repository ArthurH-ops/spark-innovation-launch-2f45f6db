
import React from 'react';
import TypewriterText from '../TypewriterText';
import PointCloudBackground from '../PointCloudBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(109.6deg,_rgba(223,234,247,1)_11.2%,_rgba(244,248,252,1)_91.1%)]">
      <PointCloudBackground />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-s28-black mb-6">
          <div className="max-w-full mx-auto">
            <TypewriterText 
              text="unleashing your research's potential" 
              delay={500} 
              className="text-center" 
            />
          </div>
        </h1>
        
        <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
          <a 
            href="/philosophy" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
