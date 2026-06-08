import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'An Arduino-based gas and smoke detector device for a Digital Design course final case study.'

export const gasSmokeDetector: Project = {
  slug: 'gas-smoke-detector',
  title: 'Arduino Gas & Smoke Warning System',
  tagline: description,
  description,
  categories: ['hardware'],
  techStack: ['C++', 'Arduino'],
  features: ['Gas detection', 'Smoke detection', 'Warning alert system'],
  role: 'Electronics engineer of the project',
  dateRange: dateRange('2025-04', '2025-05', 'Apr. 2025 – May 2025'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/GasAndSmokeDetector',
  },
  images: buildProjectImages('gas-smoke-detector', [
    'device.webp',
    'wiring.webp',
    'demo.webp',
  ]),
  overview: description,
  contribution: 'Electronics engineer of the project — designed and built the detector device.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 4,
}
