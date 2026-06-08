import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { Card } from '@/components/ui/Card'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PageShell } from '@/components/ui/PageShell'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { routeSeo, toPageMeta } from '@/config/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta(toPageMeta(routeSeo.contact))

  return (
    <PageShell className="py-16 sm:py-24">
      <Section className="py-0 md:py-0">
        <FadeInSection>
          <SectionHeading
            title="Get in touch"
            subtitle="Have a project in mind or want to connect? I'd love to hear from you."
            titleAs="h1"
          />
        </FadeInSection>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeInSection delay={0.08}>
            <ContactInfo />
          </FadeInSection>
          <FadeInSection delay={0.12}>
            <Card>
              <ContactForm />
            </Card>
          </FadeInSection>
        </div>
      </Section>
    </PageShell>
  )
}
