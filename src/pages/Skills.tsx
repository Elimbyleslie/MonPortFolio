import React from 'react';
import { Code, Server, Palette, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';

// Map des icônes
const iconMap = {
  Code: Code,
  Server: Server,
  Palette: Palette,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 bg-white overflow-hidden">
   

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mainClr to-hoverClr mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies  et outils que j'utilise pour vous créer des solutions digitales complètes
          </p>
        </div>

        {/* Grille de compétences */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName];
            
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                }}
              >
                {/* Gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-mainClr/5 to-hoverClr/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône avec background animé */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-mainClr to-hoverClr rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative p-4 bg-gradient-to-br from-mainClr to-hoverClr rounded-2xl text-white transform group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-black mb-6 text-gray-900 group-hover:text-mainClr transition-colors">
                    {skill.title}
                  </h3>

                  {/* Tags de compétences */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-mainClr hover:text-white transition-all duration-300 cursor-default"
                        style={{
                          animation: `fadeIn 0.4s ease-out ${0.8 + i * 0.05}s backwards`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-mainClr/10 to-hoverClr/10 rounded-full border border-mainClr/20">
            <Sparkles className="w-5 h-5 text-mainClr animate-pulse" />
            <p className="text-gray-700 font-semibold">
              Toujours curieuse d'apprendre de nouvelles technologies
            </p>
          </div>
        </div>
      </div>

      <style>{`
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;