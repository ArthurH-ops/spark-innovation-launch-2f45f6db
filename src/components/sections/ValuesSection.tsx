import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards and transparency in all partnerships.',
    icon: <Shield className="w-12 h-12 text-s28" aria-hidden="true" />,  
  },
  {
    title: 'Collaboration',
    description: 'Working hand-in-hand with researchers and industry experts to co-create solutions.',
    icon: <Users className="w-12 h-12 text-s28" aria-hidden="true" />,  
  },
  {
    title: 'Impact',
    description: 'Driving measurable real-world change through strategic support and commercialization.',
    icon: <Award className="w-12 h-12 text-s28" aria-hidden="true" />,  
  },
];

const ValuesSection: React.FC = () => (
  <section id="values" className="py-24 bg-s28-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-s28-black">Our Values</h2>
      <p className="text-lg md:text-xl mb-12 text-slate-700">
        The principles that guide our work and culture.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-center mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
