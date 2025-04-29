import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-s28-black">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-slate-700">
          To empower researchers by providing tailored support in commercialization, fundraising, and business strategy—transforming breakthrough ideas into impactful innovations.
        </p>
        <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-s28-black">
          Our Vision
        </h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-700">
          A world where academic discoveries seamlessly translate into solutions that address society’s greatest challenges.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
