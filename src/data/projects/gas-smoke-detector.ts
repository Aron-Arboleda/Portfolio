import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'An Arduino-based gas and smoke detector device for a Digital Design course final case study.'

export const gasSmokeDetector: Project = {
  slug: 'gas-smoke-detector',
  title: 'Arduino Gas & Smoke Warning System',
  tagline: description,
  description,
  categories: ['hardware'],
  techStack: ['C++', 'Arduino'],
  techStackDetails: [
    {
      name: 'C++',
      note: 'This is the default programming language for Arduino. It is a powerful language for embedded systems and electronics.',
    },
    {
      name: 'Arduino',
      note: 'A microcontroller that is a powerful microcontroller that is easy to learn and use. This powers the logical functionalities of the device.',
    },
  ],
  features: ['Gas detection', 'Smoke detection', 'Warning alert system'],
  role: 'Electronics engineer of the project',
  dateRange: dateRange('2025-04', '2025-05', 'Apr. 2025 – May 2025'),
  featured: false,
  links: {
    repo: 'https://github.com/Aron-Arboleda/GasAndSmokeDetector',
  },
  images: buildProjectImages('gas-smoke-detector', [
    'device.webp',
    'wiring.webp',
    'demo.webp',
  ]),
  overview: description,
  contribution:
    'Electronics engineer of the project — designed and built the detector device.',
  challenges: [
    'Designing the circuit',
    'Assembling the components',
    'Programming the Arduino',
    'Testing the device',
  ],
  learnings: [
    'Learned how to use the Arduino IDE',
    'Learned how to use the Arduino components',
    'Learned how to use the Arduino programming language',
    'Learned how to use the Arduino testing tools',
  ],
  sortOrder: 4,
}
