export function PageLoading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 py-24">
      <div
        className="h-2 w-2 animate-pulse rounded-full bg-accent"
        aria-hidden="true"
      />
      <p className="m-0 text-sm text-muted">Loading…</p>
    </div>
  )
}
