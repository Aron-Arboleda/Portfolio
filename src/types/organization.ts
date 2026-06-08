import type { DateRange } from '@/types/project'

export type Organization = {
  id: string
  name: string
  location: string
  dateRange: DateRange
  roles: string[]
}
