import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

interface TranslationContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const defaultTranslations = {
  // Navbar
  'nav.home': {
    en: 'Home',
    de: 'Startseite'
  },
  'nav.philosophy': {
    en: 'Philosophy',
    de: 'Philosophie'
  },
  'nav.success_stories': {
    en: 'Success Stories',
    de: 'Erfolgsgeschichten'
  },
  'nav.how_we_work': {
    en: 'How We Work',
    de: 'Arbeitsweise'
  },
  'nav.about_us': {
    en: 'About Us',
    de: 'Über Uns'
  },
  'nav.contact': {
    en: 'Contact',
    de: 'Kontakt'
  },
  'nav.get_in_touch': {
    en: 'Get in Touch',
    de: 'Kontaktieren Sie uns'
  },

  // Hero Section
  'hero.title': {
    en: 'Unleashing your research\'s potential',
    de: 'Entfaltung des Potenzials Ihrer Forschung'
  },
  'hero.subtitle': {
    en: 'We partner with pioneering researchers and visionaries to turn breakthrough discoveries into real-world solutions. Through our unique equity-for-consulting model and hands-on support, we handle the business, legal, and fundraising challenges—so you can focus on what you do best: innovation.',
    de: 'Wir arbeiten mit wegweisenden Forschern und Visionären zusammen, um bahnbrechende Entdeckungen in praxisnahe Lösungen zu verwandeln. Durch unser einzigartiges Equity-for-Consulting-Modell und praktische Unterstützung kümmern wir uns um die geschäftlichen, rechtlichen und finanziellen Herausforderungen - damit Sie sich auf das konzentrieren können, was Sie am besten können: Innovation.'
  },
  'hero.cta': {
    en: 'Get in Touch',
    de: 'Kontakt aufnehmen'
  },
  'hero.secondary_cta': {
    en: 'Our Philosophy',
    de: 'Unsere Philosophie'
  },

  // Mission Section
  'mission.title': {
    en: 'Industries We Focus On',
    de: 'Branchen, auf die wir uns konzentrieren'
  },
  
  // Industries
  'industry.biotech': {
    en: 'BioTech & HealthTech',
    de: 'BioTech & GesundheitsTech'
  },
  'industry.biotech_desc': {
    en: 'Advancing healthcare through innovative biotechnology solutions',
    de: 'Förderung des Gesundheitswesens durch innovative biotechnologische Lösungen'
  },
  'industry.cleantech': {
    en: 'CleanTech',
    de: 'CleanTech'
  },
  'industry.cleantech_desc': {
    en: 'Developing sustainable solutions for a greener future',
    de: 'Entwicklung nachhaltiger Lösungen für eine grünere Zukunft'
  },
  'industry.mobilitytech': {
    en: 'MobilityTech',
    de: 'MobilitätsTech'
  },
  'industry.mobilitytech_desc': {
    en: 'Revolutionizing transportation and mobility solutions',
    de: 'Revolutionierung von Transport- und Mobilitätslösungen'
  },
  'industry.robotics': {
    en: 'Robotics & Automation',
    de: 'Robotik & Automatisierung'
  },
  'industry.robotics_desc': {
    en: 'Building the future of automation and robotics',
    de: 'Aufbau der Zukunft der Automatisierung und Robotik'
  },
  'industry.ai': {
    en: 'AI & ML Tech',
    de: 'KI & ML Technologie'
  },
  'industry.ai_desc': {
    en: 'Advancing artificial intelligence and machine learning technologies',
    de: 'Förderung von Technologien im Bereich künstlicher Intelligenz und maschinelles Lernen'
  },
  'industry.agritech': {
    en: 'AgriTech',
    de: 'AgrarTech'
  },
  'industry.agritech_desc': {
    en: 'Innovating agricultural technology for sustainable food production',
    de: 'Innovation in der Agrartechnologie für nachhaltige Lebensmittelproduktion'
  },

  // Philosophy Section
  'philosophy.title': {
    en: 'Our Philosophy',
    de: 'Unsere Philosophie'
  },
  'philosophy.what_we_stand_for': {
    en: 'What We Stand For',
    de: 'Wofür wir stehen'
  },
  'philosophy.what_we_stand_for_desc': {
    en: 'We believe that technology shapes our future—and that every discovery deserves a chance to make a real-world impact. By combining entrepreneurial spirit with scientific excellence, we champion sustainable prosperity for Europe.',
    de: 'Wir glauben, dass Technologie unsere Zukunft gestaltet und dass jede Entdeckung eine Chance verdient, einen echten Einfluss zu nehmen. Durch die Kombination von unternehmerischem Geist mit wissenschaftlicher Exzellenz fördern wir nachhaltige Prosperität für Europa.'
  },
  'philosophy.who_we_serve': {
    en: 'Who We Serve',
    de: 'Wen wir bedienen'
  },
  'philosophy.who_we_serve_desc': {
    en: 'Our partners are pioneering researchers, eager to bring their innovations to market. We also collaborate with investors and industry leaders seeking transformative technologies and meaningful growth opportunities.',
    de: 'Unsere Partner sind wegweisende Forscher, die ihre Innovationen auf den Markt bringen wollen. Wir arbeiten auch mit Investoren und Branchenführern zusammen, die transformative Technologien und bedeutsame Wachstumschancen suchen.'
  },
  'philosophy.what_we_achieve': {
    en: 'What We Achieve Together',
    de: 'Was wir gemeinsam erreichen'
  },
  'philosophy.what_we_achieve_desc': {
    en: 'Through our equity-for-consulting model and hands-on management support, we handle everything beyond the lab—legal, administrative and fundraising—so scientists can focus on innovation. Together, we launch ventures that tackle real problems, drive economic growth and secure a prosperous future for all.',
    de: 'Durch unser Equity-for-Consulting-Modell und praktische Management-Unterstützung kümmern wir uns um alles jenseits des Labors - Rechtliches, Administratives und Fundraising - damit Wissenschaftler sich auf Innovation konzentrieren können. Gemeinsam starten wir Unternehmungen, die reale Probleme angehen, wirtschaftliches Wachstum fördern und eine prosperierende Zukunft für alle sichern.'
  },
  'philosophy.start_journey': {
    en: 'Start Your Journey',
    de: 'Starten Sie Ihre Reise'
  },

  // Success Stories Section
  'success.title': {
    en: 'Success Stories',
    de: 'Erfolgsgeschichten'
  },
  'success.subtitle': {
    en: 'From lab breakthrough to market disruption. See how we\'ve helped researchers transform their innovations into successful ventures.',
    de: 'Vom Labordurchbruch zur Marktrevolution. Sehen Sie, wie wir Forschern geholfen haben, ihre Innovationen in erfolgreiche Unternehmungen zu verwandeln.'
  },
  'success.start_your_success': {
    en: 'Start Your Success Story',
    de: 'Starten Sie Ihre Erfolgsgeschichte'
  },
  'success.story1.title': {
    en: 'BioTech Breakthrough',
    de: 'BioTech-Durchbruch'
  },
  'success.story1.company': {
    en: 'NanoCell Therapeutics',
    de: 'NanoCell Therapeutics'
  },
  'success.story1.description': {
    en: 'A revolutionary targeted drug delivery system developed by Dr. Elena Reyes at Munich University faced commercialization challenges. We partnered with Dr. Reyes, helping secure €2.3M in seed funding and building a team of industry experts.',
    de: 'Ein revolutionäres, zielgerichtetes Arzneimittelverabreichungssystem, entwickelt von Dr. Elena Reyes an der Universität München, stand vor Kommerzialisierungsherausforderungen. Wir haben mit Dr. Reyes zusammengearbeitet, halfen bei der Sicherung von 2,3 Mio. € Startkapital und beim Aufbau eines Teams von Branchenexperten.'
  },
  'success.story1.result': {
    en: 'Within 18 months, NanoCell successfully completed preclinical trials and secured a partnership with a major pharmaceutical company.',
    de: 'Innerhalb von 18 Monaten schloss NanoCell erfolgreich präklinische Studien ab und sicherte sich eine Partnerschaft mit einem großen Pharmaunternehmen.'
  },
  'success.story1.metrics': {
    en: 'Seed Round: €2.3M | 18-month timeline',
    de: 'Startfinanzierung: 2,3 Mio. € | 18-monatiger Zeitplan'
  },
  'success.story2.title': {
    en: 'CleanTech Innovation',
    de: 'CleanTech-Innovation'
  },
  'success.story2.company': {
    en: 'AquaPure Systems',
    de: 'AquaPure Systems'
  },
  'success.story2.description': {
    en: 'Professor Martin Weber developed a low-cost water purification technology that uses 90% less energy than conventional methods. We helped structure the business model, navigate regulatory approvals, and connect with sustainability-focused investors.',
    de: 'Professor Martin Weber entwickelte eine kostengünstige Wasseraufbereitungstechnologie, die 90% weniger Energie verbraucht als herkömmliche Methoden. Wir halfen bei der Strukturierung des Geschäftsmodells, der Navigation durch behördliche Genehmigungen und der Verbindung mit nachhaltigkeitsorientierten Investoren.'
  },
  'success.story2.result': {
    en: 'AquaPure secured €3.5M in funding and launched pilot programs in three countries, with potential to provide clean water access to over 200,000 people.',
    de: 'AquaPure sicherte sich 3,5 Mio. € an Finanzierung und startete Pilotprogramme in drei Ländern, mit dem Potenzial, über 200.000 Menschen Zugang zu sauberem Wasser zu verschaffen.'
  },
  'success.story2.metrics': {
    en: 'Series A: €3.5M | 3 international pilots',
    de: 'Serie A: 3,5 Mio. € | 3 internationale Pilotprojekte'
  },

  // Metrics Section
  'metrics.title': {
    en: 'Our Impact',
    de: 'Unsere Wirkung'
  },
  'metrics.subtitle': {
    en: 'Real results from our partnerships with innovative researchers',
    de: 'Echte Ergebnisse aus unseren Partnerschaften mit innovativen Forschern'
  },
  'metrics.projects': {
    en: 'Research Projects',
    de: 'Forschungsprojekte'
  },
  'metrics.companies': {
    en: 'Companies Launched',
    de: 'Gegründete Unternehmen'
  },
  'metrics.capital': {
    en: 'Capital Raised',
    de: 'Aufgebrachtes Kapital'
  },
  'metrics.success_rate': {
    en: 'Success Rate',
    de: 'Erfolgsquote'
  },
  'metrics.data_note': {
    en: '*Data as of May 2024',
    de: '*Daten Stand Mai 2024'
  },

  // Testimonials Section
  'testimonials.title': {
    en: 'What Our Partners Say',
    de: 'Was unsere Partner sagen'
  },
  'testimonials.prev': {
    en: 'Previous testimonial',
    de: 'Vorheriges Referenz'
  },
  'testimonials.next': {
    en: 'Next testimonial',
    de: 'Nächstes Referenz'
  },
  'testimonials.goto': {
    en: 'Go to testimonial',
    de: 'Zu Referenz gehen'
  },
  'testimonials.1.quote': {
    en: "S28 Forge transformed our lab research into a thriving startup. They handled the business side seamlessly, allowing our team to focus on the science. Within 12 months, we secured our first major investment round.",
    de: "S28 Forge hat unsere Laborforschung in ein florierendes Startup verwandelt. Sie kümmerten sich nahtlos um die Geschäftsseite und ermöglichten es unserem Team, sich auf die Wissenschaft zu konzentrieren. Innerhalb von 12 Monaten sicherten wir uns unsere erste große Investitionsrunde."
  },
  'testimonials.1.author': {
    en: "Dr. Sophia Chen",
    de: "Dr. Sophia Chen"
  },
  'testimonials.1.title': {
    en: "Researcher & Co-founder, BioMatrix Solutions",
    de: "Forscherin & Mitgründerin, BioMatrix Solutions"
  },
  'testimonials.2.quote': {
    en: "Their equity-for-consulting model aligned our incentives perfectly. S28 became true partners in our journey, not just advisors. Their network of connections in the industry proved invaluable for our market entry.",
    de: "Ihr Equity-for-Consulting-Modell hat unsere Anreize perfekt aufeinander abgestimmt. S28 wurde zu einem echten Partner auf unserem Weg, nicht nur zu Beratern. Ihr Netzwerk von Verbindungen in der Branche erwies sich als unschätzbar wertvoll für unseren Markteintritt."
  },
  'testimonials.2.author': {
    en: "Prof. Marcus Fernandez",
    de: "Prof. Marcus Fernandez"
  },
  'testimonials.2.title': {
    en: "Lead Researcher, CleanTech Innovations",
    de: "Leitender Forscher, CleanTech Innovations"
  },
  'testimonials.3.quote': {
    en: "As an academic, I was skeptical about commercializing my research. S28 Forge guided me through the entire process, from IP strategy to market validation. Their hands-on approach made all the difference.",
    de: "Als Akademikerin war ich skeptisch bezüglich der Kommerzialisierung meiner Forschung. S28 Forge führte mich durch den gesamten Prozess, von der IP-Strategie bis zur Marktvalidierung. Ihr praktischer Ansatz machte den entscheidenden Unterschied."
  },
  'testimonials.3.author': {
    en: "Dr. Emma Williams",
    de: "Dr. Emma Williams"
  },
  'testimonials.3.title': {
    en: "Founder, NanoMed Technologies",
    de: "Gründerin, NanoMed Technologies"
  },
  
  // About Page
  'about.title': {
    en: "About Us",
    de: "Über uns"
  },
  'about.team.title': {
    en: "Our Team",
    de: "Unser Team"
  },
  'about.team.arthur.role': {
    en: "Co-founder",
    de: "Mitgründer"
  },
  'about.team.arthur.description': {
    en: "Arthur is an engineer with a focus on product development and financial structures. In the past Arthur was involved in different projects in the field of creating companies out of research results. Furthermore he has worked in various industrial and consulting companies, where he learned to incorporate technological and economical frameworks.",
    de: "Arthur ist ein Ingenieur mit Fokus auf Produktentwicklung und Finanzstrukturen. In der Vergangenheit war Arthur an verschiedenen Projekten im Bereich der Unternehmensgründung aus Forschungsergebnissen beteiligt. Darüber hinaus hat er in verschiedenen Industrie- und Beratungsunternehmen gearbeitet, wo er lernte, technologische und wirtschaftliche Rahmenbedingungen zu integrieren."
  },
  'about.team.kariem.role': {
    en: "Co-founder",
    de: "Mitgründer"
  },
  'about.team.kariem.description': {
    en: "Kariem has great passion for research and its creative side. In his personal blog he loves to discuss trending topics in the field and to brainstorm new business ideas. Kariem has worked both on the Start-Up and research side of the spectrum and loves to combine different thinking structures to problems.",
    de: "Kariem hat eine große Leidenschaft für Forschung und ihre kreative Seite. In seinem persönlichen Blog diskutiert er gerne aktuelle Themen in diesem Bereich und entwickelt neue Geschäftsideen. Kariem hat sowohl auf der Start-Up- als auch auf der Forschungsseite des Spektrums gearbeitet und liebt es, verschiedene Denkstrukturen zur Lösung von Problemen zu kombinieren."
  },
  'about.partnerships.title': {
    en: "Partnerships",
    de: "Partnerschaften"
  },
  'about.partnerships.aspekt.description': {
    en: "Aspekt supports our mission by providing state-of-the-art prototyping and technical validation, helping us turn innovative research into scalable solutions.",
    de: "Aspekt unterstützt unsere Mission durch die Bereitstellung modernster Prototyping- und technischer Validierungsdienste, die uns helfen, innovative Forschung in skalierbare Lösungen umzuwandeln."
  },
  'about.partnerships.mazal.description': {
    en: "Mazal brings deep expertise in legal, financial, and go-to-market strategy, ensuring that our ventures are built on a solid foundation for growth and success.",
    de: "Mazal bringt tiefgreifendes Fachwissen in den Bereichen Recht, Finanzen und Go-to-Market-Strategie ein und stellt sicher, dass unsere Unternehmungen auf einer soliden Grundlage für Wachstum und Erfolg aufgebaut sind."
  },

  // Workflow Timeline Section
  'workflow.title': {
    en: 'Our Partnership Journey',
    de: 'Unsere Partnerschaftsreise'
  },
  'workflow.subtitle': {
    en: 'From initial consultation to market launch, we\'re with you every step of the way',
    de: 'Von der ersten Beratung bis zur Markteinführung sind wir bei jedem Schritt an Ihrer Seite'
  },
  'workflow.start_journey': {
    en: 'Start Your Journey Today',
    de: 'Starten Sie Ihre Reise heute'
  },

  // S28 Explained Section
  's28explained.title': {
    en: 'The Story Behind S28 Forge',
    de: 'Die Geschichte hinter S28 Forge'
  },
  's28explained.main_text': {
    en: 'The "S28" in our name represents the 28th element on the periodic table — Silicon — the foundation of modern computing and technological innovation. Just as silicon transformed our world, we\'re helping researchers transform their discoveries into real-world applications.',
    de: 'Das "S28" in unserem Namen repräsentiert das 28. Element im Periodensystem — Silizium — die Grundlage moderner Computertechnologie und technologischer Innovation. So wie Silizium unsere Welt verändert hat, helfen wir Forschern, ihre Entdeckungen in reale Anwendungen zu verwandeln.'
  },
  's28explained.partner': {
    en: 'Partner With Us',
    de: 'Werden Sie unser Partner'
  },

  // About Section
  'about.title': {
    en: 'About Us',
    de: 'Über Uns'
  },
  'about.partnerships': {
    en: 'Partnerships',
    de: 'Partnerschaften'
  },
  'about.team_kariem_title': {
    en: 'Co-founder & COO',
    de: 'Mitgründer & COO'
  },
  'about.team_kariem_desc': {
    en: 'Kariem has great passion for research and its creative side. In his personal blog he loves to discuss trending topics in the field and to brainstorm new business ideas. Kariem has worked both on the Start-Up and research side of the spectrum and loves to combine different thinking structures to problems.',
    de: 'Kariem hat eine große Leidenschaft für Forschung und ihre kreative Seite. In seinem persönlichen Blog diskutiert er gerne aktuelle Themen auf diesem Gebiet und entwickelt neue Geschäftsideen. Kariem hat sowohl auf der Start-Up- als auch auf der Forschungsseite gearbeitet und kombiniert gerne verschiedene Denkstrukturen bei Problemen.'
  },
  'about.team_arthur_title': {
    en: 'Founder & CEO',
    de: 'Gründer & CEO'
  },
  'about.team_arthur_desc': {
    en: 'Arthur is an engineer with a focus on product development and financial structures. In the past Arthur was involved in different projects in the field of creating companies out of research results. Furthermore he has worked in various industrial and consulting companies, where he learned to incorporate technological and economical frameworks.',
    de: 'Arthur ist Ingenieur mit Schwerpunkt auf Produktentwicklung und Finanzstrukturen. In der Vergangenheit war Arthur an verschiedenen Projekten im Bereich der Gründung von Unternehmen aus Forschungsergebnissen beteiligt. Darüber hinaus hat er in verschiedenen Industrie- und Beratungsunternehmen gearbeitet, wo er gelernt hat, technologische und wirtschaftliche Rahmenbedingungen zu integrieren.'
  },
  'about.partner_aspekt_desc': {
    en: 'Aspekt supports our mission by providing state-of-the-art prototyping and technical validation, helping us turn innovative research into scalable solutions.',
    de: 'Aspekt unterstützt unsere Mission durch modernste Prototypenerstellung und technische Validierung und hilft uns, innovative Forschung in skalierbare Lösungen umzuwandeln.'
  },
  'about.partner_mazal_desc': {
    en: 'Mazal brings deep expertise in legal, financial, and go-to-market strategy, ensuring that our ventures are built on a solid foundation for growth and success.',
    de: 'Mazal bringt tiefes Fachwissen in Rechts-, Finanz- und Go-to-Market-Strategie ein und stellt sicher, dass unsere Unternehmungen auf einer soliden Grundlage für Wachstum und Erfolg aufgebaut sind.'
  },

  // Values Section
  'values.title': {
    en: 'Our Values',
    de: 'Unsere Werte'
  },
  'values.subtitle': {
    en: 'The principles that guide our work and culture.',
    de: 'Die Prinzipien, die unsere Arbeit und Kultur leiten.'
  },
  'values.integrity_title': {
    en: 'Integrity',
    de: 'Integrität'
  },
  'values.integrity_desc': {
    en: 'We uphold the highest ethical standards and transparency in all partnerships.',
    de: 'Wir halten die höchsten ethischen Standards und Transparenz in allen Partnerschaften ein.'
  },
  'values.collaboration_title': {
    en: 'Collaboration',
    de: 'Zusammenarbeit'
  },
  'values.collaboration_desc': {
    en: 'Working hand-in-hand with researchers and industry experts to co-create solutions.',
    de: 'Hand in Hand mit Forschern und Branchenexperten arbeiten, um gemeinsam Lösungen zu entwickeln.'
  },
  'values.impact_title': {
    en: 'Impact',
    de: 'Wirkung'
  },
  'values.impact_desc': {
    en: 'Driving measurable real-world change through strategic support and commercialization.',
    de: 'Messbare Veränderungen in der realen Welt durch strategische Unterstützung und Kommerzialisierung vorantreiben.'
  },

  // Offer Section
  'offer.title': {
    en: 'Our Offer',
    de: 'Unser Angebot'
  },
  'offer.subtitle': {
    en: 'We transform academic research into market-ready innovations through equity partnerships and co-founding ventures.',
    de: 'Wir transformieren akademische Forschung in marktreife Innovationen durch Eigenkapitalpartnerschaften und Mitgründung von Unternehmen.'
  },
  'offer.venture_title': {
    en: 'Venture Building',
    de: 'Unternehmensaufbau'
  },
  'offer.venture_desc': {
    en: 'We co-found and build spinoffs together with researchers. Through our equity-for-consulting model, we take on the business side while you focus on your research and technology.',
    de: 'Wir gründen und bauen Ausgründungen gemeinsam mit Forschern auf. Durch unser Equity-for-Consulting-Modell übernehmen wir die Geschäftsseite, während Sie sich auf Ihre Forschung und Technologie konzentrieren können.'
  },
  'offer.funding_title': {
    en: 'Funding & Investment',
    de: 'Finanzierung & Investition'
  },
  'offer.funding_desc': {
    en: 'We secure the capital needed to transform your research into a thriving business, connecting you with our network of investors and funding opportunities.',
    de: 'Wir sichern das Kapital, das benötigt wird, um Ihre Forschung in ein florierendes Unternehmen zu verwandeln, und verbinden Sie mit unserem Netzwerk von Investoren und Finanzierungsmöglichkeiten.'
  },
  'offer.business_model': {
    en: 'Business model development',
    de: 'Entwicklung des Geschäftsmodells'
  },
  'offer.goto_market': {
    en: 'Go-to-market strategy',
    de: 'Markteinführungsstrategie'
  },
  'offer.team_assembly': {
    en: 'Team assembly and management',
    de: 'Teamzusammenstellung und -management'
  },
  'offer.grant_support': {
    en: 'Grant application support',
    de: 'Unterstützung bei Förderanträgen'
  },
  'offer.investor_network': {
    en: 'Investor network access',
    de: 'Zugang zum Investorennetzwerk'
  },
  'offer.equity_structuring': {
    en: 'Equity structuring and valuation',
    de: 'Eigenkapitalstrukturierung und Bewertung'
  },
  'offer.contact_us': {
    en: 'Contact Us',
    de: 'Kontaktieren Sie uns'
  },

  // FAQ Section
  'faq.title': {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen'
  },
  'faq.equity_model.question': {
    en: 'What is the equity-for-consulting model?',
    de: 'Was ist das Equity-for-Consulting-Modell?'
  },
  'faq.equity_model.answer': {
    en: 'We provide researchers with funding and business support in exchange for equity in the resulting ventures, aligning incentives and sharing upside.',
    de: 'Wir bieten Forschern Finanzierung und geschäftliche Unterstützung im Austausch für Eigenkapital an den resultierenden Unternehmungen, wobei wir Anreize angleichen und Erfolge teilen.'
  },
  'faq.partner.question': {
    en: 'How can I partner with S28 Forge?',
    de: 'Wie kann ich mit S28 Forge zusammenarbeiten?'
  },
  'faq.partner.answer': {
    en: 'Submit your research summary via our contact form or email us directly. We\'ll schedule a discovery call to explore alignment and next steps.',
    de: 'Reichen Sie Ihre Forschungszusammenfassung über unser Kontaktformular ein oder schreiben Sie uns direkt eine E-Mail. Wir vereinbaren ein Erstgespräch, um die Übereinstimmung und die nächsten Schritte zu besprechen.'
  },
  'faq.fields.question': {
    en: 'Which fields of research do you support?',
    de: 'Welche Forschungsbereiche unterstützen Sie?'
  },
  'faq.fields.answer': {
    en: 'We welcome proposals across sciences, engineering, biotech, AI, and more—any work with clear potential for real-world impact.',
    de: 'Wir begrüßen Vorschläge aus den Bereichen Wissenschaft, Ingenieurwesen, Biotechnologie, KI und mehr - jede Arbeit mit klarem Potenzial für reale Auswirkungen.'
  },
  'faq.duration.question': {
    en: 'What is the typical engagement duration?',
    de: 'Wie lange dauert eine typische Zusammenarbeit?'
  },
  'faq.duration.answer': {
    en: 'Most partnerships last 6–18 months, but timelines vary based on project scope and development stages.',
    de: 'Die meisten Partnerschaften dauern 6-18 Monate, aber die Zeitpläne variieren je nach Projektumfang und Entwicklungsphasen.'
  },
  'faq.ip.question': {
    en: 'Do I retain IP ownership?',
    de: 'Behalte ich die IP-Eigentumsrechte?'
  },
  'faq.ip.answer': {
    en: 'Researchers retain underlying IP; we negotiate licensing terms that balance control with commercialization needs.',
    de: 'Forscher behalten die zugrunde liegenden IP-Rechte; wir verhandeln Lizenzbestimmungen, die Kontrolle mit Kommerzialisierungsbedürfnissen in Einklang bringen.'
  },

  // Contact Section
  'contact.title': {
    en: 'Get in Touch',
    de: 'Kontakt aufnehmen'
  },
  'contact.form.name': {
    en: 'Name',
    de: 'Name'
  },
  'contact.form.email': {
    en: 'Email',
    de: 'E-Mail'
  },
  'contact.form.organization': {
    en: 'Organization',
    de: 'Organisation'
  },
  'contact.form.message': {
    en: 'Message',
    de: 'Nachricht'
  },
  'contact.form.send': {
    en: 'Send',
    de: 'Senden'
  },
  'contact.form.sending': {
    en: 'Sending...',
    de: 'Wird gesendet...'
  },
  'contact.phone': {
    en: 'Phone',
    de: 'Telefon'
  },
  'contact.location': {
    en: 'Location',
    de: 'Standort'
  },
  'contact.ready_transform': {
    en: 'Ready to transform your research into impact? We\'re here to help you navigate the journey from lab to market.',
    de: 'Bereit, Ihre Forschung in Wirkung umzusetzen? Wir helfen Ihnen, den Weg vom Labor zum Markt zu meistern.'
  },

  // Footer
  'footer.legal': {
    en: 'Impressum / Legal Notice',
    de: 'Impressum / Rechtliche Hinweise'
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    de: 'Datenschutzerklärung'
  },
  'footer.language': {
    en: 'EN / DE',
    de: 'EN / DE'
  }
};

const LanguageContext = createContext<TranslationContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  translate: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
  };
  
  const translate = (key: string): string => {
    const translation = defaultTranslations[key as keyof typeof defaultTranslations];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[currentLanguage] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;