import { profileImagePath } from '@/lib/images'
import type { Project } from '@/types/project'

export const defaultSeo = {
  title: 'Aron Arboleda | Software Developer',
  description:
    'Portfolio of Aron Rez D. Arboleda — Computer Science graduate building web, mobile, and desktop applications across thesis research, freelance work, and client projects.',
}

export const defaultOgImage = '/images/og-default.webp'
export const siteName = 'Aron Arboleda'

export type PageMeta = {
  title: string
  description?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
}

type RouteSeoEntry = {
  title: string
  description: string
  path: string
  image?: string
}

export const routeSeo = {
  home: {
    title: 'Aron Arboleda | Software Developer',
    description:
      'Portfolio of Aron Rez D. Arboleda — full-stack developer specializing in React, TypeScript, and cross-platform software.',
    path: '/',
  },
  about: {
    title: 'About | Aron Arboleda',
    description:
      'Learn about Aron Rez D. Arboleda — education, certifications, organizations, and background in computer science.',
    path: '/about',
    image: profileImagePath(),
  },
  journey: {
    title: 'My Journey | Aron Arboleda',
    description:
      'The path from computer servicing in high school to building ML-powered apps and thesis research as a software developer.',
    path: '/journey',
  },
  projects: {
    title: 'Projects | Aron Arboleda',
    description:
      'Explore web, mobile, desktop, and hardware projects including U-HEAL, LIQUEFACT, and more.',
    path: '/projects',
  },
  experience: {
    title: 'Experience | Aron Arboleda',
    description:
      'Freelance experience delivering web and desktop applications for clients in Tarlac, Philippines.',
    path: '/experience',
  },
  contact: {
    title: 'Contact | Aron Arboleda',
    description:
      'Get in touch with Aron Rez D. Arboleda for collaborations, opportunities, or inquiries.',
    path: '/contact',
  },
  notFound: {
    title: 'Page not found | Aron Arboleda',
    description: 'The page you are looking for does not exist or may have been moved.',
    path: '/404',
  },
} as const satisfies Record<string, RouteSeoEntry>

export function projectPageTitle(projectTitle: string): string {
  return `${projectTitle} | ${siteName}`
}

export function toPageMeta(route: RouteSeoEntry): PageMeta {
  return {
    title: route.title,
    description: route.description,
    path: route.path,
    image: route.image ?? defaultOgImage,
    type: 'website',
  }
}

export function projectPageMeta(project: Project): PageMeta {
  return {
    title: projectPageTitle(project.title),
    description: project.tagline,
    image: project.images.hero,
    path: `/projects/${project.slug}`,
    type: 'article',
  }
}
