import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PointCloudBackground from "@/components/PointCloudBackground";

// Import sections from existing pages
import PhilosophySection from "@/components/sections/PhilosophySection";
// Import PhilosophyContent for the philosophy section
import PhilosophyContent from "@/components/sections/PhilosophyContent";
// Import ContactForm for the contact section
import ContactForm from "@/components/ContactForm";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="relative">
          <HeroSection />
        </section>

        <section
          id="philosophy"
          className="py-24 bg-gradient-to-br from-s28-black via-gray-900 to-s28-black text-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-up">
                Our Philosophy
              </h2>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            <PhilosophyContent />
          </div>
        </section>

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
                  className="flex flex-col items-center md:items-end p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img
                      src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                      alt="Kariem El Saedi"
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    Kariem El Saedi
                  </h3>
                  <p className="text-s28 mb-4">Co-founder & COO</p>
                  <p className="text-center text-s28-gray-600">
                    Kariem brings a decade of experience in business development and startup operations. Passionate about bridging science and entrepreneurship, he specializes in building strong partnerships and supporting researchers as they navigate the journey from lab to market.
                  </p>
                </div>

                {/* Team Member 2 */}
                <div
                  className="flex flex-col items-center md:items-start p-6 transition-all duration-300 hover:shadow-xl rounded-lg animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                    <img
                      src="/lovable-uploads/99f79872-0640-4d7e-ba49-c9f3c82ab4ef.png"
                      alt="Arthur Handler"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Arthur Handler</h3>
                  <p className="text-s28 mb-4">Founder & CEO</p>
                  <p className="text-center text-s28-gray-600">
                    Arthur is a scientist-turned-entrepreneur with a passion for turning research into real-world impact. With expertise in technology transfer and early-stage venture building, he leads our mission to empower innovators and accelerate scientific progress.
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
                        src="/lovable-uploads/964a2cdb-34c4-4669-bfec-1fa837fa159f.png"
                        alt="Aspekt Logo"
                        className="max-h-12 object-contain"
                      />
                    </div>
                    <p className="text-center text-s28-gray-700">
                      Supporting prototyping and technical validation of
                      innovative research concepts.
                    </p>
                  </div>

                  {/* Partner 2 - Mazal */}
                  <div
                    className="p-6 border border-s28-gray-200 rounded-lg transition-all duration-300 hover:border-s28 hover:shadow-xl animate-fade-in-up"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <div className="h-16 mb-6 flex items-center justify-center">
                      <img
                        src="/lovable-uploads/1b56a043-67eb-4ec1-90a5-188c15a51240.png"
                        alt="Mazal Logo"
                        className="max-h-12 object-contain"
                      />
                    </div>
                    <p className="text-center text-s28-gray-700">
                      Providing legal, financial, and market launch expertise
                      for research commercialization.
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-s28 mx-auto md:mx-0">
                <img
                  src="/lovable-uploads/f0f1f21d-26f6-48dc-87df-cda05061e370.png"
                  alt="Kariem El Saedi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-s28 mx-auto md:mx-0">
                <img
                  src="/lovable-uploads/99f79872-0640-4d7e-ba49-c9f3c82ab4ef.png"
                  alt="Arthur Handler"
                  className="w-full h-full object-cover"
                />
              </div>
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
