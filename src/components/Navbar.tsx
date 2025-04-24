import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const textColorClass = isScrolled ? 'text-s28-white' : isHomePage ? 'text-s28-white' : 'text-s28-black';
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-s28-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="kjkik">
          <span className="text-sm">s</span>28 Forge
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/philosophy" className={`${textColorClass} hover:text-s28 transition-colors underline-hover`}>
            Philosophy
          </Link>
          <Link to="/about" className={`${textColorClass} hover:text-s28 transition-colors underline-hover`}>
            About Us
          </Link>
          <Link to="/contact" className={`${textColorClass} hover:text-s28 transition-colors underline-hover`}>
            Contact
          </Link>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </nav>

        <button className={`md:hidden ${textColorClass} hover:text-s28 transition-colors`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={isMobileMenuOpen ? "md:hidden absolute top-full left-0 w-full bg-s28-black/95 backdrop-blur-md py-6 animate-fade-in" : "hidden"}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <Link to="/philosophy" className="text-s28-white hover:text-s28 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
            Philosophy
          </Link>
          <Link to="/about" className="text-s28-white hover:text-s28 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="text-s28-white hover:text-s28 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/contact" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>;
};
export default Navbar;