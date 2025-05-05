import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const { translate, currentLanguage } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xqaqebbo", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept-Language": currentLanguage 
        },
        body: JSON.stringify({
          ...formData,
          language: currentLanguage
        }),
      });
      if (!response.ok) {
        throw new Error(currentLanguage === 'en' ? "Network response was not ok" : "Netzwerkantwort war nicht in Ordnung");
      }
      toast({
        title: currentLanguage === 'en' ? "Message sent!" : "Nachricht gesendet!",
        description: currentLanguage === 'en' ? "We'll get back to you as soon as possible." : "Wir melden uns so schnell wie möglich bei Ihnen.",
      });
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error: any) {
      toast({
        title: currentLanguage === 'en' ? "Error sending message" : "Fehler beim Senden der Nachricht",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-6">
        <input 
          type="text"
          name="name"
          placeholder={translate('contact.form.name')}
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      
      <div className="mb-6">
        <input 
          type="email"
          name="email"
          placeholder={translate('contact.form.email')}
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      
      <div className="mb-6">
        <input 
          type="text"
          name="organization"
          placeholder={translate('contact.form.organization')}
          value={formData.organization}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      
      <div className="mb-8">
        <textarea 
          name="message"
          placeholder={translate('contact.form.message')}
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="input-field resize-none"
        />
      </div>
      
      <div className="text-center">
        <button 
          type="submit" 
          className="btn-primary w-full max-w-xs"
          disabled={isSubmitting}
        >
          {isSubmitting ? translate('contact.form.sending') : translate('contact.form.send')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
