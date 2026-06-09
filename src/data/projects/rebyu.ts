import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A full-stack web app using pixelated graphics for gamified flashcard learning.'

export const rebyu: Project = {
  slug: 'rebyu',
  title: 'Rebyu: Gamified Flashcards',
  tagline: description,
  description,
  categories: ['fullstack', 'web'],
  techStack: ['PHP', 'MySQL', 'React', 'JavaScript'],
  techStackDetails: [
    {
      name: 'PHP',
      note: 'A programming language that is a powerful language for web application development.',
    },
    {
      name: 'MySQL',
      note: 'A database management system that is a powerful database management system for web application development.',
    },
    {
      name: 'React',
      note: 'A frontend framework that is a powerful frontend framework for web application development.',
    },
    {
      name: 'JavaScript',
      note: 'A programming language that is a powerful programming language for web application development.',
    },
  ],
  features: [
    'Gamified flashcard learning',
    'Pixelated graphics UI',
    'Full-stack web application',
  ],
  role: 'Software developer',
  dateRange: dateRange('2024-11', '2025-12', 'Nov. 2024 – Dec. 2025'),
  featured: false,
  links: {
    live: 'https://rebyu.ct.ws/',
  },
  images: buildProjectImages('rebyu', [
    'home-page.webp',
    'flashcards-set.webp',
    'study-page.webp',
    'end-screen.webp',
  ]),
  overview: description,
  contribution: 'Customized UI implementation with a UI/UX Designer.',
  challenges: [
    'Setting up the PHP backend files',
    'Deploying the application on the InfinityFree platform',
    'Making the Pixel UIs with Aseprite',
  ],
  learnings: [
    'Learned how to use PHP and MySQL to build a web application',
    'Learned how to use React to build a web application',
    'Learned how to use JavaScript to build a web application',
    'Learned how to use Aseprite to make pixel art',
  ],
  sortOrder: 7,
}
