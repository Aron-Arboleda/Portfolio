import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'An app for manual/automatic text editing with grammar checking and spelling correction.'

export const spell: Project = {
  slug: 'spell',
  title: 'SPELL (Self-Processing English Language Lender)',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Java', 'JavaSwing', 'LanguageTool API', 'Launch4j', 'InnoSetup'],
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
  images: buildProjectImages('spell', ['editor.webp', 'grammar-check.webp']),
  overview: description,
  contribution:
    'Implemented LanguageTool API for spelling/grammar correction; used Launch4j and InnoSetup for compilation.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 8,
}
