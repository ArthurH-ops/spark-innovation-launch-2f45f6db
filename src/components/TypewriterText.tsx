
import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = "",
  typingSpeed = 50,
  pauseDuration = 2000,
  loop = true
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (!texts.length) return;
    
    const handleTyping = () => {
      const currentFullText = texts[currentTextIndex];
      
      // Calculate the timeout value
      let timeout = typingSpeed;
      
      // Logic for typing or deleting
      if (!isDeleting) {
        // When typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        
        // If we've typed the full text, set to deleting mode after pause
        if (displayText === currentFullText) {
          timeout = pauseDuration;
          setIsDeleting(true);
        }
      } else {
        // When deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        
        // If we've deleted all text, move to next text
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => 
            loop ? (prevIndex + 1) % texts.length : Math.min(prevIndex + 1, texts.length - 1)
          );
        }
        
        // Make deletion faster than typing
        timeout = typingSpeed * 0.5;
      }
      
      // Schedule the next typing action
      setTimeout(handleTyping, timeout);
    };
    
    // Start the typing effect
    const typingTimer = setTimeout(handleTyping, 50);
    
    // Clean up the timer when component unmounts
    return () => clearTimeout(typingTimer);
  }, [texts, displayText, currentTextIndex, isDeleting, typingSpeed, pauseDuration, loop]);
  
  return (
    <div className={`typewriter ${className}`} aria-live="polite">
      {displayText}
    </div>
  );
};

export default TypewriterText;
