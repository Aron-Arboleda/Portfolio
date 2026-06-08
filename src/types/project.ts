export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'desktop'
  | 'hardware'
  | 'fullstack'
  | 'competition'

export type DateRange = {
  start: string
  end?: string
  display: string
}

export type ProjectLinks = {
  live?: string
  repo?: string
  mobile?: string
}

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  categories: ProjectCategory[]
  techStack: string[]
  features: string[]
  role: string
  dateRange: DateRange
  featured: boolean
  links: ProjectLinks
  images: {
    hero: string
    gallery: string[]
  }
  overview: string
  contribution: string
  challenges: string[]
  learnings: string[]
  results?: string
  sortOrder: number
}
