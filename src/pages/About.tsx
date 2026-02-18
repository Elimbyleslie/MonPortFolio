import React from "react";
import MyPhoto from "../assets/WhatsApp Image 2025-05-27 à 16.27.44_94925a77.jpg";
import { Code2, Palette, Zap, Heart, Sparkles } from "lucide-react";

interface AboutProps {
  scrollToSection: (section: string) => void;
}

const About: React.FC<AboutProps> = () => {
  const skills = [
    { icon: Code2, label: "Full Stack Dev", color: "text-blue-500" },
    { icon: Palette, label: "UI/UX Design", color: "text-purple-500" },
    { icon: Zap, label: "Performance", color: "text-yellow-500" },
    { icon: Heart, label: "User-Centric", color: "text-rose-500" },
  ];

  const techs = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Décorations arrière-plan */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mainClr/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hoverClr/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-mainClr/10 text-mainClr rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Qui suis-je ?
          </span>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mainClr to-hoverClr mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo avec badge flottants */}
          <div className="relative flex justify-center group">
            {/* Badge flottant 1 */}
            <div className="absolute -top-4 -left-4 bg-white shadow-lg rounded-2xl p-3 animate-bounce z-10">
              <Code2 className="w-6 h-6 text-mainClr" />
            </div>

            {/* Badge flottant 2 */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-2xl p-3 animate-pulse z-10">
              <Palette className="w-6 h-6 text-hoverClr" />
            </div>

            {/* Photo principale */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mainClr to-hoverClr rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative border-8 rounded-full border-white shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={MyPhoto}
                  alt="Leslie Elimby"
                  className="rounded-full w-96 h-96 object-cover max-sm:w-64 max-sm:h-64"
                />
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="space-y-8">
            {/* Intro */}
            <div className="space-y-4 max-sm:text-center">
              <h3 className="text-3xl font-black text-gray-900">
                Bonjour ! Je suis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainClr to-hoverClr">
                  Leslie Elimby
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Développeuse Full Stack Junior passionnée par la création
                d'applications web modernes, performantes et le design
                d'interface UI & UX.
              </p>
            </div>

            {/* Compétences clés */}
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 ">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className={`p-2 bg-gray-50 rounded-xl ${skill.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">
                      {skill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Description détaillée */}
            <p className="text-gray-600 leading-relaxed max-sm:text-center">
              Je perfectionne en continu mes compétences en{" "}
              <strong className="text-mainClr">React</strong>,{" "}
              <strong className="text-mainClr">TypeScript</strong>,{" "}
              <strong className="text-mainClr">Node.js</strong> et dans les
              technologies web modernes. Je conçois des solutions digitales
              propres, évolutives et centrées utilisateur.
            </p>

            {/* Tags techno */}
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-mainClr hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Valeurs */}
            <div className="bg-gradient-to-r  from-mainClr/10 to-hoverClr/10 rounded-2xl p-6 border border-mainClr/20">
              <p className="text-gray-700 leading-relaxed italic">
                "Mon approche mêle <strong>créativité</strong>,{" "}
                <strong>rigueur</strong> et{" "}
                <strong>apprentissage continu</strong> pour créer des projets
                toujours plus aboutis. Curieuse, adaptable et rigoureuse,
                j'évolue efficacement dans des environnements collaboratifs et
                multiculturels."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;