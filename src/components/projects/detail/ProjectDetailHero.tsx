import { ProjectImage } from '@/components/projects/ProjectImage'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Project } from '@/types/project'
import { categoryLabels, isExternalUrl } from '@/lib/projects'

const externalLinkClass =
  'inline-flex h-10 items-center justify-center rounded-button px-5 text-sm font-medium no-underline transition-colors'

type ProjectDetailHeroProps = {
  project: Project
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <Section className="py-0 md:py-0">
      <div className="flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <Badge key={category}>{categoryLabels[category]}</Badge>
        ))}
      </div>

      <SectionHeading
        title={project.title}
        subtitle={project.tagline}
        titleAs="h1"
        className="mt-4"
      />

      <p className="m-0 mt-4 text-sm text-muted">
        <span className="font-medium text-primary">{project.role}</span>
        {' · '}
        {project.dateRange.display}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${externalLinkClass} bg-accent text-inverse hover:opacity-90`}
          >
            Live Demo
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${externalLinkClass} border border-border text-primary hover:border-accent hover:text-accent`}
          >
            Repository
          </a>
        )}
        {project.links.mobile &&
          (isExternalUrl(project.links.mobile) ? (
            <a
              href={project.links.mobile}
              target="_blank"
              rel="noopener noreferrer"
              className={`${externalLinkClass} border border-border text-primary hover:border-accent hover:text-accent`}
            >
              Mobile App
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1.5 text-sm text-muted">
              Mobile: {project.links.mobile}
            </span>
          ))}
      </div>

      <div className="mt-10 max-h-[480px] overflow-hidden rounded-card">
        <ProjectImage
          src={project.images.hero}
          alt={project.title}
          title={project.title}
          slug={project.slug}
          className="max-h-[480px]"
        />
      </div>
    </Section>
  )
}
