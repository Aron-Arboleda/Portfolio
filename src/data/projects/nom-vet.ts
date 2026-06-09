import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
const description =
  'A computing solution managing information for a fictional clinic.'

export const nomVet: Project = {
  slug: 'nom-vet',
  title: 'Nom Veterinary Clinic Information System',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Visual Basic', 'VB.NET'],
  techStackDetails: [
    {
      name: 'Visual Basic',
      note: 'A programming language that is a powerful language for desktop application development.',
    },
    {
      name: 'VB.NET',
      note: 'A programming language that is a powerful language for desktop application development.',
    },
  ],
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
  images: buildProjectImages('nom-vet', [
    'login-page.webp',
    'dashboard-page.webp',
    'booking-page.webp',
    'profile-page.webp',
    'admin-page.webp',
  ]),
  overview: description,
  contribution:
    'Computer Programming 3 Case Study; learned Visual Basic for desktop application development.',
  challenges: [
    'Visual Basic applications sometimes glitches.',
    'Even with the drag and drop feature, it was still a tedious process making the user interface of the application',
  ],
  learnings: [
    'Learned how to use the Visual Basic programming language',
    'Learned how to use the VB.NET programming language',
    'Learned the workflow of Visual Basic applications',
  ],
  sortOrder: 11,
}
