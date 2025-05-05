import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PointCloudBackground from "@/components/PointCloudBackground";
import { Linkedin } from "lucide-react";

// Import sections from existing pages
import PhilosophySection from "@/components/sections/PhilosophySection";
// Import PhilosophyContent for the philosophy section
import PhilosophyContent from "@/components/sections/PhilosophyContent";
// Import ContactForm for the contact section
import ContactForm from "@/components/ContactForm";
import MissionSection from "@/components/sections/MissionSection";
// import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import S28ExplainedSection from "@/components/sections/S28ExplainedSection";
import CtaFloatingButton from "@/components/CtaFloatingButton";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
// import MetricsSection from "@/components/sections/MetricsSection";
import WorkflowTimelineSection from "@/components/sections/WorkflowTimelineSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <CtaFloatingButton />
      <main>
        <section id="home" className="relative">
          <HeroSection />
        </section>

        <MissionSection />

        <section
          id="philosophy"
          className="py-24 bg-s28-gray-100 text-black"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                Our Philosophy
              </h2>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            <PhilosophyContent />
          </div>
        </section>

        {/* Success Stories section hidden */}

        {/* Metrics section hidden */}

        {/* Testimonials section hidden */}

        <WorkflowTimelineSection />

        <S28ExplainedSection />

        <section id="about" className="py-24 bg-s28-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                About Us
              </h2>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Team Member 1 */}
                <div
                  className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img
                      src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
                      alt="Arthur Handler"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Arthur Handler</h3>
                    <a 
                      href="https://www.linkedin.com/in/arthur-handler/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-s28 mb-4">Co-founder</p>
                  <p className="text-center text-s28-gray-600">
                    Arthur is an engineer with a focus on product development and financial structures. In the past Arthur was involved in different projects in the field of creating companies out of research results. Furthermore he has worked in various industrial and consulting companies, where he learned to incorporate technological and economical frameworks.
                  </p>
                </div>

                {/* Team Member 2 */}
                <div
                  className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img
                      src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                      alt="Kariem El Saedi"
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Kariem El Saedi</h3>
                    <a 
                      href="https://www.linkedin.com/in/kariem-elsaedi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-s28 hover:text-s28-dark transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-s28 mb-4">Co-founder</p>
                  <p className="text-center text-s28-gray-600">
                    Kariem has great passion for research and its creative side. In his personal blog he loves to discuss trending topics in the field and to brainstorm new business ideas. Kariem has worked both on the Start-Up and research side of the spectrum and loves to combine different thinking structures to problems.
                  </p>
                </div>
              </div>

              {/* Partnerships Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-10 text-center">
                  Partnerships
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Partner 1 - Aspekt */}
                  <div
                    className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="h-16 mb-6 flex items-center justify-center">
                      <img
                        src="/lovable-uploads/1b56a043-67eb-4ec1-90a5-188c15a51240.png"
                        alt="Aspekt Development Logo"
                        className="max-h-12 object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">Aspekt Development</h3>
                      <a 
                        href="https://www.linkedin.com/company/aspekt-development-gmbh/posts/?feedView=all" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-s28 hover:text-s28-dark transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-center text-s28-gray-700">
                      Aspekt supports our mission by providing state-of-the-art prototyping and technical validation, helping us turn innovative research into scalable solutions.
                    </p>
                  </div>

                  {/* Partner 2 - Mazal */}
                  <div
                    className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <div className="h-16 mb-6 flex items-center justify-center">
                      <img
                        src="/lovable-uploads/99f79872-0640-4d7e-ba49-c9f3c82ab4ef.png"
                        alt="Mazal Advisory Logo"
                        className="max-h-12 object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">Mazal Advisory</h3>
                      <a 
                        href="https://www.linkedin.com/in/markus-mazal-a47424150/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-s28 hover:text-s28-dark transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-center text-s28-gray-700">
                      Mazal brings deep expertise in legal, financial, and go-to-market strategy, ensuring that our ventures are built on a solid foundation for growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 relative bg-s28-black text-white"
        >
          <PointCloudBackground density={0.3} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-up">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
