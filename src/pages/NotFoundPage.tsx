import { NotFoundContent } from '@/components/ui/NotFoundContent'
import { HeroGrain } from '@/components/ui/HeroGrain'
import { PageShell } from '@/components/ui/PageShell'
import { routeSeo, toPageMeta } from '@/config/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta(toPageMeta(routeSeo.notFound))

  return (
    <HeroGrain className="flex flex-1 border-b border-border bg-surface-muted">
      <PageShell className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <NotFoundContent />
      </PageShell>
    </HeroGrain>
  )
}
