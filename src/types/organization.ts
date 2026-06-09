import type { DateRange } from '@/types/project'

export type Organization = {
  id: string
  name: string
  location: string
  dateRange: DateRange
  roles: string[]
  /** External site — card opens in a new tab when set. */
  url?: string
}
