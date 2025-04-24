
import React from 'react';
import { Badge } from '@/components/ui/badge';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-s28-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-s28-black animate-fade-in-up">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-s28 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-s28 z-0"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Item 1 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-s28 rounded-full p-2 shadow-lg">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">Founded</h3>
                    <Badge variant="outline" className="border-s28 text-s28">2023</Badge>
                  </div>
                  <p className="text-s28-gray-600">
                    s28 Forge was established with a mission to bridge the gap between academic research and real-world applications.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-s28 rounded-full p-2 shadow-lg">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">First Partnership</h3>
                    <Badge variant="outline" className="border-s28 text-s28">2024</Badge>
                  </div>
                  <p className="text-s28-gray-600">
                    Established strategic partnerships with leading research institutions to accelerate the commercialization of scientific discoveries.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-s28 rounded-full p-2 shadow-lg">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">Looking Forward</h3>
                    <Badge variant="outline" className="border-s28 text-s28">2025</Badge>
                  </div>
                  <p className="text-s28-gray-600">
                    Expanding our network and capabilities to support more researchers and innovations across diverse scientific fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
