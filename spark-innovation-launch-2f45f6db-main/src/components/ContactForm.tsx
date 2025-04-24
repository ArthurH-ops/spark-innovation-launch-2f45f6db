
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-6">
        <input 
          type="text"
          name="name"
          placeholder="Name"
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
          placeholder="Email"
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
          placeholder="Organization"
          value={formData.organization}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      
      <div className="mb-8">
        <textarea 
          name="message"
          placeholder="Message"
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
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
