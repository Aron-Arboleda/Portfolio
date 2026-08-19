import type { Project, ProjectCategory, TechStackItem } from '@/types/project'

export const REFLECTION_PLACEHOLDER = 'Add your reflections here.'

const DEFAULT_TECH_NOTE = 'Add a note about why you chose this technology.'

export const categoryLabels: Record<ProjectCategory, string> = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  cli: 'CLI',
  hardware: 'Hardware',
  fullstack: 'Full-stack',
  competition: 'Competition',
  'workflow-automation': 'Workflow Automation',
}

export function isReflectionPlaceholder(items: string[]): boolean {
  return items.every((item) => item === REFLECTION_PLACEHOLDER)
}

export function imagePathToCaption(path: string): string {
  const filename = path.split('/').pop() ?? path
  const base = filename.replace(/\.[^.]+$/, '')
  return base
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function getTechStackItems(project: Project): TechStackItem[] {
  if (project.techStackDetails && project.techStackDetails.length > 0) {
    return project.techStackDetails
  }

  return project.techStack.map((name) => ({
    name,
    note: DEFAULT_TECH_NOTE,
  }))
}

export function getGalleryImages(project: Project): string[] {
  const images = [project.images.hero, ...project.images.gallery]
  return [...new Set(images)]
}

export function isExternalUrl(value: string): boolean {
  return value.startsWith('http://') || value.startsWith('https://')
}
