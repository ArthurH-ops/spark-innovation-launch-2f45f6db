
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
