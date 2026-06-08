import type { Certificate } from '@/types/certificate'

export const certificates: Certificate[] = [
  {
    id: 'raite-hackathon',
    issuer: 'RAITE Hackathon | Regional Competition | Web3',
    title: 'Certificate of Participation',
    date: 'Nov. 2024',
  },
  {
    id: 'cisco-switching',
    issuer: 'Cisco',
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    date: 'June 2024',
    description: 'Configured switches and WLAN',
  },
  {
    id: 'cisco-networks',
    issuer: 'Cisco',
    title: 'CCNAv7: Introduction to Networks',
    date: 'Jan. 2024',
    description: 'Studied OSI model and IPv4/IPv6 addressing',
  },
  {
    id: 'sololearn-js',
    issuer: 'Sololearn',
    title: 'JavaScript Intermediate',
    date: 'July 2023',
    description:
      'Studied JavaScript OOP, Methods, Arrays, DOM, and others',
  },
  {
    id: 'sololearn-python',
    issuer: 'Sololearn',
    title: 'Python Intermediate',
    date: 'Oct. 2022',
    description:
      'Learned Python data types, exception handling, functional programming, and data hiding',
  },
]
