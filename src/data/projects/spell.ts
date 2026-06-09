import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'An app for manual/automatic text editing with grammar checking and spelling correction.'

export const spell: Project = {
  slug: 'spell',
  title: 'SPELL (Self-Processing English Language Lender)',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Java', 'JavaSwing', 'LanguageTool API', 'Launch4j', 'InnoSetup'],
  techStackDetails: [
    {
      name: 'Java',
      note: 'A programming language that is a powerful language for desktop application development.',
    },
    {
      name: 'JavaSwing',
      note: 'A library for building desktop applications with Java.',
    },
    {
      name: 'LanguageTool API',
      note: 'An API for checking grammar and spelling. This was used to check the grammar and spelling of the input text in the application.',
    },
    {
      name: 'Launch4j',
      note: 'A tool for packaging Java applications into executable files. This was used to package the application into an executable file.',
    },
    {
      name: 'InnoSetup',
      note: 'This technology was used to create the installer for the application.',
    },
  ],
  features: [
    'Manual and automatic text editing',
    'Grammar checking',
    'Spelling correction',
    'Desktop application packaging',
  ],
  role: 'Main software developer',
  dateRange: dateRange('2024-04', '2024-05', 'Apr. 2024 – May 2024'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/SPELL-Self-Processing-English-Language-Lender',
  },
  images: buildProjectImages('spell', [
    'home.webp',
    'manual-editor.webp',
    'automatic-editor.webp',
  ]),
  overview: description,
  contribution:
    'Implemented LanguageTool API for spelling/grammar correction; used Launch4j and InnoSetup for compilation.',
  challenges: [
    'Debugging the application',
    'Making the application more user-friendly',
  ],
  learnings: [
    'Learned how to use the LanguageTool API',
    'Learned how to use the Launch4j and InnoSetup',
    'Learned how to use the JavaSwing library',
    'Learned how to use the Java programming language',
  ],
  sortOrder: 8,
}
