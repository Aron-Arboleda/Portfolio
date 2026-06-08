import { useSearchParams } from 'react-router-dom'
import { ProjectFilter } from '@/components/projects/ProjectFilter'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { routeSeo, toPageMeta } from '@/config/seo'
import {
  filterProjects,
  projectCategories,
  type ProjectFilterId,
} from '@/data/projects'
import { usePageMeta } from '@/hooks/usePageMeta'

function parseCategory(value: string | null): ProjectFilterId {
  const valid = projectCategories.some((category) => category.id === value)
  return valid ? (value as ProjectFilterId) : 'all'
}

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = parseCategory(searchParams.get('category'))
  const filtered = filterProjects(active)

  usePageMeta(toPageMeta(routeSeo.projects))

  const handleFilterChange = (id: ProjectFilterId) => {
    if (id === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: id })
    }
  }

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <FadeInSection>
          <SectionHeading
            title="Projects"
            subtitle="A collection of web, mobile, desktop, and hardware work — from case studies to client deliverables."
            titleAs="h1"
          />
        </FadeInSection>

        <div className="mt-10">
          <ProjectFilter active={active} onChange={handleFilterChange} />
        </div>

        <div className="mt-8">
          <ProjectGrid projects={filtered} />
        </div>
      </Section>
    </PageShell>
  )
}
