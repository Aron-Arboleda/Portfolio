import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'
const description =
  'A mobile eHealth system for remote chronic wound monitoring with tissue classification using the U-Net segmentation model.'

export const uHeal: Project = {
  slug: 'u-heal',
  title: 'U-HEAL',
  tagline: description,
  description,
  categories: ['mobile', 'web', 'fullstack'],
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
    mobileUrl:
      'https://expo.dev/accounts/mushmush_aron/projects/U-Heal/builds/f10fd4b2-9834-4245-bf87-99354c52cbb0',
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
  challenges: [
    'Optimizing the U-Net model for React Native mobile performance.',
    'Handling ArUco marker detection inaccuracies under varying lighting conditions.',
    'Preparing and balancing a limited wound dataset for segmentation.',
    'Integrating FastAPI, Firebase, and the mobile application.',
    'Debugging real-time updates and cross-device compatibility issues.',
  ],
  learnings: [
    'RAD enabled faster development and iteration.',
    'U-Net was effective for wound and tissue segmentation.',
    'OpenCV and PyTorch U-Net worked well for measurement and classification.',
    'Testing helped identify and fix issues early.',
    'Firebase and FastAPI provided a scalable backend solution.',
  ],
  sortOrder: 1,
}

// RAD enabled faster development and iteration.
// U-Net was effective for wound and tissue segmentation.
// OpenCV and PyTorch U-Net worked well for measurement and classification.
// Testing helped identify and fix issues early.
// Firebase and FastAPI provided a scalable backend solution.
