import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A web application for automated product inventory and RFID management using GS1-compliant SGTIN-96 code generation.'

export const inventeer: Project = {
  slug: 'inventeer',
  title: 'Inventeer',
  tagline: description,
  description,
  categories: ['web'],
  techStack: [
    'React',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'React Router',
  ],
  techStackDetails: [
    {
      name: 'React',
      note: 'Modern UI framework used to build the single and bulk product record generation interface.',
    },
    {
      name: 'TypeScript',
      note: 'Ensures type safety and maintainability across the entire application.',
    },
    {
      name: 'TailwindCSS',
      note: 'Utility-first CSS framework for rapid and consistent styling.',
    },
    {
      name: 'shadcn/ui',
      note: 'Reusable UI components built on Radix UI for a polished user experience.',
    },
    {
      name: 'React Router',
      note: 'Handles client-side routing for the dashboard and bulk generator pages.',
    },
  ],
  features: [
    'Single and bulk SGTIN-96 RFID code generation',
    'GS1-compliant RFID product record management',
    'Direct spreadsheet export capabilities',
    'Automated supply chain tracking',
    'Fast and modern UI with instant feedback',
    'Table output formatted for printing and spreadsheet import',
  ],
  role: 'Project Assistant & Web Developer (Trackerteer Internship)',
  dateRange: dateRange('2025-06', '2025-07', 'June 2025 – July 2025'),
  featured: false,
  links: {
    live: 'https://inventeer.vercel.app/',
    repo: 'https://github.com/Aron-Arboleda/Inventeer',
  },
  images: buildProjectImages('inventeer', [
    'generator.webp',
    'bulk-generator.webp',
  ]),
  overview:
    'Inventeer is a production-ready web application for generating product records with attached RFID codes using the SGTIN-96 standard. Built for both single (per-order) and bulk generation workflows, it streamlines the creation and export of RFID-tagged product data for manufacturing, logistics, and retail supply chain operations.',
  contribution:
    'Developed the frontend interfaces using React and TypeScript, implementing user interfaces with Tailwind CSS and shadcn/ui to create reusable and consistent components across the application. Engineered automated GS1-compliant SGTIN-96 RFID code generation with direct spreadsheet export capabilities.',
  challenges: [
    'Understanding GS1 and SGTIN-96 standards for RFID compliance.',
    'Building efficient bulk generation workflows for large product batches.',
    'Designing intuitive UI for complex RFID code management.',
  ],
  learnings: [
    'Mastered React and TypeScript in a production-ready environment.',
    'Gained understanding of supply chain automation and RFID technology.',
    'Learned to work with modern UI libraries (shadcn/ui) and styling frameworks (TailwindCSS).',
    'Developed ability to translate complex business requirements into user-friendly interfaces.',
  ],
  sortOrder: 4,
}
