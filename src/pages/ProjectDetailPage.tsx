import { Link, useParams } from 'react-router-dom'
import { ProjectImage } from '@/components/projects/ProjectImage'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { getProjectBySlug } from '@/data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <PageShell className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <Section className="py-0 md:py-0">
          <SectionHeading
            eyebrow="404"
            title="Project not found"
            titleAs="h1"
            subtitle={`No project exists with slug "${slug ?? 'unknown'}".`}
          />
          <ButtonLink to="/projects" variant="primary" className="mt-8">
            Back to Projects
          </ButtonLink>
        </Section>
      </PageShell>
    )
  }

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title={project.title}
          subtitle={project.tagline}
          titleAs="h1"
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <p className="m-0 mt-4 text-sm text-muted">{project.dateRange.display}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-button bg-accent px-5 text-sm font-medium text-inverse no-underline transition-opacity hover:opacity-90"
            >
              Live Demo
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-button border border-border px-5 text-sm font-medium text-primary no-underline transition-colors hover:border-accent hover:text-accent"
            >
              Repository
            </a>
          )}
        </div>

        <div className="mt-10">
          <ProjectImage
            src={project.images.hero}
            alt={project.title}
            title={project.title}
            slug={project.slug}
          />
        </div>

        <p className="m-0 mt-8 max-w-3xl leading-relaxed text-muted">
          {project.description}
        </p>

        {project.features.length > 0 && (
          <div className="mt-8">
            <h2 className="m-0 font-heading text-xl text-primary">Key features</h2>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="m-0 mt-8 text-sm italic text-muted">
          Full case study coming in Phase 5.
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-block text-sm text-accent no-underline hover:underline"
        >
          &larr; All projects
        </Link>
      </Section>
    </PageShell>
  )
}
