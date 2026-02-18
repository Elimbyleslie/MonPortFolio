import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';
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
      validateEmailData(formData);
      await sendEmail(formData);

      toast.success('Message envoyé avec succès ! Je vous répondrai bientôt.', {
        position: 'top-right',
        autoClose: 5000,
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    } catch (error) {
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
      icon: Mail,
      title: 'Email',
      value: 'elimbyleslie18@gmail.com',
      href: 'mailto:elimbyleslie18@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+237 694 180 923',
      href: 'tel:+237694180923',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Douala, Cameroun',
      href: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Décorations animées */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mainClr/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hoverClr/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Restons en contact
          </span>
          <h2 className="text-5xl font-black mb-4">Contactez-moi</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mainClr to-hoverClr mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un projet en tête ? Une opportunité à discuter ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12  max-sm:grid-cols-1 ">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/5  max-sm:w-full   backdrop-blur-md rounded-3xl p-4 border border-white/10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-mainClr" />
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-white hover:text-mainClr transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-br from-mainClr/20 to-hoverClr/20 backdrop-blur-md rounded-3xl p-6 border border-mainClr/30">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-mainClr shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-lg mb-2">Disponibilité</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Actuellement ouverte aux opportunités et aux collaborations. Temps de réponse moyen : 24-48h.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-black mb-6">Envoyez un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block mb-2 font-bold text-sm uppercase tracking-wide text-gray-300">
                  Votre nom *
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-mainClr focus:outline-none focus:ring-2 focus:ring-mainClr/50 transition-all text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-2 font-bold text-sm uppercase tracking-wide text-gray-300">
                  Votre email *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-mainClr focus:outline-none focus:ring-2 focus:ring-mainClr/50 transition-all text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-bold text-sm uppercase tracking-wide text-gray-300">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-mainClr focus:outline-none focus:ring-2 focus:ring-mainClr/50 transition-all resize-none text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-mainClr to-hoverClr text-white rounded-xl font-black shadow-2xl hover:shadow-mainClr/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;