import React from 'react';
import { Code, Server, Palette  } from 'lucide-react';
import { skillsData } from '../data/skills';

// Map des icônes
const iconMap = {
  Code: Code,
  Server: Server,
  Palette : Palette ,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-mainClr mb-4">
          Mes Compétences
        </h2>
        <div className="w-20 h-1 bg-mainClr mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            // Récupérer le composant d'icône
            const IconComponent = iconMap[skill.iconName];
            
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl  shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-mainClr mb-4">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-mainClr">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;