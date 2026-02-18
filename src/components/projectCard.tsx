import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../data/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      {/* Image avec overlay gradient */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradient progressif */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Badge flottant */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-mainClr" />
          <span className="text-xs font-bold text-gray-900">Voir le projet</span>
        </div>

        {/* Boutons d'action */}
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Github size={18} />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-mainClr to-hoverClr text-white px-4 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                <ExternalLink size={18} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-mainClr transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-bold border border-purple-100 hover:border-purple-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};