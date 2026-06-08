import { useEffect, useState } from 'react'

function getMatches(query: string): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMatches(query))

  useEffect(() => {
    const media = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
