import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
import {
  PLACEHOLDER_CHALLENGES,
  PLACEHOLDER_LEARNINGS,
} from '@/data/projects/shared'

const description =
  'A mobile eHealth system for remote chronic wound monitoring with tissue classification using the U-Net segmentation model.'

export const uHeal: Project = {
  slug: 'u-heal',
  title: 'U-HEAL',
  tagline: description,
  description,
  categories: ['mobile', 'web'],
  techStack: ['React Native', 'Python', 'Firebase', 'Expo'],
  techStackDetails: [
    {
      name: 'React Native',
      note: 'Cross-platform mobile app for patients and caregivers with native device access.',
    },
    {
      name: 'Python',
      note: 'U-Net segmentation model for AI-assisted wound tissue classification.',
    },
    {
      name: 'Firebase',
      note: 'Authentication, real-time chat, and cloud storage for wound documentation.',
    },
    {
      name: 'Expo',
      note: 'Streamlined builds and distribution for the Android thesis deliverable.',
    },
  ],
  features: [
    'Wound Documentation',
    'Video Call',
    'Chat',
    'Virtual Appointment Scheduling',
    'AI-assisted Wound Analysis',
    'Android App with Web App Dashboard',
    'Tracking Charts',
  ],
  role: 'Developer of the whole project',
  dateRange: dateRange('2026-01', '2026-04', 'Jan. 2026 – Apr. 2026'),
  featured: true,
  links: {
    live: 'https://u-heal-web.vercel.app/',
    mobile: '@mushmush_aron/U-Heal — Expo',
  },
  images: buildProjectImages('u-heal', [
    'mobile-1.webp',
    'mobile-2.webp',
    'dashboard.webp',
    'ai-analysis.webp',
  ]),
  overview: description,
  contribution:
    "Developer of the whole project — Bachelor's thesis spanning mobile app, web dashboard, and AI-assisted wound analysis.",
  challenges: PLACEHOLDER_CHALLENGES,
  learnings: PLACEHOLDER_LEARNINGS,
  sortOrder: 1,
}
