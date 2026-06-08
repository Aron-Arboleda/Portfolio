import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  JourneyPage,
  NotFoundPage,
  ProjectDetailPage,
  ProjectsPage,
} from '@/routes/lazy-pages'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'journey', element: <JourneyPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
