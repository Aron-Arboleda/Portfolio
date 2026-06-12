import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'A desktop application that visualizes FIFO, OPT, and LRU page replacement algorithms for an Operating Systems finals case study.'

export const pageReplacementAlgorithms: Project = {
  slug: 'page-replacement-algorithms',
  title: 'Page Replacement Algorithms Visualizer',
  tagline: description,
  description,
  categories: ['desktop'],
  techStack: ['Tauri', 'Rust', 'React', 'TypeScript', 'CSS'],
  techStackDetails: [
    {
      name: 'Tauri',
      note: 'Used to package a lightweight cross-platform desktop app with a native Rust backend.',
    },
    {
      name: 'Rust',
      note: 'Powers native desktop integration and backend-side app behavior.',
    },
    {
      name: 'React',
      note: 'Builds the interactive interface for algorithm inputs and visualization output.',
    },
    {
      name: 'TypeScript',
      note: 'Provides type safety and maintainability across the frontend codebase.',
    },
    {
      name: 'CSS',
      note: 'Styles the desktop views and simulation interface.',
    },
  ],
  features: [
    'Interactive simulation for FIFO (First-In-First-Out)',
    'Interactive simulation for OPT (Optimal)',
    'Interactive simulation for LRU (Least Recently Used)',
    'Desktop app distribution via GitHub Releases',
    'Case study documents included for academic context',
  ],
  role: 'Sole developer',
  dateRange: dateRange('2025-05', undefined, 'May 2025'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/PageReplacementAlgorithms',
  },
  images: buildProjectImages('page-replacement-algorithms', [
    'home-page.webp',
    'home-page-continuation.webp',
    'about-page.webp',
  ]),
  overview: description,
  contribution:
    'Built the full desktop visualizer, implemented algorithm simulation workflow, and prepared release assets for installable distribution.',
  challenges: [
    'Translating OS paging concepts into an intuitive and readable step-by-step simulation.',
    'Balancing desktop performance with responsive UI updates during algorithm runs.',
    'Aligning Tauri desktop packaging with a React + TypeScript workflow.',
  ],
  learnings: [
    'Strengthened understanding of FIFO, OPT, and LRU through practical implementation.',
    'Learned how to ship a React-based desktop app using Tauri and Rust.',
    'Improved experience designing educational visualizations for technical concepts.',
  ],
  sortOrder: 15,
}
