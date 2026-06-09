import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A GIS that uses machine learning (neural networks) to estimate borehole information in Tarlac.'

export const liquefact: Project = {
  slug: 'liquefact',
  title: 'LIQUEFACT',
  tagline: description,
  description,
  categories: ['web'],
  techStack: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'FastAPI'],
  features: [
    'Geographical Information System interface',
    'Neural network borehole estimation',
    'FastAPI backend integration',
  ],
  role: 'Developer of the project',
  dateRange: dateRange('2026-05', '2026-05', 'May 2026'),
  featured: true,
  links: {
    live: 'https://liquefact-web.vercel.app/',
  },
  images: buildProjectImages('liquefact', [
    'map.webp',
    'prediction.webp',
    'ui-detail.webp',
  ]),
  overview: description,
  contribution:
    'Implemented a neural network using Python with a FastAPI backend and integrated it into a React GIS web application.',
  challenges: [
    'Borehole data collection and preprocessing.',
    'Neural network training and evaluation.',
    'FastAPI backend integration.',
    'React GIS web application development.',
  ],
  learnings: [
    'Neural networks are powerful for borehole estimation.',
    'FastAPI is a great backend for scalable applications.',
    'React GIS web applications are a great way to visualize data.',
    'The combination of neural networks and FastAPI is a powerful way to estimate borehole information.',
  ],
  sortOrder: 2,
}
