import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A full-stack web application for the NGO "Liwanag at Dunong Project."'

export const liwanagAtDunong: Project = {
  slug: 'liwanag-at-dunong',
  title: 'Liwanag at Dunong Website',
  tagline: description,
  description,
  categories: ['fullstack'],
  techStack: ['PHP', 'MySQL', 'React', 'JavaScript'],
  features: [
    'Volunteer application forms',
    'Admin dashboard',
    'Organization web presence',
  ],
  role: 'Software developer',
  dateRange: dateRange('2024-11', '2025-01', 'Nov. 2024 – Jan. 2025'),
  featured: true,
  links: {
    live: 'https://liwanagatdunongproject.ct.ws/',
  },
  images: buildProjectImages('liwanag-at-dunong', [
    'landing.webp',
    'volunteer-form.webp',
    'admin-dashboard.webp',
  ]),
  overview: description,
  contribution:
    'Handled volunteer applications with forms and an admin dashboard for the NGO.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 6,
}
