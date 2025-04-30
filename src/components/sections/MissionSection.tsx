import React from 'react';
import { Beaker, Cpu, Dna, Brain, Rocket, Leaf } from 'lucide-react';

const industries = [
  {
    name: 'Sciences',
    icon: <Beaker className="w-10 h-10 text-s28" />,
    description: 'Supporting breakthrough research across natural sciences with real-world applications'
  },
  {
    name: 'Engineering',
    icon: <Rocket className="w-10 h-10 text-s28" />,
    description: 'Transforming engineering innovations into scalable solutions'
  },
  {
    name: 'Biotech',
    icon: <Dna className="w-10 h-10 text-s28" />,
    description: 'Accelerating biotech discoveries from lab to market'
  },
  {
    name: 'AI',
    icon: <Brain className="w-10 h-10 text-s28" />,
    description: 'Harnessing artificial intelligence to solve complex problems'
  },
  {
    name: 'Climate Tech',
    icon: <Leaf className="w-10 h-10 text-s28" />,
    description: 'Developing sustainable solutions to address climate challenges'
  },
  {
    name: 'Emerging Tech',
    icon: <Cpu className="w-10 h-10 text-s28" />,
    description: 'Exploring cutting-edge technologies with transformative potential'
  }
];

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-s28-black text-center md:text-left">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-s28 mb-6 mx-auto md:mx-0"></div>
              <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                Our mission is to partner with researchers as co-founders—providing tailored support in commercialization, fundraising, and business strategy—to found spinoffs and turn breakthrough ideas into impactful innovations.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-s28-black text-center md:text-left">
                Our Vision
              </h3>
              <div className="w-20 h-1 bg-s28 mb-6 mx-auto md:mx-0"></div>
              <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                A world where academic discoveries seamlessly translate into solutions that address society's greatest challenges, driving progress across critical industries.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Industries We Focus On</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="p-6 bg-s28-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h4 className="text-xl font-medium mb-2 text-center">{industry.name}</h4>
                <p className="text-slate-600 text-center">{industry.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg italic text-slate-700">...and any work with clear potential for real-world impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
