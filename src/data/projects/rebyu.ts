import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A full-stack web app using pixelated graphics for gamified flashcard learning.'

export const rebyu: Project = {
  slug: 'rebyu',
  title: 'Rebyu: Gamified Flashcards',
  tagline: description,
  description,
  categories: ['fullstack'],
  techStack: ['PHP', 'MySQL', 'React', 'JavaScript'],
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
    'gameplay.webp',
    'flashcards.webp',
    'pixel-ui.webp',
  ]),
  overview: description,
  contribution:
    'Customized UI implementation with a UI/UX Designer.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 7,
}
