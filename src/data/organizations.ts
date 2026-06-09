import type { Organization } from '@/types/organization'
import { dateRange } from '@/lib/dates'

export const organizations: Organization[] = [
  {
    id: 'liwanag-at-dunong',
    name: 'Liwanag at Dunong',
    location: 'Capas, Tarlac, Philippines',
    dateRange: dateRange('2024-07', undefined, 'Jul. 2024 – Present'),
    roles: ['Active Volunteer', 'Web Developer of the Organization'],
    url: 'https://www.facebook.com/LiwanagAtDunongProject',
  },
  {
    id: 'programmers-den',
    name: "Programmers' Den",
    location: 'Tarlac State University | Tarlac City, Tarlac, Philippines',
    dateRange: dateRange('2022-10', '2022-12', 'Oct. 2022 – Dec. 2022'),
    roles: ['Member of the Organization'],
    url: 'https://www.facebook.com/ccsprogrammersden',
  },
]
