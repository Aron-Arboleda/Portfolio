import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'

const inputClassName = cn(
  'w-full rounded-button border border-border bg-surface px-4 py-2.5 text-sm text-primary',
  'placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent',
)

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm text-muted">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClassName}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm text-muted">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClassName}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          className={cn(inputClassName, 'resize-y')}
          placeholder="Your message..."
        />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>

      <p className="m-0 text-xs text-muted">
        Opens your email client to send a message to {profile.email}.
      </p>
    </form>
  )
}
