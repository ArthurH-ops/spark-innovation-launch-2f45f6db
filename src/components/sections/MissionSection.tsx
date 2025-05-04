import React from 'react';
import { Heart, Leaf, Car, Bot, Brain, Sprout } from 'lucide-react';

const industries = [
  {
    name: 'BioTech & HealthTech',
    icon: <Heart className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />,
    description: 'Advancing healthcare through innovative biotechnology solutions'
  },
  {
    name: 'CleanTech',
    icon: <Leaf className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />,
    description: 'Developing sustainable solutions for a greener future'
  },
  {
    name: 'MobilityTech',
    icon: <Car className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2" />,
    description: 'Revolutionizing transportation and mobility solutions'
  },
  {
    name: 'Robotics & Automation',
    icon: <Bot className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-360" />,
    description: 'Building the future of automation and robotics'
  },
  {
    name: 'AI & ML Tech',
    icon: <Brain className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:pulse" />,
    description: 'Advancing artificial intelligence and machine learning technologies'
  },
  {
    name: 'AgriTech',
    icon: <Sprout className="w-10 h-10 text-s28 transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-1" />,
    description: 'Innovating agricultural technology for sustainable food production'
  }
];

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Industries We Focus On</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="group p-6 bg-s28-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h4 className="text-xl font-medium mb-2 text-center">{industry.name}</h4>
                <p className="text-slate-600 text-center">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
