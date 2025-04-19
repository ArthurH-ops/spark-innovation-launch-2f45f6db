
import React from 'react';
import Section from '../Section';

const PhilosophySection: React.FC = () => {
  return (
    <Section id="philosophy" className="py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Philosophy
          </h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-s28">What We Stand For</h3>
            <p className="text-s28-gray-700 text-justify">
              We believe that technology shapes our future—and that every discovery deserves a chance to make a real-world impact. By combining entrepreneurial spirit with scientific excellence, we champion sustainable prosperity for Europe.
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-s28">Who We Serve</h3>
            <p className="text-s28-gray-700 text-justify">
              Our partners are pioneering researchers, eager to bring their innovations to market. We also collaborate with investors and industry leaders seeking transformative technologies and meaningful growth opportunities.
            </p>
          </div>
          
          <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-s28">What We Achieve Together</h3>
            <p className="text-s28-gray-700 text-justify">
              Through our equity-for-consulting model and hands-on management support, we handle everything beyond the lab—legal, administrative and fundraising—so scientists can focus on innovation. Together, we launch ventures that tackle real problems, drive economic growth and secure a prosperous future for all.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PhilosophySection;

