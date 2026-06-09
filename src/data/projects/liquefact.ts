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
  techStackDetails: [
    {
      name: 'React',
      note: 'This technology was used because it is a powerful frontend framework that is easy to learn and use.',
    },
    {
      name: 'TypeScript',
      note: "A programming language that is a superset of JavaScript that is the go-to language for frontend development in today's generation because of its type safety and scalability.",
    },
    {
      name: 'TailwindCSS',
      note: 'A CSS framework that is a utility-first CSS framework that is easy to learn and use.',
    },
    {
      name: 'Python',
      note: 'A programming language that is a powerful language for machine learning and data science.',
    },
    {
      name: 'FastAPI',
      note: 'A modern, fast, and production-ready web framework for building APIs with Python 3.7+.',
    },
  ],
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
