import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A calculator for structural component sizes and rebar computations.'

export const draft2Dimen: Project = {
  slug: 'draft2dimen',
  title: 'Draft2Dimen',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Electron', 'React', 'TypeScript', '@react-pdf'],
  features: [
    'Structural component calculations',
    'Rebar computations',
    'PDF export',
  ],
  role: 'Software developer',
  dateRange: dateRange('2025-03', '2025-05', 'Mar. 2025 – May 2025'),
  featured: false,
  links: {},
  images: buildProjectImages('draft2dimen', [
    'pdf-export.webp',
    'component-calc.webp',
  ]),
  overview: description,
  contribution:
    'Generated PDF files with @react-pdf; implemented structural component calculations and formulas. Learned how to work with clients and a UI/UX Designer.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 5,
}
