import React from 'react';

const PhilosophyContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-s28">What We Stand For</h3>
          <p className="text-s28-gray-700 text-justify">
            We believe that technology shapes our future—and that every discovery deserves a chance to make a real-world impact. By combining entrepreneurial spirit with scientific excellence, we champion sustainable prosperity for Europe.
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-s28">Who We Serve</h3>
          <p className="text-s28-gray-700 text-justify">
            Our partners are pioneering researchers, eager to bring their innovations to market. We also collaborate with investors and industry leaders seeking transformative technologies and meaningful growth opportunities.
          </p>
        </div>
        
        <div className="transition-all duration-500 hover:transform hover:scale-105 p-6 rounded-lg border border-transparent hover:border-s28-gray-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-s28">What We Achieve Together</h3>
          <p className="text-s28-gray-700 text-justify">
            Through our equity-for-consulting model and hands-on management support, we handle everything beyond the lab—legal, administrative and fundraising—so scientists can focus on innovation. Together, we launch ventures that tackle real problems, drive economic growth and secure a prosperous future for all.
          </p>
        </div>
      </div>
      
      <div className="mt-16 p-8 bg-s28-gray-100 rounded-xl">
        <p className="text-s28-gray-800 mb-6 text-justify">
          At S28 Forge, we see the world not as it is, but as it could be. Every lab discovery, every prototype, carries within it the promise of a better tomorrow—if only it finds the right champions.
        </p>
        <p className="text-s28-gray-800 mb-6 text-justify">
          That's where we come in. We partner with Europe's leading research institutes to give each breakthrough the runway it needs: securing funding, navigating legal labyrinths, assembling go-to-market teams. While we shoulder the business complexities, researchers stay in their element—pushing science forward.
        </p>
        <p className="text-s28-gray-800 text-justify">
          The result? Startups born from pure curiosity and rigorous science, ready to tackle real challenges. From green-energy solutions and biotech marvels to AI-driven diagnostics, our ventures deliver both impact and economic growth. Together, we're not just launching companies—we're forging the future.
        </p>
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="/contact" 
          className="btn-primary animate-pulse-glow inline-flex items-center space-x-2"
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
