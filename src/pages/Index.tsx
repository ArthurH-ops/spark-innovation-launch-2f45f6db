
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferSection from '@/components/sections/OfferSection';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OfferSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
