import type { Competition } from '@/types/competition'
import { dateRange } from '@/lib/dates'

export const competitions: Competition[] = [
  {
    id: 'raite-hackathon',
    name: 'RAITE HACKATHON | Web3 | ICPHubs Regional Competition',
    dateRange: dateRange('2024-11', '2024-12', 'Nov. 2024 – Dec. 2024'),
    role: 'Member of the hackathon team',
    award: 'Certificate of Participation',
    projectSlug: 'raite-hackathon',
  },
]
