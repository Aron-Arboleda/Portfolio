import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { PageLoading } from '@/components/ui/PageLoading'

export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-button focus:bg-accent focus:px-4 focus:py-2 focus:text-inverse"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
