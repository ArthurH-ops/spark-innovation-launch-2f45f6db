
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-s28-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-s28-white text-sm">
              &copy; {new Date().getFullYear()} S28 Forge
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/philosophy" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
              Philosophy
            </Link>
            <Link to="/about" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
              Contact
            </Link>
            <Link to="/imprint" className="text-s28-gray-300 hover:text-s28 text-sm transition-colors">
              Imprint
            </Link>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-s28-gray-300 hover:text-s28 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
