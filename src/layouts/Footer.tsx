import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/elimbyleslie',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:elimbyleslie18@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Leslie Elimby. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;