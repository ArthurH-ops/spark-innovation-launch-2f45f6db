import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ 
  end, 
  duration, 
  prefix = '', 
  suffix = '', 
  decimalPlaces = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * end);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-4xl font-bold text-s28">
      {prefix}{count.toFixed(decimalPlaces)}{suffix}
    </div>
  );
};

const MetricsSection: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-br from-white via-s28/5 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translate('metrics.title')}</h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
          <p className="mt-6 text-lg text-s28-gray-700 max-w-3xl mx-auto">
            {translate('metrics.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
            <AnimatedCounter
              end={32}
              duration={2000}
              suffix="+"
            />
            <p className="mt-2 text-s28-gray-600">{translate('metrics.projects')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
            <AnimatedCounter
              end={18}
              duration={2000}
              suffix=""
            />
            <p className="mt-2 text-s28-gray-600">{translate('metrics.companies')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
            <AnimatedCounter
              end={27}
              duration={2000}
              prefix="€"
              suffix="M"
            />
            <p className="mt-2 text-s28-gray-600">{translate('metrics.capital')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl">
            <AnimatedCounter
              end={94}
              duration={2000}
              suffix="%"
            />
            <p className="mt-2 text-s28-gray-600">{translate('metrics.success_rate')}</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-s28-gray-50 text-s28-gray-600 py-2 px-4 rounded-md text-sm">
            {translate('metrics.data_note')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;