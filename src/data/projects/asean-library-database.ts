import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A Microsoft Access database for ASEAN Library data — books, reading materials, pictures, and paintings that help conserve the culture of ASEAN countries.'

export const aseanLibraryDatabase: Project = {
  slug: 'asean-library-database',
  title: 'ASEAN Library Database',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Microsoft Access'],
  techStackDetails: [
    {
      name: 'Microsoft Access',
      note: 'RDBMS case study — ERD design, entity relationships, forms, queries, and data lifecycle management.',
    },
  ],
  features: [
    'Data storage for ASEAN literature and cultural materials',
    'User interfaces to navigate and manage records',
    'Robust input validation with MS Access code blocks',
    'Filtering and sorting across library data',
  ],
  role: 'Sole developer',
  dateRange: dateRange('2024-11', undefined, 'Nov. 2024'),
  featured: false,
  links: {},
  images: buildProjectImages('asean-library-database', [
    'home-page.webp',
    'fields-input-form.webp',
    'file-input-form.webp',
    'author-form.webp',
    'country-form.webp',
    'file-languages-form.webp',
    'file-subjects-form.webp',
  ]),
  overview:
    'CC6 (Information Management) case study implementing a relational database with Microsoft Access — covering ERD construction, entity relationships, data lifecycle management, and a functional library system for ASEAN cultural materials.',
  contribution:
    'Designed the database schema, built forms and queries, and implemented navigation and data-management workflows in MS Access.',
  challenges: [
    'Database-only deliverable — not integrated with a live web or mobile application.',
    'Limited security features and dataset scope for a classroom case study.',
  ],
  learnings: [
    'Applied RDBMS concepts through hands-on ERD and table design.',
    'Learned data lifecycle management in a desktop database environment.',
    'Built functional forms, filters, and sorting with MS Access.',
  ],
  sortOrder: 14,
}
