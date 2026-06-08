import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans'
import '@fontsource/instrument-serif/400.css'
import '@/styles/globals.css'
import App from '@/App'
import { validateProjects } from '@/data/projects/validate'

if (import.meta.env.DEV) {
  validateProjects()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
