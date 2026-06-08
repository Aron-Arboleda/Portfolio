import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A computing solution managing information for a fictional clinic.'

export const nomVet: Project = {
  slug: 'nom-vet',
  title: 'Nom Veterinary Clinic Information System',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Visual Basic', 'VB.NET'],
  features: [
    'Clinic information management',
    'Desktop application',
    'Case study solution',
  ],
  role: 'Software developer',
  dateRange: dateRange('2023-05', '2023-05', 'May 2023'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/NomVet',
  },
  images: buildProjectImages('nom-vet', ['dashboard.webp', 'records.webp']),
  overview: description,
  contribution:
    'Computer Programming 3 Case Study; learned Visual Basic for desktop application development.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 9,
}
