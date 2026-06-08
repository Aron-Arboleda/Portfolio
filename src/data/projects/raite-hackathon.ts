import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'Participation in the RAITE Hackathon Web3 regional competition hosted by ICPHubs.'

export const raiteHackathon: Project = {
  slug: 'raite-hackathon',
  title: 'RAITE Hackathon',
  tagline: description,
  description,
  categories: ['competition'],
  techStack: ['Web3'],
  features: [
    'Regional hackathon participation',
    'Web3 project development',
    'Team collaboration',
  ],
  role: 'Member of the hackathon team',
  dateRange: dateRange('2024-11', '2024-12', 'Nov. 2024 – Dec. 2024'),
  featured: false,
  links: {},
  images: buildProjectImages('raite-hackathon', ['team.webp', 'demo.webp']),
  overview: description,
  contribution:
    'Member of the hackathon team. Award: Certificate of Participation.',
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  results: 'Certificate of Participation',
  sortOrder: 11,
}
