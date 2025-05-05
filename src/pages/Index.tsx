
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferSection from '@/components/sections/OfferSection';
import PhilosophySection from '@/components/sections/PhilosophySection';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="relative">
          <HeroSection />
        </section>
        <section id="offer">
          <OfferSection />
        </section>
        <section id="philosophy">
          <PhilosophySection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
