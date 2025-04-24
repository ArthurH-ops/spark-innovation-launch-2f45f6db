import React, { useEffect, useState, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  cursorStyle?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = "",
  typingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  cursorStyle = "text-s28"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!texts.length) return;
    
    const currentFullText = texts[currentTextIndex];
    
    // Typing effect
    if (isTyping && isVisible) {
      if (displayText.length < currentFullText.length) {
        typingTimerRef.current = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing current text
        typingTimerRef.current = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } 
    // Fade out effect
    else if (!isTyping && isVisible) {
      fadeTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 400);
    } 
    // Reset for next text
    else if (!isVisible) {
      fadeTimerRef.current = setTimeout(() => {
        setCurrentTextIndex((prev) => loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1));
        setDisplayText('');
        setIsTyping(true);
        setIsVisible(true);
      }, 400);
    }

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, [texts, displayText, currentTextIndex, isTyping, isVisible, typingSpeed, pauseDuration, loop]);

  return (
    <div 
      className={`typewriter-container ${className}`}
      aria-live="polite"
    >
      <div 
        className="typewriter-text"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        }}
      >
        <span className="text-white">{displayText}</span>
        <span className={`cursor ${cursorStyle}`} style={{ 
          opacity: isTyping ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}>|</span>
      </div>
    </div>
  );
};

export default TypewriterText;
