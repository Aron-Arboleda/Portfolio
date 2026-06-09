import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A Python CLI program that gamifies productivity with quest-style to-do lists, achievements, EXP leveling, coins, and an in-game shop.'

export const pivit: Project = {
  slug: 'pivit',
  title: 'Pivit',
  tagline: description,
  description,
  categories: ['cli'],
  techStack: ['Python'],
  techStackDetails: [
    {
      name: 'Python',
      note: 'Core language for the CLI — accounts, quests, achievements, and shop logic.',
    },
  ],
  features: [
    'To-do lists framed as daily quests',
    'Gamified achievements system',
    'Character profile with EXP leveling',
    'Coins earned from quests and achievements',
    'In-game shop for purchasing items',
  ],
  role: 'Sole developer',
  dateRange: dateRange('2022-10', '2022-11', 'Oct. 2022'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/Pivit',
  },
  images: buildProjectImages('pivit', [
    'profile.webp',
    'quests.webp',
    'shop.webp',
    'update.webp',
  ]),
  overview: description,
  contribution:
    'Designed and built the full CLI experience — account system, quest management, achievements, leveling, and shop economy.',
  challenges: [
    'CLI-only interface with no graphical UI — noted as an early first project.',
    'User data stored in plain text files rather than a secured database.',
  ],
  learnings: [
    'Learned Python fundamentals through a complete interactive program.',
    'Explored gamification patterns for motivation and engagement.',
    'Built persistence with local text-based data files.',
  ],
  sortOrder: 13,
}
