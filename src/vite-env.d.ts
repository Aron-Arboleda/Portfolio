/// <reference types="vite/client" />

declare module '@fontsource-variable/bricolage-grotesque'
declare module '@fontsource-variable/space-grotesk'
declare module '@fontsource/ibm-plex-mono/400.css'
declare module '@fontsource/ibm-plex-mono/500.css'

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
