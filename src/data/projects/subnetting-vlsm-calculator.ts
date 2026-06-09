import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A web application that helps networking professionals quickly divide and subnet networks, with intuitive subnetting and VLSM calculators for practitioners of all skill levels.'

export const subnettingVlsmCalculator: Project = {
  slug: 'subnetting-vlsm-calculator',
  title: 'Subnetting & VLSM Calculator',
  tagline: description,
  description,
  categories: ['web'],
  techStack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Vitest', 'ESLint'],
  techStackDetails: [
    {
      name: 'HTML',
      note: 'Markup for calculator pages and results layout.',
    },
    {
      name: 'CSS',
      note: 'Responsive styling for home, subnetting, and VLSM views.',
    },
    {
      name: 'JavaScript',
      note: 'Subnet and VLSM calculation logic in the browser.',
    },
    {
      name: 'Webpack',
      note: 'Module bundler for the project build pipeline.',
    },
    {
      name: 'Vitest',
      note: 'Testing framework for calculator behavior.',
    },
    {
      name: 'ESLint',
      note: 'Linting and code quality checks.',
    },
  ],
  features: [
    'Subnet calculator for a given IP address and CIDR',
    'VLSM calculator for IP address and required hosts',
    'User-friendly, responsive interface',
    'Runs entirely in the browser',
  ],
  role: 'Sole developer',
  dateRange: dateRange('2024-01', undefined, 'Jan. 2024'),
  featured: false,
  links: {
    live: 'https://aron-arboleda.github.io/SubnettingAndVLSMCalculator/',
    repo: 'https://github.com/Aron-Arboleda/SubnettingAndVLSMCalculator',
  },
  images: buildProjectImages('subnetting-vlsm-calculator', [
    'home-page.webp',
    'subnetting.webp',
    'vlsm.webp',
    'sample-run.webp',
  ]),
  overview: description,
  contribution:
    'Built the subnetting and VLSM tools, responsive UI, and deployment to GitHub Pages.',
  challenges: [
    'Simplifying complex network subdivision for users at different skill levels.',
    'Practice questions and IPv6 subnetting remain in development.',
  ],
  learnings: [
    'Applied networking concepts (subnetting and VLSM) in a practical web tool.',
    'Used Webpack and Vitest in a vanilla JavaScript project.',
    'Shipped a responsive calculator usable without installation.',
  ],
  sortOrder: 9,
}
