const PROJECT_IMAGES_BASE = '/images/projects'
const PROFILE_IMAGES_BASE = '/images/profile'
const CERTIFICATE_IMAGES_BASE = '/images/certificates'

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

/** Home hero — separate from About portrait (square). */
export function homeHeroImagePath(filename = 'aron-hero.webp'): string {
  return `${PROFILE_IMAGES_BASE}/${filename}`
}

/** Certificate scan — one WebP per entry, named after `certificate.id`. */
export function certificateImagePath(
  id: string,
  filename = 'certificate.webp',
): string {
  return `${CERTIFICATE_IMAGES_BASE}/${id}/${filename}`
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
