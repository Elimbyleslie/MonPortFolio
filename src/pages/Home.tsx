import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-mainClr via-[#24cab4] to-hoverClr text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Leslie Elimby
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay-1">
          Développeuse Full Stack | Passionnée par la création d'applications
          innovantes
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-white text-mainClr rounded-full font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-mainClr transition-all duration-300"
          >
            Me contacter
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.2s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s backwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;