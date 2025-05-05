import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Section className="py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Datenschutzerklärung / Privacy Policy</h1>
              <div className="w-20 h-1 bg-s28 mx-auto"></div>
            </div>
            
            <div className="prose max-w-none">
              {/* German Version */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Datenschutzerklärung für s28 Forge</h2>
                <p className="italic mb-6">Letzte Aktualisierung: 5.5.2025</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">1. Verantwortlicher</h3>
                <p>
                  Verantwortlich im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG), ist:
                </p>
                <p>
                  S28 Forge GmbH<br />
                  Währinger Straße 42/15<br />
                  1090 Wien, Österreich<br />
                  E-Mail: office@s28forge.com
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">2. Datenschutzbeauftragter</h3>
                <p>
                  Arthur Handler<br />
                  Email: arthurh.projects@gmail.com
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">3. Erfassung und Speicherung personenbezogener Daten</h3>
                <p>
                  Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Zu den verarbeiteten Daten gehören insbesondere:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP‑Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                  <li>Inhalt der abgerufenen Datei</li>
                  <li>Zugriffsstatus/HTTP‑Statuscode</li>
                  <li>jeweils übertragene Datenmenge</li>
                  <li>Webseite, von der die Anforderung kommt</li>
                  <li>verwendeter Browser, Betriebssystem und dessen Oberfläche</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">4. Rechtsgrundlagen der Verarbeitung</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse): Zur Gewährleistung des Betriebs, der Sicherheit und Optimierung unserer Website.</li>
                  <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Wenn Sie uns freiwillig Daten über Kontaktformulare, Newsletter-Anmeldung o. Ä. übermitteln.</li>
                  <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Bei Erfüllung vorvertraglicher Maßnahmen und Erbringung vertraglicher Leistungen.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">5. Kontaktformular & E‑Mail‑Kontakt</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zum Zweck der Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">6. Drittanbieter & Datenübermittlung</h3>
                <p>Eine Übermittlung Ihrer Daten an Dritte erfolgt nur,</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>wenn Sie ausdrücklich eingewilligt haben,</li>
                  <li>die Weitergabe zur Vertragsabwicklung erforderlich ist,</li>
                  <li>eine rechtliche Verpflichtung besteht,</li>
                  <li>dies gesetzlich zulässig ist und für die Abwicklung von Vertragsverhältnissen erforderlich ist.</li>
                </ul>
                <p>Mögliche Empfänger sind:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Hosting‑Provider</li>
                  <li>E‑Mail- und Newsletter-Dienstleister</li>
                  <li>Zahlungsdienstleister (beim Online‑Verkauf)</li>
                  <li>Analyse‑ und Marketing‑Dienstleister</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">7. Übermittlung an Drittländer</h3>
                <p>Daten werden nur dann in Staaten außerhalb des Europäischen Wirtschaftsraums (EWR) übermittelt, wenn</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>eine Angemessenheitsentscheidung der EU-Kommission vorliegt,</li>
                  <li>geeignete Garantien (Standardvertragsklauseln) bestehen,</li>
                  <li>Sie ausdrücklich eingewilligt haben.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">8. Datensicherheit</h3>
                <p>
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">9. Speicherdauer</h3>
                <p>
                  Die personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">10. Ihre Rechte</h3>
                <p>Sie haben das Recht, gegenüber dem Verantwortlichen</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Auskunft über Ihre verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DSGVO),</li>
                  <li>Berichtigung oder Löschung Ihrer Daten zu verlangen (Art. 16, 17 DSGVO),</li>
                  <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),</li>
                  <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO),</li>
                  <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO),</li>
                  <li>erteilte Einwilligungen jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der Verarbeitung bis zum Widerruf berührt wird.</li>
                </ul>
                <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter den oben genannten Kontaktdaten.</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">11. Beschwerderecht bei der Datenschutzbehörde</h3>
                <p>
                  Unabhängig von Ihren Rechten haben Sie das Recht, sich bei der österreichischen Datenschutzbehörde (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">https://www.dsb.gv.at</a>) zu beschweren.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">12. Änderungen dieser Datenschutzerklärung</h3>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktuelle Version finden Sie auf unserer Website.
                </p>
              </div>

              {/* English Version */}
              <div className="mt-16 pt-16 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Privacy Policy for s28 Forge</h2>
                <p className="italic mb-6">Last updated: 5.5.2025</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">1. Data Controller</h3>
                <p>
                  Responsible within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG), is:
                </p>
                <p>
                  S28 Forge GmbH<br />
                  Währinger Straße 42/15<br />
                  1090 Vienna, Austria<br />
                  Email: office@s28forge.com
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">2. Data Protection Officer</h3>
                <p>
                  Arthur Handler<br />
                  Email: arthurh.projects@gmail.com
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">3. Collection and Storage of Personal Data</h3>
                <p>
                  We collect, process, and use personal data only to the extent necessary to provide a functioning website and our content and services. The processed data includes in particular:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP address</li>
                  <li>Date and time of access</li>
                  <li>Time zone difference to Greenwich Mean Time (GMT)</li>
                  <li>Content of the retrieved file</li>
                  <li>Access status/HTTP status code</li>
                  <li>Amount of data transferred</li>
                  <li>Website from which the request comes</li>
                  <li>Browser, operating system, and its interface</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">4. Legal Basis for Processing</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Art. 6(1)(f) GDPR (Legitimate interest): To ensure the operation, security, and optimization of our website.</li>
                  <li>Art. 6(1)(a) GDPR (Consent): When you voluntarily provide us with data via contact forms, newsletter registration, etc.</li>
                  <li>Art. 6(1)(b) GDPR (Contract): When fulfilling pre-contractual measures and providing contractual services.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">5. Contact Form & Email Contact</h3>
                <p>
                  When you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided there, will be stored for the purpose of processing the inquiry and in case of follow-up questions. The processing is based on your consent (Art. 6(1)(a) GDPR).
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">6. Third Parties & Data Transfer</h3>
                <p>Your data will only be transferred to third parties if:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>you have expressly consented,</li>
                  <li>the transfer is necessary for contract processing,</li>
                  <li>there is a legal obligation,</li>
                  <li>it is legally permissible and necessary for the processing of contractual relationships.</li>
                </ul>
                <p>Possible recipients are:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Hosting providers</li>
                  <li>Email and newsletter service providers</li>
                  <li>Payment service providers (for online sales)</li>
                  <li>Analysis and marketing service providers</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">7. Transfer to Third Countries</h3>
                <p>Data will only be transferred to countries outside the European Economic Area (EEA) if:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>an adequacy decision by the EU Commission exists,</li>
                  <li>appropriate safeguards (standard contractual clauses) exist,</li>
                  <li>you have expressly consented.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">8. Data Security</h3>
                <p>
                  We implement technical and organizational security measures to protect your data managed by us against accidental or intentional manipulation, loss, destruction, or against access by unauthorized persons.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">9. Storage Duration</h3>
                <p>
                  Personal data will be deleted or blocked as soon as the purpose of storage ceases to apply. Statutory retention periods remain unaffected.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">10. Your Rights</h3>
                <p>You have the right, with respect to the data controller, to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Request information about your processed personal data (Art. 15 GDPR),</li>
                  <li>Request correction or deletion of your data (Art. 16, 17 GDPR),</li>
                  <li>Request restriction of processing (Art. 18 GDPR),</li>
                  <li>Object to processing (Art. 21 GDPR),</li>
                  <li>Request data portability (Art. 20 GDPR),</li>
                  <li>Withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                </ul>
                <p>To exercise your rights, please contact us using the contact details provided above.</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">11. Right to Lodge a Complaint with a Supervisory Authority</h3>
                <p>
                  Independent of your rights, you have the right to lodge a complaint with the Austrian Data Protection Authority (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">https://www.dsb.gv.at</a>).
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">12. Changes to this Privacy Policy</h3>
                <p>
                  We reserve the right to adapt this privacy policy to ensure that it always complies with current legal requirements. The current version can be found on our website.
                </p>
              </div>

              <div className="border-t border-gray-200 mt-12 pt-8">
                <p className="text-sm text-gray-600">Letzte Aktualisierung / Last updated: 05.05.2025</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;