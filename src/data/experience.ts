import type { Experience } from '@/types/experience'
import { dateRange } from '@/lib/dates'

export const experience: Experience[] = [
  {
    id: 'liquefact-gig',
    title: 'Web App Developer',
    type: 'freelance',
    location: 'Tarlac City, Tarlac',
    dateRange: dateRange('2026-05', '2026-05', 'May 2026'),
    deliverable: 'Liquefact Web App',
    details:
      'Learned how to integrate a neural network model in a Geographical Information System (GIS).',
    link: 'https://liquefact-web.vercel.app/',
    projectSlug: 'liquefact',
  },
  {
    id: 'draft2dimen-v2-gig',
    title: 'Desktop App Developer',
    type: 'freelance',
    location: 'Tarlac City, Tarlac',
    dateRange: dateRange('2026-04', '2026-05', 'Apr. 2026 – May 2026'),
    deliverable: 'Draft2Dimen v2 Desktop Application',
    details:
      'Modified the application; added local saving, steel formula, and cost computation.',
    projectSlug: 'draft2dimen-v2',
  },
  {
    id: 'draft2dimen-gig',
    title: 'Desktop App Developer',
    type: 'freelance',
    location: 'Tarlac City, Tarlac',
    dateRange: dateRange('2025-03', '2025-05', 'Mar. 2025 – May 2025'),
    deliverable: 'Draft2Dimen Desktop Application',
    details: 'Learned how to work with clients and a UI/UX Designer.',
    projectSlug: 'draft2dimen',
  },
]
