
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
    if (element) {
      element.textContent = '';
      
      setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(typeInterval);
          }
        }, 100);
      }, delay);
    }
  }, [text, delay]);

  return (
    <div 
      className={`typewriter inline-block text-center min-w-full ${className}`} 
      ref={textRef}
      style={{ minHeight: '1.2em' }}
    >
      {/* Text will be inserted dynamically via JS */}
    </div>
  );
};

export default TypewriterText;
