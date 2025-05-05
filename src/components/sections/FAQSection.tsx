import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const FAQSection: React.FC = () => {
  const { translate } = useLanguage();
  
  const faqs = [
    {
      questionKey: 'faq.equity_model.question',
      answerKey: 'faq.equity_model.answer',
    },
    {
      questionKey: 'faq.partner.question',
      answerKey: 'faq.partner.answer',
    },
    {
      questionKey: 'faq.fields.question',
      answerKey: 'faq.fields.answer',
    },
    {
      questionKey: 'faq.duration.question',
      answerKey: 'faq.duration.answer',
    },
    {
      questionKey: 'faq.ip.question',
      answerKey: 'faq.ip.answer',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-s28-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-s28-black text-center">
          {translate('faq.title')}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="p-4 bg-white rounded-lg shadow-lg">
              <summary className="cursor-pointer font-semibold text-lg">
                {translate(faq.questionKey)}
              </summary>
              <p className="mt-2 text-slate-700">{translate(faq.answerKey)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;