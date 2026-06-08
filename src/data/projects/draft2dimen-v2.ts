import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A calculator for computing sizes of structural components (Columns, Beams, Footing, Slab) with rebar and cost computation.'

export const draft2DimenV2: Project = {
  slug: 'draft2dimen-v2',
  title: 'Draft2Dimen v2',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Electron', 'React', 'TypeScript'],
  features: [
    'Structural component calculations',
    'Local saving',
    'Steel formula computation',
    'Cost computation',
  ],
  role: 'Developer of the project',
  dateRange: dateRange('2026-04', '2026-05', 'Apr. 2026 – May 2026'),
  featured: false,
  links: {},
  images: buildProjectImages('draft2dimen-v2', [
    'calculator.webp',
    'cost-report.webp',
    'local-save.webp',
  ]),
  overview: description,
  contribution:
    'Modified the application; added local saving, steel formula, and cost computation.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 3,
}
