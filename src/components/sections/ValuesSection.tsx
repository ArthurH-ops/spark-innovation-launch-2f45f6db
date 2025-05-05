import React from 'react';
import { Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ValuesSection: React.FC = () => {
  const { translate } = useLanguage();
  
  const values = [
    {
      titleKey: 'values.integrity_title',
      descriptionKey: 'values.integrity_desc',
      icon: <Shield className="w-12 h-12 text-s28" aria-hidden="true" />,  
    },
    {
      titleKey: 'values.collaboration_title',
      descriptionKey: 'values.collaboration_desc',
      icon: <Users className="w-12 h-12 text-s28" aria-hidden="true" />,  
    },
    {
      titleKey: 'values.impact_title',
      descriptionKey: 'values.impact_desc',
      icon: <Award className="w-12 h-12 text-s28" aria-hidden="true" />,  
    },
  ];

  return (
    <section id="values" className="py-24 bg-s28-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-s28-black">{translate('values.title')}</h2>
        <p className="text-lg md:text-xl mb-12 text-slate-700">
          {translate('values.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.titleKey} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{translate(value.titleKey)}</h3>
              <p className="text-slate-600">{translate(value.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
