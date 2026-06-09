import { NotFoundContent } from '@/components/ui/NotFoundContent'
import { HeroGrain } from '@/components/ui/HeroGrain'
import { PageShell } from '@/components/ui/PageShell'
import { routeSeo, toPageMeta } from '@/config/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

type ProjectNotFoundProps = {
  slug?: string
}

export function ProjectNotFound({ slug }: ProjectNotFoundProps) {
  usePageMeta(toPageMeta(routeSeo.notFound))

  return (
    <HeroGrain className="flex flex-1 border-b-2 border-border bg-surface-muted">
      <PageShell className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <NotFoundContent
          subtitle={`No project exists with slug "${slug ?? 'unknown'}".`}
        />
      </PageShell>
    </HeroGrain>
  )
}
