const PROJECT_IMAGES_BASE = '/images/projects'
const PROFILE_IMAGES_BASE = '/images/profile'

export function projectImagePath(slug: string, filename: string): string {
  return `${PROJECT_IMAGES_BASE}/${slug}/${filename}`
}

export function projectHeroPath(slug: string): string {
  return projectImagePath(slug, 'hero.webp')
}

export function projectGalleryPaths(
  slug: string,
  filenames: string[],
): string[] {
  return filenames.map((filename) => projectImagePath(slug, filename))
}

export function profileImagePath(filename = 'aron-portrait.webp'): string {
  return `${PROFILE_IMAGES_BASE}/${filename}`
}

export function buildProjectImages(
  slug: string,
  galleryFilenames: string[],
): { hero: string; gallery: string[] } {
  return {
    hero: projectHeroPath(slug),
    gallery: projectGalleryPaths(slug, galleryFilenames),
  }
}
