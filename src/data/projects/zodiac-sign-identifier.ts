import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  "A static website that determines a person's zodiac sign from their birth day and month, displaying the matching sign image and name."

export const zodiacSignIdentifier: Project = {
  slug: 'zodiac-sign-identifier',
  title: 'Zodiac Sign Identifier',
  tagline: description,
  description,
  categories: ['web'],
  techStack: ['HTML', 'CSS', 'JavaScript'],
  techStackDetails: [
    {
      name: 'HTML',
      note: 'Page structure for the birth-date input and zodiac result display.',
    },
    {
      name: 'CSS',
      note: 'Styling for a simple, intuitive layout.',
    },
    {
      name: 'JavaScript',
      note: 'Date logic to map day and month to the correct zodiac sign.',
    },
  ],
  features: [
    'Zodiac sign lookup by birth day and month',
    'Displays corresponding zodiac image and name',
    'Simple, intuitive user interface',
    'Runs entirely in the browser — no install required',
  ],
  role: 'Sole developer',
  dateRange: dateRange('2023-12', undefined, 'Dec. 2023'),
  featured: false,
  links: {
    live: 'https://aron-arboleda.github.io/ZodiacSignIdentifier/',
    repo: 'https://github.com/Aron-Arboleda/ZodiacSignIdentifier',
  },
  images: buildProjectImages('zodiac-sign-identifier', ['home-page.webp']),
  overview: description,
  contribution:
    'Built the static site end to end — HTML structure, styling, and JavaScript zodiac-matching logic.',
  challenges: [
    'Handling zodiac date boundaries correctly across months.',
    'Keeping the experience lightweight as a zero-backend static site.',
  ],
  learnings: [
    'Practiced front-end fundamentals with HTML, CSS, and JavaScript.',
    'Deployed a static site via GitHub Pages.',
  ],
  sortOrder: 10,
}
