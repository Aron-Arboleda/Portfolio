import type { DateRange } from '@/types/project'

export type Competition = {
  id: string
  name: string
  dateRange: DateRange
  role: string
  award?: string
  projectSlug?: string
}
