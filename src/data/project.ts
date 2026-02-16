// src/data/projectsData.ts
import agropulseImg from '../assets/Capture d’écran (130).png';
import portfolioImg from '../assets/Capture d’écran (123).png';
import elearningImg from '../assets/Capture d’écran (124).png';

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  https?: string;
}

export const projectsData: Project[] = [
  {
    image: agropulseImg,
    title: 'AgroPulse',
    description:
      'Plateforme de gestion agricole moderne avec suivi des animaux, fermes et organisations en temps réel (En Cours de developpement).',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'MySql', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Vite'],
    link: '#',
    github: 'https://github.com/elimbyleslie/agropulse',
  },
  {
    image: portfolioImg,
    title: 'Portfolio Interactif',
    description:
      'Site portfolio moderne avec animations fluides, design responsive et interface intuitive.',
    tags: ['Html5', 'Css3', 'Javascript', 'Tailwind CSS'],
    link: '#',
    github: 'https://github.com/elimbyleslie/portfolio',
  },
  {
    image: elearningImg,
    title: 'Design Ui & Ux',
    description:
      'Application mobile d\'apprentissage en ligne',
    tags: ['Figma'],
    github:'https://www.figma.com/proto/JThp5qRnqqtvsVZJJ6fHst/Untitled?node-id=0-1&t=g5HYT0exndEbcQyY-1'
 },
];

