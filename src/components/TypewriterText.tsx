
import React, { useEffect, useRef, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  typingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts, 
  className = "",
  delay = 0,
  typingSpeed = 100,
  pauseDuration = 2000
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    if (!texts.length) return;
    
    const element = textRef.current;
    if (!element) return;
    
    let currentTimeout: NodeJS.Timeout;
    
    const typeText = () => {
      const currentText = texts[currentTextIndex];
      element.textContent = '';
      let i = 0;
      
      const typeInterval = setInterval(() => {
        if (i < currentText.length) {
          element.textContent += currentText.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          
          // Wait before moving to the next text
          currentTimeout = setTimeout(() => {
            // Move to the next text or back to first text
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, pauseDuration);
        }
      }, typingSpeed);
      
      return () => {
        clearInterval(typeInterval);
        clearTimeout(currentTimeout);
      };
    };
    
    const initialTimeout = setTimeout(typeText, delay);
    
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(currentTimeout);
    };
  }, [texts, delay, currentTextIndex, typingSpeed, pauseDuration]);

  return (
    <div 
      className={`typewriter inline-block text-center min-w-full ${className}`} 
      ref={textRef}
      style={{ minHeight: '1.2em' }}
    />
  );
};

export default TypewriterText;
