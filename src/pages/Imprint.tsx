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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Impressum</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            <div className="prose max-w-none">
              <h4 className="text-2xl font-semibold mb-4">Impressum</h4>
              <p><strong>Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</strong></p>
              <p><strong>Webseitenbetreiber:</strong> Arthur Handler</p>
              <p><strong>Anschrift:</strong> Testgasse 1, 1010 Wien</p>
              <p><strong>UID-Nr:</strong><br/><strong>Gewerbeaufsichtbehörde:</strong><br/><strong>Mitgliedschaften:</strong></p>
              <p><strong>Kontaktdaten:</strong><br/>Telefon: +43 676 3749643<br/>Email: test@test.at<br/>Fax:</p>
              <p><strong>Anwendbare Rechtsvorschrift:</strong> <a href="https://www.ris.bka.gv.at" className="text-blue-600 underline">www.ris.bka.gv.at</a><br/><strong>Berufsbezeichnung:</strong></p>
              <p><strong>Online Streitbeilegung:</strong> Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit, Probleme bezüglich des entgeltlichen Kaufs von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 underline">https://ec.europa.eu/consumers/odr</a></p>
              <p><strong>Urheberrecht:</strong> Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B. dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.</p>
              <p><strong>Haftungsausschluss:</strong> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br/>Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.</p>
              <p>Quelle: <strong><a href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php" className="text-blue-600 underline">Impressum Generator Österreich</a></strong></p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Imprint;
