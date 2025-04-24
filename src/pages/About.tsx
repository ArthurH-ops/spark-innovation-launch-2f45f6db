
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            {/* Team Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-10 text-center">Our Team</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
                      alt="Kariem El Saedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Kariem El Saedi</h3>
                  <p className="text-s28 mb-4">Co-founder & COO</p>
                  <p className="text-center text-s28-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img 
                      src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
                      alt="Arthur Handler"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Arthur Handler</h3>
                  <p className="text-s28 mb-4">Founder & CEO</p>
                  <p className="text-center text-s28-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Partnerships Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-10 text-center">Partnerships</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partner 1 - Aspekt */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                      alt="Aspekt Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-center text-s28-gray-700">
                    Supporting prototyping and technical validation of innovative research concepts.
                  </p>
                </div>
                
                {/* Partner 2 - Mazal */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/1b56a043-67eb-4ec1-90a5-188c15a51240.png"
                      alt="Mazal Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-center text-s28-gray-700">
                    Providing legal, financial, and market launch expertise for research commercialization.
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
