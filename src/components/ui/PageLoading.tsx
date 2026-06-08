import { Skeleton } from '@/components/ui/Skeleton'

export function PageLoading() {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="w-full max-w-md space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="aspect-video w-full" />
      </div>
      <p className="m-0 text-sm text-muted">Loading…</p>
    </div>
  )
}
