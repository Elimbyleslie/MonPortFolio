import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Code2, Palette } from "lucide-react";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Développeuse Full Stack";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-mainClr via-[#24cab4] to-hoverClr text-white relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-40 right-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-20 -right-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Code2 className="absolute top-1/4 left-[10%] w-12 h-12 opacity-20 animate-float" />
        <Palette className="absolute top-1/3 right-[15%] w-10 h-10 opacity-20 animate-float animation-delay-2000" />
        <Sparkles className="absolute bottom-1/3 left-[20%] w-8 h-8 opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Badge animé */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-8 animate-fade-in border border-white/30">
          <span>Disponible pour de nouveaux projets</span>
        </div>

        {/* Nom avec gradient */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in">
          <span className="inline-block">Leslie</span>{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Elimby
          </span>
        </h1>

        {/* Titre avec effet typing */}
        <div className="h-16 md:h-20 mb-8">
          <p className="text-2xl md:text-3xl font-bold opacity-95 animate-fade-in-delay-1">
            {typedText}
            <span className="inline-block w-0.5 h-8 md:h-10 bg-white ml-1 animate-blink"></span>
          </p>
          <p className="text-lg md:text-xl opacity-80 mt-2 animate-fade-in-delay-2">
            Passionnée par la création d'applications innovantes
          </p>
        </div>

        {/* Stats rapides */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-delay-2">
          {[
            { label: "Projets", value: "10+" },
            { label: "Technologies", value: "10+" },
            { label: "Expérience", value: "2 ans" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s backwards`,
              }}
            >
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-4 py-2 bg-white text-mainClr hover:bg-mainClr hover:text-white hover:transition-all hover:ease-in-out hover:duration-400  rounded-full font-bold shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-400 overflow-hidden"
          >
            voir mes projets
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-4 py-2 border-2 border-white rounded-full font-bold hover:bg-white hover:text-mainClr transition-all duration-300 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Me contacter
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
            </span>
          </button>
        </div>

        {/* Scroll Indicator amélioré */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 group"
          aria-label="Défiler vers le bas"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Découvrir plus
            </span>
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <ChevronDown size={24} />
            </div>
          </div>
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
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s backwards;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s backwards;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;