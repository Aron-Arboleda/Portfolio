export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'desktop'
  | 'cli'
  | 'hardware'
  | 'fullstack'
  | 'workflow-automation'
  | 'competition'

export type DateRange = {
  start: string
  end?: string
  display: string
}

export type ProjectLinks = {
  live?: string
  repo?: string
  /** Label shown after "Mobile:" (or as the Mobile App button when this is a URL). */
  mobile?: string
  /** External URL for the mobile label — opens in a new tab when set. */
  mobileUrl?: string
}

export type TechStackItem = {
  name: string
  note?: string
}

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  categories: ProjectCategory[]
  techStack: string[]
  techStackDetails?: TechStackItem[]
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
