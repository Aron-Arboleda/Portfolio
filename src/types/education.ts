export type EducationLevel = 'college' | 'senior-high' | 'junior-high'

export type Education = {
  id: string
  level: EducationLevel
  institution: string
  location: string
  degree?: string
  strand?: string
  specialization?: string
  graduated: string
  honors?: string
  coursework?: string[]
}
