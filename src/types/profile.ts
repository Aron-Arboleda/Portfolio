export type SocialLink = {
  label: string
  href: string
  type: 'email' | 'github' | 'linkedin' | 'other'
}

export type Profile = {
  siteName: string
  fullName: string
  role: string
  email: string
  phone: string
  location: string
  languages: string[]
  objective: string
  tagline: string
  socials: SocialLink[]
  highlights: string[]
}
