import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A full-stack web application for the NGO "Liwanag at Dunong Project."'

export const liwanagAtDunong: Project = {
  slug: 'liwanag-at-dunong',
  title: 'Liwanag at Dunong Website',
  tagline: description,
  description,
  categories: ['fullstack', 'web'],
  techStack: ['PHP', 'MySQL', 'React', 'JavaScript'],
  techStackDetails: [
    {
      name: 'PHP',
      note: 'A programming language that is a powerful language for web application development.',
    },
    {
      name: 'MySQL',
      note: 'A database management system that is a powerful database management system for web application development.',
    },
    {
      name: 'React',
      note: 'A frontend framework that is a powerful frontend framework for web application development.',
    },
    {
      name: 'JavaScript',
      note: 'A programming language that is a powerful programming language for web application development.',
    },
  ],
  features: [
    'Volunteer application forms',
    'Admin dashboard',
    'Organization web presence',
  ],
  role: 'Software developer',
  dateRange: dateRange('2024-11', '2025-01', 'Nov. 2024 – Jan. 2025'),
  featured: true,
  links: {
    live: 'https://liwanagatdunongproject.ct.ws/',
  },
  images: buildProjectImages('liwanag-at-dunong', [
    'volunteer-form.webp',
    'footer.webp',
    'admin-page.webp',
    'volunteer-submissions-page.webp',
  ]),
  overview: description,
  contribution:
    'Handled volunteer applications with forms and an admin dashboard for the NGO.',
  challenges: [
    'Coding in raw PHP and MySQL',
    'Constructing the database schemas',
    'Establishing the relationships between the tables',
    'Debugging the application',
  ],
  learnings: [
    'Learned how to use PHP and MySQL to build a web application',
    'Learned how to use React to build a web application',
    'Learned how to use JavaScript to build a web application',
  ],
  sortOrder: 6,
}
