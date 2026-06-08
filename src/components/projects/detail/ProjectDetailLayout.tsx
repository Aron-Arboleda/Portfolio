import { ProjectContribution } from '@/components/projects/detail/ProjectContribution'
import { ProjectDetailHero } from '@/components/projects/detail/ProjectDetailHero'
import { ProjectFeatures } from '@/components/projects/detail/ProjectFeatures'
import { ProjectGallery } from '@/components/projects/detail/ProjectGallery'
import { ProjectNavigation } from '@/components/projects/detail/ProjectNavigation'
import { ProjectOverview } from '@/components/projects/detail/ProjectOverview'
import { ProjectReflection } from '@/components/projects/detail/ProjectReflection'
import { ProjectResults } from '@/components/projects/detail/ProjectResults'
import { ProjectTechSection } from '@/components/projects/detail/ProjectTechSection'
import { PageShell } from '@/components/ui/PageShell'
import type { Project } from '@/types/project'

type ProjectDetailLayoutProps = {
  project: Project
}

export function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  return (
    <PageShell className="py-16 sm:py-24">
      <ProjectDetailHero project={project} />
      <ProjectOverview overview={project.overview} />
      <ProjectFeatures features={project.features} />
      <ProjectTechSection project={project} />
      <ProjectContribution
        role={project.role}
        contribution={project.contribution}
      />
      <ProjectGallery project={project} />
      <ProjectReflection
        challenges={project.challenges}
        learnings={project.learnings}
        slug={project.slug}
      />
      <ProjectResults results={project.results} />
      <ProjectNavigation slug={project.slug} />
    </PageShell>
  )
}
