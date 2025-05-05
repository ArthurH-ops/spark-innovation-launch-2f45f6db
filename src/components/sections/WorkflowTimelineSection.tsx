import React from 'react';
import { Check, ArrowRight, Beaker, LightbulbIcon, Landmark, Users, BarChart3, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WorkflowTimelineSection: React.FC = () => {
  const { translate, currentLanguage } = useLanguage();
  
  // Define timeline steps with translations
  const timelineSteps = [
    {
      id: 1,
      title: currentLanguage === 'en' ? 'Discovery Call' : 'Erstgespräch',
      description: currentLanguage === 'en' 
        ? 'Initial consultation to understand your research and explore commercial potential' 
        : 'Erstberatung um Ihre Forschung zu verstehen und kommerzielle Potenziale zu erkunden',
      icon: <LightbulbIcon className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? '1 week' : '1 Woche',
      details: currentLanguage === 'en' 
        ? [
            'In-depth discussion of your technology',
            'Preliminary market assessment',
            'Exploration of potential applications'
          ]
        : [
            'Ausführliche Diskussion Ihrer Technologie',
            'Vorläufige Marktbewertung',
            'Erkundung potenzieller Anwendungen'
          ]
    },
    {
      id: 2,
      title: currentLanguage === 'en' ? 'Validation Phase' : 'Validierungsphase',
      description: currentLanguage === 'en'
        ? 'Comprehensive evaluation of commercial viability and IP landscape'
        : 'Umfassende Bewertung der kommerziellen Realisierbarkeit und IP-Landschaft',
      icon: <Beaker className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? '3-4 weeks' : '3-4 Wochen',
      details: currentLanguage === 'en'
        ? [
            'Technical validation and proof-of-concept',
            'Market size and competition analysis',
            'IP strategy and protection assessment'
          ]
        : [
            'Technische Validierung und Machbarkeitsnachweis',
            'Marktgröße und Wettbewerbsanalyse',
            'IP-Strategie und Schutzbeurteilung'
          ]
    },
    {
      id: 3,
      title: currentLanguage === 'en' ? 'Partnership Agreement' : 'Partnerschaftsvertrag',
      description: currentLanguage === 'en'
        ? 'Formalization of our collaboration with clear equity and responsibilities'
        : 'Formalisierung unserer Zusammenarbeit mit klaren Eigenkapital- und Verantwortlichkeitsregelungen',
      icon: <Landmark className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? '2 weeks' : '2 Wochen',
      details: currentLanguage === 'en'
        ? [
            'Equity structure definition',
            'Role and responsibility clarification',
            'Resource allocation planning'
          ]
        : [
            'Definition der Eigenkapitalstruktur',
            'Klärung von Rollen und Verantwortlichkeiten',
            'Planung der Ressourcenzuweisung'
          ]
    },
    {
      id: 4,
      title: currentLanguage === 'en' ? 'Team Building' : 'Teambildung',
      description: currentLanguage === 'en'
        ? 'Assembling the right talent to complement your scientific expertise'
        : 'Zusammenstellung der richtigen Talente zur Ergänzung Ihrer wissenschaftlichen Expertise',
      icon: <Users className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? '4-8 weeks' : '4-8 Wochen',
      details: currentLanguage === 'en'
        ? [
            'Identification of skill gaps',
            'Recruitment of key personnel',
            'Advisory board formation'
          ]
        : [
            'Identifizierung von Qualifikationslücken',
            'Rekrutierung von Schlüsselpersonal',
            'Bildung eines Beirats'
          ]
    },
    {
      id: 5,
      title: currentLanguage === 'en' ? 'Business Development' : 'Geschäftsentwicklung',
      description: currentLanguage === 'en'
        ? 'Creating and executing the go-to-market strategy'
        : 'Erstellung und Umsetzung der Markteinführungsstrategie',
      icon: <BarChart3 className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? '2-3 months' : '2-3 Monate',
      details: currentLanguage === 'en'
        ? [
            'Business model refinement',
            'Funding strategy implementation',
            'Customer/partner acquisition planning'
          ]
        : [
            'Verfeinerung des Geschäftsmodells',
            'Umsetzung der Finanzierungsstrategie',
            'Planung der Kunden-/Partnerakquisition'
          ]
    },
    {
      id: 6,
      title: currentLanguage === 'en' ? 'Launch & Scale' : 'Start & Skalierung',
      description: currentLanguage === 'en'
        ? 'Taking your innovation to market with ongoing support'
        : 'Markteinführung Ihrer Innovation mit kontinuierlicher Unterstützung',
      icon: <Rocket className="w-6 h-6" />,
      duration: currentLanguage === 'en' ? 'Ongoing' : 'Fortlaufend',
      details: currentLanguage === 'en'
        ? [
            'Product launch execution',
            'Fundraising support',
            'Growth strategy refinement'
          ]
        : [
            'Durchführung der Produkteinführung',
            'Unterstützung bei der Mittelbeschaffung',
            'Verfeinerung der Wachstumsstrategie'
          ]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translate('workflow.title')}</h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
          <p className="mt-6 text-lg text-s28-gray-700 max-w-3xl mx-auto">
            {translate('workflow.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-start mb-16 relative">
              {/* Step number and connector line */}
              <div className="flex-shrink-0 mr-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-s28 text-white flex items-center justify-center text-xl font-bold z-10">
                  {step.id}
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="w-1 bg-s28/20 absolute top-14 bottom-0 left-7 -z-10 h-full"></div>
                )}
              </div>

              {/* Step content */}
              <div className={`bg-white rounded-xl shadow-lg p-6 w-full transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0 ? 'border-l-4 border-s28' : 'border-r-4 border-s28'
              }`}>
                <div className="flex flex-wrap items-center mb-4">
                  <div className="bg-s28/10 p-2 rounded-full mr-4 text-s28">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <span className="ml-auto bg-s28/10 text-s28 text-sm font-medium px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-s28-gray-700 mb-4">
                  {step.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 text-s28-gray-700">
                    {currentLanguage === 'en' ? 'What happens in this phase:' : 'Was in dieser Phase passiert:'}
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-s28 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-s28-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-s28" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80, 
                  behavior: 'smooth'
                });
              }
            }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>{translate('workflow.start_journey')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimelineSection;