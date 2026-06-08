import { motion, useReducedMotion } from 'framer-motion'
import { MilestoneCard } from '@/components/journey/MilestoneCard'
import type { JourneyMilestone } from '@/types/journey'

type TimelineProps = {
  milestones: JourneyMilestone[]
}

function TimelineItem({
  milestone,
  isLast,
}: {
  milestone: JourneyMilestone
  isLast: boolean
}) {
  return (
    <div className={`relative ${isLast ? 'pb-0' : 'pb-12'}`}>
      <div
        className="absolute -left-[calc(2rem+7px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface-elevated lg:-left-[calc(3rem+7px)]"
        aria-hidden="true"
      />
      <MilestoneCard milestone={milestone} />
    </div>
  )
}

export function Timeline({ milestones }: TimelineProps) {
  const shouldReduceMotion = useReducedMotion()
  const sorted = [...milestones].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div className="relative ml-2 border-l-2 border-border pl-8 lg:ml-4 lg:pl-12">
      {sorted.map((milestone, index) => {
        const isLast = index === sorted.length - 1
        const item = (
          <TimelineItem milestone={milestone} isLast={isLast} />
        )

        if (shouldReduceMotion) {
          return <div key={milestone.id}>{item}</div>
        }

        return (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            {item}
          </motion.div>
        )
      })}
    </div>
  )
}
