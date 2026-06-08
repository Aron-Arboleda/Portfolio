export const defaultSeo = {
  title: 'Aron Arboleda | Software Developer',
  description:
    'Portfolio of Aron Rez D. Arboleda — Computer Science graduate building web, mobile, and desktop applications across thesis research, freelance work, and client projects.',
}

export const routeSeo = {
  home: {
    title: 'Aron Arboleda | Software Developer',
    description:
      'Portfolio of Aron Rez D. Arboleda — full-stack developer specializing in React, TypeScript, and cross-platform software.',
  },
  about: {
    title: 'About | Aron Arboleda',
    description:
      'Learn about Aron Rez D. Arboleda — education, certifications, organizations, and background in computer science.',
  },
  journey: {
    title: 'My Journey | Aron Arboleda',
    description:
      'The path from computer servicing in high school to building ML-powered apps and thesis research as a software developer.',
  },
  projects: {
    title: 'Projects | Aron Arboleda',
    description:
      'Explore web, mobile, desktop, and hardware projects including U-HEAL, LIQUEFACT, and more.',
  },
  experience: {
    title: 'Experience | Aron Arboleda',
    description:
      'Freelance experience delivering web and desktop applications for clients in Tarlac, Philippines.',
  },
  contact: {
    title: 'Contact | Aron Arboleda',
    description:
      'Get in touch with Aron Rez D. Arboleda for collaborations, opportunities, or inquiries.',
  },
  notFound: {
    title: 'Page not found | Aron Arboleda',
    description: 'The page you are looking for does not exist or may have been moved.',
  },
} as const

export function projectPageTitle(projectTitle: string): string {
  return `${projectTitle} | Aron Arboleda`
}
