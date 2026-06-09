import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A simple app for building and creating text reminders efficiently.'

export const remindersBuilder: Project = {
  slug: 'reminders-builder',
  title: 'Reminders Builder',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Java', 'JavaSwing'],
  techStackDetails: [
    {
      name: 'Java',
      note: 'A programming language that is a powerful language for desktop application development.',
    },
    {
      name: 'JavaSwing',
      note: 'A library for building desktop applications with Java.',
    },
  ],
  features: ['Text reminder creation', 'Text file database', 'GUI application'],
  role: 'Software developer',
  dateRange: dateRange('2023-04', '2023-05', 'Apr. 2023 – May 2023'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/RemindersBuilder',
  },
  images: buildProjectImages('reminders-builder', [
    'home-page.webp',
    'create-reminder.webp',
    'update-reminder.webp',
    'collections.webp',
  ]),
  overview: description,
  contribution:
    'Computer Programming 1 Case Study; learned basic text file database systems and GUI application development.',
  challenges: [
    'Manual coding everything (still no chatgpt at this point in time)',
    'Debugging the application',
  ],
  learnings: [
    'Learned how to use the Java programming language',
    'Learned how to use the Java Swing components',
    'Learned how to do Object Oriented Programming',
    'Learned how to make desktop applications using JavaSwing',
  ],
  sortOrder: 12,
}
