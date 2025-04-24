import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="mb-8 text-s28-gray-300">
            Ready to transform your research into impact? We're here to help you navigate the journey from lab to market.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="text-s28 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-s28-gray-300">+49 123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-s28 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-s28-gray-300">info@s28forge.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-s28 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-s28-gray-300">Berlin, Germany</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
          <form className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="input-field bg-transparent text-white border-s28-gray-600 focus:border-s28"
              />
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="input-field bg-transparent text-white border-s28-gray-600 focus:border-s28"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="input-field bg-transparent text-white border-s28-gray-600 focus:border-s28 min-h-[150px]"
              />
            </div>
            
            <Button className="btn-primary w-full animate-pulse-subtle">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
