import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Images don't need translation
const testimonialImages = [
  "https://randomuser.me/api/portraits/women/38.jpg",
  "https://randomuser.me/api/portraits/men/42.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg"
];

const TestimonialsSection: React.FC = () => {
  const { translate } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Define testimonials data with translation keys
  const testimonials = [
    {
      id: 1,
      quoteKey: 'testimonials.1.quote',
      authorKey: 'testimonials.1.author',
      titleKey: 'testimonials.1.title',
      image: testimonialImages[0]
    },
    {
      id: 2,
      quoteKey: 'testimonials.2.quote',
      authorKey: 'testimonials.2.author',
      titleKey: 'testimonials.2.title',
      image: testimonialImages[1]
    },
    {
      id: 3,
      quoteKey: 'testimonials.3.quote',
      authorKey: 'testimonials.3.author',
      titleKey: 'testimonials.3.title',
      image: testimonialImages[2]
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-s28/10 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translate('testimonials.title')}</h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-s28">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-s28/20">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="transition-all duration-500 ease-in-out transform">
              <div className="relative z-10 pl-6 pt-4">
                <p className="text-xl italic text-s28-gray-700 mb-6">"{translate(testimonials[activeIndex].quoteKey)}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={translate(testimonials[activeIndex].authorKey)} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{translate(testimonials[activeIndex].authorKey)}</h4>
                    <p className="text-s28-gray-600">{translate(testimonials[activeIndex].titleKey)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-s28-gray-200 text-s28 hover:bg-s28 hover:text-white transition-all duration-300"
              aria-label={translate('testimonials.prev')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-s28 scale-125' : 'bg-s28-gray-300'
                  }`}
                  aria-label={`${translate('testimonials.goto')} ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-s28-gray-200 text-s28 hover:bg-s28 hover:text-white transition-all duration-300"
              aria-label={translate('testimonials.next')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;