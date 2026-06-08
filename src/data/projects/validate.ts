import {
  EXPECTED_SLUGS,
  getFeaturedProjects,
  projects,
} from '@/data/projects/index'

export function validateProjects(): void {
  const slugs = projects.map((project) => project.slug)
  const uniqueSlugs = new Set(slugs)

  if (uniqueSlugs.size !== slugs.length) {
    console.error('[portfolio] Duplicate project slugs detected.')
  }

  for (const expected of EXPECTED_SLUGS) {
    if (!uniqueSlugs.has(expected)) {
      console.error(`[portfolio] Missing expected project slug: ${expected}`)
    }
  }

  for (const project of projects) {
    if (!project.images.hero.startsWith('/images/projects/')) {
      console.error(
        `[portfolio] Invalid hero image path for ${project.slug}: ${project.images.hero}`,
      )
    }
  }

  if (getFeaturedProjects().length !== 3) {
    console.error(
      `[portfolio] Expected 3 featured projects, found ${getFeaturedProjects().length}.`,
    )
  }
}
