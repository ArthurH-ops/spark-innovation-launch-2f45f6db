
import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

const OfferSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Section id="offer" className="py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Offer
          </h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
          <p className="mt-6 text-lg text-s28-gray-700 max-w-3xl mx-auto">
            We transform academic research into market-ready innovations through equity partnerships and co-founding ventures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border border-s28-gray-200 transition-all duration-300 hover:shadow-xl hover:border-s28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="h-16 w-16 bg-s28/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-s28" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Venture Building</h3>
            <p className="text-s28-gray-700">
              We co-found and build spinoffs together with researchers. Through our equity-for-consulting model, we take on the business side while you focus on your research and technology.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Business model development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Go-to-market strategy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Team assembly and management</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg border border-s28-gray-200 transition-all duration-300 hover:shadow-xl hover:border-s28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="h-16 w-16 bg-s28/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-s28" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Funding & Investment</h3>
            <p className="text-s28-gray-700">
              We secure the capital needed to transform your research into a thriving business, connecting you with our network of investors and funding opportunities.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Grant application support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Investor network access</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-s28 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Equity structuring and valuation</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/philosophy" 
            className="btn-secondary inline-flex items-center space-x-2 mr-4"
          >
            <span>Learn Our Philosophy</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default OfferSection;
