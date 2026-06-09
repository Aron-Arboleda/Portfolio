import { certificates } from '../src/data/certificates.ts'
import { projects } from '../src/data/projects/index.ts'
import { certificateImagePath, profileImagePath } from '../src/lib/images.ts'

export function getExpectedImagePaths(): string[] {
  const paths: string[] = ['/images/og-default.webp', profileImagePath()]

  for (const project of projects) {
    paths.push(project.images.hero)
    paths.push(...project.images.gallery)
  }

  for (const certificate of certificates) {
    paths.push(certificateImagePath(certificate.id))
  }

  return [...new Set(paths)]
}

export function toPublicPath(webPath: string): string {
  return `public${webPath}`
}
