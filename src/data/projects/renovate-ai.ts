import type { Project } from '@/types/project'
import { dateRange } from '@/lib/dates'
import { buildProjectImages } from '@/lib/images'

const description =
  'An AI-assisted lead management and consultation booking system for renovation businesses.'

export const renovateAi: Project = {
  slug: 'renovate-ai',
  title: 'RenovateAI',
  tagline: description,
  description,
  categories: ['web', 'fullstack', 'workflow-automation'],
  techStack: [
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'n8n',
    'Supabase',
    'Gemini API',
    'Resend',
    'Slack',
  ],
  techStackDetails: [
    {
      name: 'React 19 + TypeScript',
      note: 'Builds the responsive lead form and guided conversational intake experience.',
    },
    {
      name: 'Tailwind CSS',
      note: 'Provides the utility-first responsive design system, including reduced-motion support.',
    },
    {
      name: 'n8n',
      note: 'Orchestrates validation, AI scoring, storage, notifications, and follow-up workflows.',
    },
    {
      name: 'Supabase',
      note: 'Stores lead records, AI qualification payloads, and email delivery logs.',
    },
    {
      name: 'Gemini API',
      note: 'Scores leads, assigns HOT / WARM / COLD tiers, and drafts personalized email copy.',
    },
    {
      name: 'Resend + Slack',
      note: 'Delivers AI-generated follow-ups and alerts the team about HOT or unscored leads.',
    },
  ],
  features: [
    'Unified form and conversational-chat intake pipeline',
    'Gemini lead scoring from 0–100 with HOT, WARM, COLD, and UNSCORED classifications',
    'Personalized AI-drafted follow-up emails with tier-appropriate messaging',
    'Server-side honeypot and disposable-email filtering before AI processing',
    'Supabase lead upserts with complete AI qualification data and email delivery logs',
    'Slack alerts for HOT leads and AI scoring failures',
    'Guided chat states from FAQ through review and completed submission',
    'Responsive interface with reduced-motion support and optimized image loading',
  ],
  role: 'Full-stack Developer and Automation Specialist',
  dateRange: dateRange('2026-08', undefined, 'Aug. 2026 – Present'),
  featured: false,
  links: {
    live: 'https://renovate-ai-n8n.vercel.app/',
    repo: 'https://github.com/Aron-Arboleda/RenovateAI',
  },
  images: buildProjectImages('renovate-ai', [
    'chat-widget.webp',
    'workflow-1.webp',
    'workflow-2.webp',
    'workflow-3.webp',
    'workflow-4.webp',
    'slack-alert.webp',
    'follow-up-email.webp',
    'architecture.webp',
    'page-1.webp',
    'page-2.webp',
    'page-3.webp',
    'page-4.webp',
    'page-5.webp',
  ]),
  overview:
    'RenovateAI is a technology demonstration that automates lead qualification, routing, and consultation follow-up for renovation businesses. Visitors can submit an eight-field form or complete a guided chat intake; both paths feed a single n8n workflow.\n\nThe workflow validates every submission, calls Gemini to score the lead from 0–100, stores the result in Supabase, alerts the team when needed, and sends a personalized follow-up through Resend. If AI scoring fails or returns malformed data, the lead is still saved as UNSCORED and surfaced for manual review rather than being dropped.',
  contribution:
    'Built the React and TypeScript frontend experience and designed the n8n automation pipeline connecting Gemini, Supabase, Resend, and Slack. Implemented the guided chat-state flow, client-side validation, server-side spam safeguards, structured AI scoring, persistence, alerting, and AI-generated follow-up email delivery.',
  challenges: [
    'Ensuring every lead reaches storage and manual review even when the AI service times out or returns malformed data.',
    'Keeping the form and conversational widget aligned while routing both through one validation and scoring workflow.',
    'Preventing bot and disposable-email submissions from consuming AI quota without weakening the visitor experience.',
    'Generating useful, tier-appropriate email copy while keeping the operational handoff clear for the renovation team.',
  ],
  learnings: [
    'Graceful degradation is essential in automated lead pipelines: an UNSCORED record is safer than a lost lead.',
    'A shared backend workflow lets multiple intake experiences remain consistent as the product evolves.',
    'Structured AI output makes it practical to connect LLM scoring with business rules, notifications, and storage.',
    'Layered validation improves both conversion flow and protection of downstream automation resources.',
  ],
  results:
    'Each completed form or chat intake follows the same resilient path: validation → Gemini scoring → Supabase storage → Slack alerting when appropriate → personalized Resend follow-up. HOT leads are prioritized for contact within 24 hours, WARM leads receive helpful follow-up within 2–3 days, COLD leads enter a nurture queue, and UNSCORED leads are flagged for manual review.',
  sortOrder: 0,
}
