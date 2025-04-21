
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
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (!texts.length) return;
    
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const currentText = texts[currentIndex];
      
      // If deleting, remove a character, otherwise add a character
      setDisplayText(prev => 
        isDeleting 
          ? prev.substring(0, prev.length - 1) 
          : currentText.substring(0, prev.length + 1)
      );
      
      // Determine next action
      if (!isDeleting && displayText === currentText) {
        // Start deleting after pause
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        // Continue typing or deleting
        timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
      }
    };
    
    timeout = setTimeout(type, delay);
    
    return () => clearTimeout(timeout);
  }, [texts, currentIndex, displayText, isDeleting, delay, typingSpeed, pauseDuration]);

  return (
    <div 
      className={`typewriter inline-block text-center min-w-full ${className}`}
      style={{ minHeight: '1.2em' }}
    >
      {displayText}
    </div>
  );
};

export default TypewriterText;
