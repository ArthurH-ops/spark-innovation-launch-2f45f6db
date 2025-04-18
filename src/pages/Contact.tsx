
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
              <p className="text-s28-gray-600 mt-6 max-w-xl mx-auto">
                Have a research breakthrough that deserves to reach the market? We'd love to hear from you.
              </p>
            </div>
            
            <ContactForm />
            
            <div className="mt-16 text-center">
              <p className="text-s28-gray-600 mb-6">Prefer to schedule a call directly?</p>
              <a 
                href="https://calendly.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-pulse-glow inline-flex items-center space-x-2"
              >
                <span>Book a Meeting</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
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

export default Contact;
