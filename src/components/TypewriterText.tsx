
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
      setTimeout(() => {
        element.classList.add('animate-typewriter');
      }, delay);
    }
  }, [delay]);

  return (
    <div className={`typewriter ${className}`} ref={textRef}>
      {text}
    </div>
  );
};

export default TypewriterText;
