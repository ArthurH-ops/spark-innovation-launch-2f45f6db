
import React from 'react';

const PhilosophyContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">What We Stand For</h3>
          <p className="text-s28-gray-700 text-justify">
            We believe that technology shapes our future—and that every discovery deserves a chance to make a real-world impact. By combining entrepreneurial spirit with scientific excellence, we champion sustainable prosperity for Europe.
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">Who We Serve</h3>
          <p className="text-s28-gray-700 text-justify">
            Our partners are pioneering researchers, eager to bring their innovations to market. We also collaborate with investors and industry leaders seeking transformative technologies and meaningful growth opportunities.
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-s28">What We Achieve Together</h3>
          <p className="text-s28-gray-700 text-justify">
            Through our equity-for-consulting model and hands-on management support, we handle everything beyond the lab—legal, administrative and fundraising—so scientists can focus on innovation. Together, we launch ventures that tackle real problems, drive economic growth and secure a prosperous future for all.
          </p>
        </div>
      </div>
      
      <div className="mt-16 p-8 bg-gray-100 rounded-xl shadow-md border border-gray-200">
        <p className="text-s28-gray-800 mb-6 text-justify">
          In the quiet corridors of Europe's laboratories, revolutionary ideas take shape daily—ideas that could transform industries, heal diseases, or solve our climate crisis. Yet for every breakthrough that reaches the marketplace, dozens remain trapped behind institutional walls, their potential unrealized.
        </p>
        <p className="text-s28-gray-800 mb-6 text-justify">
          S28 Forge exists in this crucial gap. We're not just consultants or investors; we're architects of possibility. We stand shoulder-to-shoulder with visionary researchers, providing not just capital but the commercial expertise, legal navigation, and market connections that turn scientific discoveries into thriving ventures.
        </p>
        <p className="text-s28-gray-800 text-justify">
          Our work goes beyond profit—we're catalyzing a new renaissance where European innovation leads global markets. By connecting brilliant minds with bold capital, we're building companies that don't just survive but reshape industries, create meaningful employment, and address humanity's most pressing challenges. This isn't just business building; it's future-crafting at its most profound.
        </p>
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="/contact" 
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>Start Your Journey</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PhilosophyContent;
