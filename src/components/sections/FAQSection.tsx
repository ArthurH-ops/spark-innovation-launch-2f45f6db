import React from 'react';

const faqs = [
  {
    question: 'What is the equity-for-consulting model?',
    answer:
      'We provide researchers with funding and business support in exchange for equity in the resulting ventures, aligning incentives and sharing upside.',
  },
  {
    question: 'How can I partner with S28 Forge?',
    answer:
      'Submit your research summary via our contact form or email us directly. We’ll schedule a discovery call to explore alignment and next steps.',
  },
  {
    question: 'Which fields of research do you support?',
    answer:
      'We welcome proposals across sciences, engineering, biotech, AI, and more—any work with clear potential for real-world impact.',
  },
  {
    question: 'What is the typical engagement duration?',
    answer:
      'Most partnerships last 6–18 months, but timelines vary based on project scope and development stages.',
  },
  {
    question: 'Do I retain IP ownership?',
    answer:
      'Researchers retain underlying IP; we negotiate licensing terms that balance control with commercialization needs.',
  },
];

const FAQSection: React.FC = () => (
  <section id="faq" className="py-24 bg-s28-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-s28-black text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="p-4 bg-white rounded-lg shadow-lg">
            <summary className="cursor-pointer font-semibold text-lg">
              {faq.question}
            </summary>
            <p className="mt-2 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
