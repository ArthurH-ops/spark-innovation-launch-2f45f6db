
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, ArrowUpRight } from 'lucide-react';

// Timeline data for easier management
const timeline = [
  {
    title: 'Founded',
    year: '2023',
    description:
      's28 Forge was established with a mission to bridge the gap between academic research and real-world applications.',
    icon: <CheckCircle className="w-8 h-8 text-s28" aria-hidden="true" />,
  },
  {
    title: 'First Partnership',
    year: '2023',
    description:
      'Secured our first strategic partnership, laying the foundation for collaborative innovation.',
    icon: <Users className="w-8 h-8 text-s28" aria-hidden="true" />,
  },
  {
    title: 'Major Milestone',
    year: '2024',
    description:
      'Launched our first successful research commercialization, impacting real-world challenges.',
    icon: <Award className="w-8 h-8 text-s28" aria-hidden="true" />,
  },
  {
    title: 'Looking Forward',
    year: '2025',
    description:
      'Expanding our network and capabilities to support more researchers and innovations across diverse scientific fields.',
    icon: <ArrowUpRight className="w-8 h-8 text-s28" aria-hidden="true" />,
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-s28-white via-slate-50 to-s28/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-s28-black animate-fade-in-up tracking-tight">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-s28 to-s28/50 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-s28 via-s28/20 to-s28/0 z-0"></div>
          <ol className="relative z-10 space-y-20">
            {timeline.map((item, idx) => (
              <li
                key={item.title}
                className={`group flex flex-col md:flex-row items-center md:items-start md:even:flex-row-reverse relative animate-fade-in-up opacity-0 translate-y-8 will-change-transform will-change-opacity transition duration-700 delay-[${idx * 100}ms] timeline-item`}
                style={{ animation: `fade-in-up 0.7s cubic-bezier(.4,0,.2,1) forwards`, animationDelay: `${0.2 + idx * 0.1}s` }}
                aria-label={`${item.title} - ${item.year}`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-s28/90 shadow-xl ring-4 ring-s28/20 z-20 mx-0 md:mx-8 mb-6 md:mb-0">
                  {item.icon}
                </div>
                {/* Content */}
                <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-s28/10 w-full md:w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-2xl text-s28-black group-hover:text-s28 transition-colors duration-300">{item.title}</h3>
                    <Badge variant="outline" className="border-s28 text-s28 text-base px-4 py-1">{item.year}</Badge>
                  </div>
                  <p className="text-s28-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/*
Fade-in animation (add to your global CSS if not present):

@layer utilities {
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(32px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
}
*/

export default TimelineSection;
