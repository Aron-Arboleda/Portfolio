import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A calculator for structural component sizes and rebar computations.'

export const draft2Dimen: Project = {
  slug: 'draft2dimen',
  title: 'Draft2Dimen',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Electron', 'React', 'TypeScript', '@react-pdf'],
  techStackDetails: [
    {
      name: 'Electron',
      note: 'A framework for building cross-platform desktop applications with web technologies. This was used to build the desktop application using web technologies.',
    },
    {
      name: 'React',
      note: 'A frontend framework that is easy to learn and use. This was used to build the frontend of the desktop application.',
    },
    {
      name: 'TypeScript',
      note: "A programming language that is a superset of JavaScript that is the go-to language for frontend development in today's generation because of its type safety and scalability.",
    },
    {
      name: '@react-pdf',
      note: 'A highly efficient library for generating PDF files with React. This was used to generate the PDF files that shows the calculator computation per component.',
    },
  ],
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
  challenges: [
    'Debugging the PDF Pages',
    'Making the application more user-friendly',
  ],
  learnings: [
    'Learned how to work with clients and a UI/UX Designer',
    'Learned how to make use of ELectron boilerplates in Github',
  ],
  sortOrder: 5,
}
