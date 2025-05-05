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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Impressum / Legal Notice</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            <div className="prose max-w-none">
              <h4 className="text-2xl font-semibold mb-4">Informationen gemäß § 5 ECG, § 25 MedienG, § 63 GewO und § 14 UGB</h4>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Webseitenbetreiber / Website Operator:</h5>
              <p><strong>S28 Forge GmbH</strong></p>
              <p>Firmenbuchnummer: FN XXXXXX z<br />
              Firmenbuchgericht: Handelsgericht Wien</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Unternehmensgegenstand / Business Purpose:</h5>
              <p>Beratung und Unterstützung bei der Kommerzialisierung von Forschungsergebnissen / Consulting and support for the commercialization of research results</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Kontaktdaten / Contact Details:</h5>
              <p>
                <strong>Anschrift / Address:</strong><br />
                Währinger Straße 42/15<br />
                1090 Wien<br />
                Österreich / Austria
              </p>
              <p>
                <strong>Telefon / Phone:</strong> +43 676 123 4567<br />
                <strong>E-Mail:</strong> office@s28forge.com<br />
                <strong>Web:</strong> www.s28forge.com
              </p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Geschäftsführung / Management:</h5>
              <p>Arthur Handler, Kariem El Saedi</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">UID-Nummer / VAT Number:</h5>
              <p>ATU XXXXXXXX</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Aufsichtsbehörde / Regulatory Authority:</h5>
              <p>Magistratisches Bezirksamt für den 9. Bezirk</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Kammer / Chamber Membership:</h5>
              <p>Mitglied der Wirtschaftskammer Wien, Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Anwendbare Rechtsvorschrift / Applicable Regulations:</h5>
              <p>Gewerbeordnung (www.ris.bka.gv.at)</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Angaben zur Online-Streitbeilegung / Online Dispute Resolution:</h5>
              <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://ec.europa.eu/consumers/odr</a>.</p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind jedoch nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Haftungshinweis / Liability Notice:</h5>
              <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
              <p>Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>
              
              <h5 className="text-xl font-medium mt-8 mb-4">Urheberrecht / Copyright:</h5>
              <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              <p>The content and works created by the site operator on these pages are subject to Austrian copyright law. Reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.</p>
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <p className="text-sm text-gray-600">Letzte Aktualisierung / Last updated: 05.05.2024</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Imprint;