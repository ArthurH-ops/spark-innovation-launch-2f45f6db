import React from 'react';
import PointCloudBackground from '../PointCloudBackground';
import TypewriterText from '../TypewriterText';

const HeroSection: React.FC = () => {
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-s28-black">
      <PointCloudBackground />
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              Unleashing your research's potential
            </h1>
            <TypewriterText
              texts={[
                "Unleashing your research's potential",
                'Igniting curiosity with innovation',
                'Driving research to new horizons',
                'Transforming ideas into reality',
                'Bridging science and society',
                'Accelerating scientific impact'
              ]}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-s28 mt-2"
              typingSpeed={70}
              pauseDuration={3000}
              loop={true}
            />
          </div>

          <p className="text-s28-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up text-lg" 
             style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            We partner with pioneering researchers and visionaries to turn breakthrough discoveries into real-world solutions. Through our unique equity-for-consulting model and hands-on support, we handle the business, legal, and fundraising challenges—so you can focus on what you do best: innovation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" 
               style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary inline-flex items-center space-x-2 animate-pulse-subtle"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Our Philosophy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
