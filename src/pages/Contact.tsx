import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import { sendEmail, validateEmailData, EmailData } from '../services/emailServices';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EmailData>({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation
      validateEmailData(formData);

      // Envoi de l'email
      await sendEmail(formData);

      // Succès
      toast.success('Message envoyé avec succès ! Je vous répondrai bientôt.', {
        position: 'top-right',
        autoClose: 5000,
      });

      // Réinitialiser le formulaire
      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    } catch (error) {
      // Erreur
      const message = error instanceof Error ? error.message : 'Une erreur est survenue';
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-mainClr   flex-shrink-0" />,
      title: 'Email',
      value: 'elimbyleslie18@gmail.com',
      href: 'mailto:elimbyleslie18@gmail.com',
    },
    {
      icon: <Phone className="w-8 h-8 text-mainClr flex-shrink-0" />,
      title: 'Téléphone',
      value: '+237 694 180 923',
      href: 'tel:+237694180923',
    },
    {
      icon: <MapPin className="w-8 h-8 text-mainClr flex-shrink-0" />,
      title: 'Localisation',
      value: 'Douala, Cameroun',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Contactez-moi</h2>
        <div className="w-20 h-1 bg-mainClr mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                {info.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-mainClr transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block mb-2 font-medium">
                Nom
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-mainClr focus:outline-none transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-mainClr focus:outline-none transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-mainClr focus:outline-none transition-colors resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-mainClr text-white rounded-lg font-semibold hover:bg-hoverClr transform hover:-translate-y-1 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;