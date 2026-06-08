import type { Education } from '@/types/education'

export const education: Education[] = [
  {
    id: 'college',
    level: 'college',
    institution: 'Tarlac State University',
    location: 'Tarlac, Philippines',
    degree: 'Bachelor of Science in Computer Science',
    graduated: 'July 2026',
    honors: 'Magna Cum Laude',
    coursework: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Desktop App Development',
      'Web Development',
      'Software Engineering',
    ],
  },
  {
    id: 'senior-high',
    level: 'senior-high',
    institution: 'Capas National High School',
    location: 'Capas, Tarlac, Philippines',
    strand: 'Science, Technology, Engineering and Mathematics (STEM)',
    graduated: 'May 2022',
    honors: 'With Highest Honor',
  },
  {
    id: 'junior-high',
    level: 'junior-high',
    institution: 'Capas National High School',
    location: 'Capas, Tarlac, Philippines',
    specialization: 'Computer System Servicing',
    graduated: 'May 2020',
    honors: 'With Honors',
  },
]
