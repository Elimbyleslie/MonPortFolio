import { motion } from 'framer-motion';
import { projectsData } from '../data/project';
import { ProjectCard } from '../components/projectCard';
import {  Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-mainClr/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-hoverClr/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mainClr to-hoverClr mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez quelques-uns de mes projets récents qui démontrent mes compétences en développement Full Stack et design UI/UX
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-mainClr/10 to-hoverClr/10 rounded-2xl border border-mainClr/20">
            <Github className="w-5 h-5 text-mainClr animate-pulse" />
            <p className="text-gray-700 font-semibold">
              Plus de projets disponibles sur{' '}
              <a
                href="https://github.com/elimbyleslie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainClr hover:text-hoverClr underline transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;