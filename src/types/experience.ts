import type { DateRange } from '@/types/project'

export type ExperienceType = 'freelance' | 'full-time' | 'internship'

export type Experience = {
  id: string
  title: string
  type: ExperienceType
  location: string
  dateRange: DateRange
  deliverable: string
  details: string
  link?: string
  projectSlug?: string
}
