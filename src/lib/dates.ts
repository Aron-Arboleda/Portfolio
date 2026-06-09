import type { DateRange } from '@/types/project'

export function dateRange(
  start: string,
  end: string | undefined,
  display: string,
): DateRange {
  return { start, end, display }
}

/** Latest relevant month for sorting (end date, or start if open-ended). */
export function projectSortKey(date: DateRange): string {
  return date.end ?? date.start
}
