
import React from 'react';
import TypewriterText from '../TypewriterText';
import PointCloudBackground from '../PointCloudBackground';

const HeroSection: React.FC = () => {
  // Array of rotating phrases including the leading phrase "S28 Forge" in the typewriter text
  const rotatingTexts = [
    "S28 Forge: unleashing your research’s potential",
    "S28 Forge: transforming discoveries into ventures",
    "S28 Forge: bridging science and business",
    "S28 Forge: accelerating innovation to market",
    "S28 Forge: commercializing academic excellence"
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-s28-black">
      <PointCloudBackground />
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          <div className="flex justify-center mx-auto">
            <div className="h-20 lg:h-24 flex items-center justify-center">
              <TypewriterText
                texts={rotatingTexts}
                delay={500}
                className="text-center"
                pauseDuration={1500}
              />
            </div>
          </div>
        </h1>

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
    </section>
  );
};

export default HeroSection;
