import { motion, useReducedMotion } from 'framer-motion'
import { MilestoneCard } from '@/components/journey/MilestoneCard'
import type { JourneyMilestone } from '@/types/journey'
import { cn } from '@/lib/cn'

type TimelineProps = {
  milestones: JourneyMilestone[]
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: JourneyMilestone
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="relative pb-16 last:pb-0">
      <div
        className="absolute left-0 top-4 hidden h-3 w-3 border-2 border-accent bg-surface-elevated lg:left-1/2 lg:block lg:-translate-x-1/2"
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-2 lg:gap-12">
        <div
          className={cn(
            'relative lg:max-w-md',
            isEven ? 'lg:col-start-1 lg:justify-self-end lg:pr-10' : 'lg:col-start-2 lg:pl-10',
          )}
        >
          <span
            className="pointer-events-none absolute -top-1 font-mono text-5xl font-bold leading-none text-accent/20 lg:text-6xl"
            aria-hidden="true"
          >
            {milestone.year}
          </span>
          <MilestoneCard
            milestone={milestone}
            align={isEven ? 'right' : 'left'}
          />
        </div>
      </div>
    </div>
  )
}

export function Timeline({ milestones }: TimelineProps) {
  const shouldReduceMotion = useReducedMotion()
  const sorted = [...milestones].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div className="relative">
      <div
        className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative ml-2 border-l-2 border-border pl-8 lg:ml-0 lg:border-0 lg:pl-0">
        {sorted.map((milestone, index) => {
          const item = <TimelineItem milestone={milestone} index={index} />

          if (shouldReduceMotion) {
            return <div key={milestone.id}>{item}</div>
          }

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {item}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
