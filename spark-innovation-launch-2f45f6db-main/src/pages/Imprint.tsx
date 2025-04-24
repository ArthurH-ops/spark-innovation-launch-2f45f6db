
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Imprint: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Imprint</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            <div className="prose max-w-none">
              <h2>S28 Forge</h2>
              <p>
                Example Street 123<br />
                12345 Sample City<br />
                Country
              </p>
              
              <h3>Contact</h3>
              <p>
                Email: info@s28forge.com<br />
                Phone: +1 234 567 890
              </p>
              
              <h3>Legal Information</h3>
              <p>
                Registration Number: 123456789<br />
                VAT ID: DE123456789
              </p>
              
              <h3>Responsible for Content</h3>
              <p>
                Jane Doe<br />
                Same address as above
              </p>
              
              <h3>Dispute Resolution</h3>
              <p>
                The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/<br />
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Imprint;
