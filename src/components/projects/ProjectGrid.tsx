import { ProjectCard } from '@/components/projects/ProjectCard'
import type { Project } from '@/types/project'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="m-0 py-12 text-center text-muted">
        No projects in this category.
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
