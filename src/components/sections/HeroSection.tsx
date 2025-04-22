
import React from 'react';
import PointCloudBackground from '../PointCloudBackground';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-s28-black">
      <PointCloudBackground />
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              unleashing your research's potential
            </h1>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
