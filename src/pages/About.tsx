
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

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
                  <div className="w-48 h-48 bg-s28-gray-200 rounded-full mb-6 overflow-hidden flex items-center justify-center">
                    <span className="text-s28-gray-400 text-sm">Team Member Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
                  <p className="text-s28 mb-4">Founder & CEO</p>
                  <p className="text-center text-s28-gray-600">
                    With 15+ years of experience bridging science and business, Jane leads our mission to transform research into impact.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg">
                  <div className="w-48 h-48 bg-s28-gray-200 rounded-full mb-6 overflow-hidden flex items-center justify-center">
                    <span className="text-s28-gray-400 text-sm">Team Member Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">John Smith</h3>
                  <p className="text-s28 mb-4">Chief Innovation Officer</p>
                  <p className="text-center text-s28-gray-600">
                    John brings deep technical expertise and a keen eye for market opportunities to our venture building process.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Partnerships Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-10 text-center">Partnerships</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partner 1 */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <div className="w-32 h-12 bg-s28-gray-200 flex items-center justify-center">
                      <span className="text-s28-gray-400 text-sm">Partner Logo</span>
                    </div>
                  </div>
                  <p className="text-center text-s28-gray-700">
                    Supporting prototyping and technical validation of innovative research concepts.
                  </p>
                </div>
                
                {/* Partner 2 */}
                <div className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl">
                  <div className="h-16 mb-6 flex items-center justify-center">
                    <div className="w-32 h-12 bg-s28-gray-200 flex items-center justify-center">
                      <span className="text-s28-gray-400 text-sm">Partner Logo</span>
                    </div>
                  </div>
                  <p className="text-center text-s28-gray-700">
                    Providing legal, financial, and market launch expertise for research commercialization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="/contact" 
                className="btn-primary animate-pulse-glow inline-flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default About;
