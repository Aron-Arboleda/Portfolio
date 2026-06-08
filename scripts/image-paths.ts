import { projects } from '../src/data/projects/index.ts'
import { profileImagePath } from '../src/lib/images.ts'

export function getExpectedImagePaths(): string[] {
  const paths: string[] = ['/images/og-default.webp', profileImagePath()]

  for (const project of projects) {
    paths.push(project.images.hero)
    paths.push(...project.images.gallery)
  }

  return [...new Set(paths)]
}

export function toPublicPath(webPath: string): string {
  return `public${webPath}`
}
