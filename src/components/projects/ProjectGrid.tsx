import { ProjectCard } from '@/components/projects/ProjectCard'
import { BentoCell, BentoGrid } from '@/components/ui/BentoGrid'
import { FadeInSection } from '@/components/ui/FadeInSection'
import type { Project } from '@/types/project'

type ProjectGridProps = {
  projects: Project[]
  bento?: boolean
}

export function ProjectGrid({ projects, bento = false }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="m-0 py-12 text-center font-mono text-sm text-muted">
        No projects in this category.
      </p>
    )
  }

  if (!bento) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <FadeInSection key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </FadeInSection>
        ))}
      </div>
    )
  }

  return (
    <BentoGrid>
      {projects.map((project, index) => (
        <FadeInSection key={project.slug} delay={index * 0.06}>
          <BentoCell span={project.featured && index === 0 ? 2 : 1}>
            <ProjectCard project={project} bento />
          </BentoCell>
        </FadeInSection>
      ))}
    </BentoGrid>
  )
}
