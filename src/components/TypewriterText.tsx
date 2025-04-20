
import React, { useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = "",
  delay = 0
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    element.textContent = '';
    
    const typeText = () => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100); // Adjust speed of typing here
      
      return () => clearInterval(typeInterval);
    };
    
    const timeout = setTimeout(typeText, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div 
      className={`typewriter inline-block text-center min-w-full ${className}`} 
      ref={textRef}
      style={{ minHeight: '1.2em' }}
    />
  );
};

export default TypewriterText;
