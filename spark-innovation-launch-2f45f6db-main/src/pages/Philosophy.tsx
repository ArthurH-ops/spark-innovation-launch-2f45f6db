
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhilosophyContent from '@/components/sections/PhilosophyContent';
import Section from '@/components/Section';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24">
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-s28-black">
                Our Philosophy
              </h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            <PhilosophyContent />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
