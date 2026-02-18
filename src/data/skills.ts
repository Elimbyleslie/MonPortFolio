// Option 1 : Stocker uniquement les noms des icônes (Recommandé)
export interface Skill {
  iconName: 'Code' | 'Server' | 'Palette';
  title: string;
  items: string[];
}

export const skillsData: Skill[] = [
  {
    iconName: 'Code',
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux', 'Framer Motion', 'Vite','Html5', 'Css3', 'Javascript','Bootstrap', 'Tailwind CSS'],
  },
  {
    iconName: 'Server',
    title: 'Backend',
    items: ['Node.js', 'Express', 'Prisma', 'MySql', 'MongoDB', 'REST API'],
  },
  {
    iconName: 'Palette',
    title: 'Design Ui & Ux',
    items: ['Adobe XD', 'Figma', 'Canva',],
  },
];