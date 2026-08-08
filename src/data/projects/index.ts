import type { Project, ProjectCategory } from '@/types/project'
import { aseanLibraryDatabase } from '@/data/projects/asean-library-database'
import { draft2Dimen } from '@/data/projects/draft2dimen'
import { draft2DimenV2 } from '@/data/projects/draft2dimen-v2'
import { gasSmokeDetector } from '@/data/projects/gas-smoke-detector'
import { liwanagAtDunong } from '@/data/projects/liwanag-at-dunong'
import { liquefact } from '@/data/projects/liquefact'
import { nomVet } from '@/data/projects/nom-vet'
import { pageReplacementAlgorithms } from '@/data/projects/page-replacement-algorithms'
import { rebyu } from '@/data/projects/rebyu'
import { pivit } from '@/data/projects/pivit'
import { remindersBuilder } from '@/data/projects/reminders-builder'
import { spell } from '@/data/projects/spell'
import { subnettingVlsmCalculator } from '@/data/projects/subnetting-vlsm-calculator'
import { uHeal } from '@/data/projects/u-heal'
import { zodiacSignIdentifier } from '@/data/projects/zodiac-sign-identifier'
import { inventeer } from '@/data/projects/inventeer'
import { projectSortKey } from '@/lib/dates'

export const projects: Project[] = [
  uHeal,
  liquefact,
  draft2DimenV2,
  inventeer,
  gasSmokeDetector,
  draft2Dimen,
  liwanagAtDunong,
  rebyu,
  aseanLibraryDatabase,
  spell,
  subnettingVlsmCalculator,
  zodiacSignIdentifier,
  pivit,
  nomVet,
  remindersBuilder,
  pageReplacementAlgorithms,
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'cli', label: 'CLI' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'fullstack', label: 'Full-stack' },
] as const

export type ProjectFilterId = (typeof projectCategories)[number]['id']

const EXPECTED_SLUGS = [
  'u-heal',
  'liquefact',
  'draft2dimen-v2',
  'inventeer',
  'gas-smoke-detector',
  'draft2dimen',
  'liwanag-at-dunong',
  'rebyu',
  'asean-library-database',
  'spell',
  'subnetting-vlsm-calculator',
  'zodiac-sign-identifier',
  'pivit',
  'nom-vet',
  'reminders-builder',
  'page-replacement-algorithms',
  'raite-hackathon',
] as const

function sortByDateDesc(a: Project, b: Project): number {
  return projectSortKey(b.dateRange).localeCompare(projectSortKey(a.dateRange))
}

export function getAllProjects(): Project[] {
  return [...projects].sort(sortByDateDesc)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured)
}

export function filterProjects(category: ProjectFilterId): Project[] {
  const sorted = getAllProjects()
  if (category === 'all') return sorted
  return sorted.filter((project) =>
    project.categories.includes(category as ProjectCategory)
  )
}

export function getAdjacentProjects(slug: string): {
  prev?: Project
  next?: Project
} {
  const sorted = getAllProjects()
  const index = sorted.findIndex((project) => project.slug === slug)
  if (index === -1) return {}

  return {
    prev: index < sorted.length - 1 ? sorted[index + 1] : undefined,
    next: index > 0 ? sorted[index - 1] : undefined,
  }
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export { EXPECTED_SLUGS }
