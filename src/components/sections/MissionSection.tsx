import React from 'react';
import { Heart, Leaf, Car, Bot, Brain, Sprout } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MissionSection: React.FC = () => {
  const { translate } = useLanguage();
  
  const industries = [
    {
      key: 'biotech',
      icon: <Heart className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />,
    },
    {
      key: 'cleantech',
      icon: <Leaf className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />,
    },
    {
      key: 'mobilitytech',
      icon: <Car className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2" />,
    },
    {
      key: 'robotics',
      icon: <Bot className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-360" />,
    },
    {
      key: 'ai',
      icon: <Brain className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:pulse" />,
    },
    {
      key: 'agritech',
      icon: <Sprout className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-1" />,
    }
  ];
  return (
    <section id="mission" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">{translate('mission.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.key} className="group p-6 bg-s28-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h4 className="text-xl font-medium mb-2 text-center">{translate(`industry.${industry.key}`)}</h4>
                <p className="text-slate-600 text-center">{translate(`industry.${industry.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
