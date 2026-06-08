import type { DateRange } from '@/types/project'

export function dateRange(
  start: string,
  end: string | undefined,
  display: string,
): DateRange {
  return { start, end, display }
}
