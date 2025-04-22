
import React from 'react';
import TypewriterText from '../TypewriterText';
import PointCloudBackground from '../PointCloudBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-s28-black">
      <PointCloudBackground />
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">S28 Forge:</h1>
            <div className="typewriter-container mx-auto">
              <TypewriterText
                texts={["unleashing your research's potential"]}
                typingSpeed={50}
                pauseDuration={2000}
                className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </div>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
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
      </div>
    </section>
  );
};

export default HeroSection;
