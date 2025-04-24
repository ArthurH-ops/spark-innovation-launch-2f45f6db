import React from 'react';
import Section from '../Section';

const PhilosophySection: React.FC = () => {
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
            Our Philosophy
          </h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">Why We Exist</h3>
            <p className="text-s28-gray-200 text-justify">
              Innovation is the engine of progress. We exist to ensure that world-changing research doesn't stay locked in the lab, but finds its way into society—solving urgent problems, creating new industries, and building a better tomorrow. Our mission is to empower scientists and visionaries to realize the true impact of their discoveries.
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">Who We Help</h3>
            <p className="text-s28-gray-200 text-justify">
              We serve pioneering researchers, ambitious founders, and forward-thinking institutions ready to turn breakthrough ideas into thriving ventures. We also partner with investors and industry leaders eager to support and scale transformative technologies.
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-s28">How We Make a Difference</h3>
            <p className="text-s28-gray-200 text-justify">
              Our equity-for-consulting model aligns our success with yours. We take care of the business side—legal, fundraising, go-to-market, and operations—so innovators can focus on science. Together, we launch ventures that change lives, drive economic growth, and secure a prosperous future for all.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
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
