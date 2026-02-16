import React from "react";
import MyPhoto from "../assets/WhatsApp Image 2025-05-27 à 16.27.44_94925a77.jpg";
interface AboutProps {
  scrollToSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-mainClr ">
          À propos de moi
        </h2>
        <div className="w-20 h-1 bg-mainClr mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <img src={MyPhoto} className=" max-w-96 rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bonjour ! Je suis <strong>Leslie Elimby</strong>, développeuse
              Full Stack Junior passionnée par la création d'applications web
              modernes , performantes et le Design d'interface Ui & Ux.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Développeuse junior en plein apprentissage de{" "}
              <strong>React</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Node.js</strong> et des technologies web, je compense mon
              manque d'expérience par ma capacité d'apprentissage rapide et ma
              passion pour créer des solutions digitales élégantes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mon approche mêle créativité, rigueur et apprentissage continu
              pour créer des projets toujours plus aboutis.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 px-8 py-3 bg-mainClr text-white rounded-full font-semibold hover:bg-hoverClr transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Travaillons ensemble
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
