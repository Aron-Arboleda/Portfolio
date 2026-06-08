import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import type { Education } from '@/types/education'

type EducationCardProps = {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  const subtitle =
    education.degree ?? education.strand ?? education.specialization

  return (
    <Card>
      <p className="m-0 text-sm text-muted">{education.graduated}</p>
      <h3 className="m-0 mt-2 font-heading text-xl text-primary">
        {education.institution}
      </h3>
      <p className="m-0 mt-1 text-sm text-muted">{education.location}</p>
      {subtitle && (
        <p className="m-0 mt-3 text-sm text-primary">{subtitle}</p>
      )}
      {education.honors && (
        <Badge className="mt-3">{education.honors}</Badge>
      )}
      {education.coursework && education.coursework.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {education.coursework.map((course) => (
            <Tag key={course}>{course}</Tag>
          ))}
        </div>
      )}
    </Card>
  )
}
