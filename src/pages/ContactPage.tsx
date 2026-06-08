import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { Card } from '@/components/ui/Card'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function ContactPage() {
  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <SectionHeading
          title="Get in touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
          titleAs="h1"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />
          <Card>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </PageShell>
  )
}
