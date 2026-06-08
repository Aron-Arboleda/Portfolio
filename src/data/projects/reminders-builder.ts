import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A simple app for building and creating text reminders efficiently.'

export const remindersBuilder: Project = {
  slug: 'reminders-builder',
  title: 'Reminders Builder',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Java', 'JavaSwing'],
  features: [
    'Text reminder creation',
    'Text file database',
    'GUI application',
  ],
  role: 'Software developer',
  dateRange: dateRange('2023-04', '2023-05', 'Apr. 2023 – May 2023'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/RemindersBuilder',
  },
  images: buildProjectImages('reminders-builder', [
    'reminder-list.webp',
    'create-reminder.webp',
  ]),
  overview: description,
  contribution:
    'Computer Programming 1 Case Study; learned basic text file database systems and GUI application development.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 10,
}
