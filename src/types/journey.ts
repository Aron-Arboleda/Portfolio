export type JourneyMilestoneKind =
  | 'education'
  | 'project'
  | 'certificate'
  | 'organization'
  | 'competition'
  | 'career'

export type JourneyMilestone = {
  id: string
  year: string
  title: string
  body: string
  kind: JourneyMilestoneKind
  projectSlug?: string
  link?: string
  sortOrder: number
}
