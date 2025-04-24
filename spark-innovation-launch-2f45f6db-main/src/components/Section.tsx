
import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${dark ? 'bg-s28-black text-s28-white' : 'bg-s28-white text-s28-black'} ${className}`}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
