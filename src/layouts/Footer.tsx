import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  scrollToSection?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/elimbyleslie',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Mail,
      href: 'mailto:elimbyleslie18@gmail.com',
      label: 'Email',
      color: 'hover:bg-mainClr',
    },
  ];

  const quickLinks = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mainClr/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hoverClr/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal */}
        <div className="py-12 grid md:grid-cols-3 gap-12 border-b border-white/10">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-mainClr to-hoverClr">
              Leslie Elimby
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Développeuse Full Stack passionnée par la création d'applications web innovantes et performantes.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div>
            <h4 className="text-lg font-black mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection?.(link.id)}
                    className="text-gray-400 hover:text-mainClr transition-colors font-medium hover:translate-x-1 inline-block transform duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="text-lg font-black mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:elimbyleslie18@gmail.com"
                  className="hover:text-mainClr transition-colors"
                >
                  elimbyleslie18@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+237694180923"
                  className="hover:text-mainClr transition-colors"
                >
                  +237 694 180 923
                </a>
              </li>
              <li className="text-gray-500">Douala, Cameroun</li>
            </ul>

            {/* Badge disponibilité */}
            
          </div>
        </div>

        {/* Footer bas */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Leslie Elimby. Fait avec
           <span className="text-mainClr font-bold">React</span>
          </p>

          {/* Bouton scroll to top */}
          <button
            onClick={scrollToTop}
            className="group p-3 bg-mainClr hover:bg-hoverClr rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;