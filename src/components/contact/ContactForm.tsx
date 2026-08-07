import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'

const inputClassName = cn(
  'w-full rounded-button border border-border bg-surface px-4 py-2.5 text-sm text-primary',
  'placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
)

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const submitViaMailto = () => {
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || 'visitor'}`
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!web3formsKey) {
      submitViaMailto()
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          message,
          subject: `Portfolio contact from ${name || 'visitor'}`,
        }),
      })

      const data = (await response.json()) as { success?: boolean }

      if (response.ok && data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        return
      }

      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-busy={isSubmitting}
    >
      <div
        role="status"
        aria-live="polite"
        className={cn(
          status === 'success' &&
            'rounded-card border border-accent/30 bg-accent-muted px-4 py-3 text-sm text-primary',
          status === 'error' &&
            'rounded-card border border-border-strong bg-surface-muted px-4 py-3 text-sm text-primary',
          status !== 'success' && status !== 'error' && 'sr-only'
        )}
      >
        {status === 'success' && (
          <p className="m-0">Message sent. I&apos;ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="m-0">
            Something went wrong.{' '}
            <button
              type="button"
              onClick={submitViaMailto}
              className="text-accent underline-offset-2 hover:underline"
            >
              Email me directly
            </button>{' '}
            instead.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm text-muted"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClassName}
          placeholder="Your name"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm text-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClassName}
          placeholder="you@example.com"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm text-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          className={cn(inputClassName, 'resize-y')}
          placeholder="Your message..."
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>

      <p className="m-0 text-xs text-muted">
        {web3formsKey
          ? `Your message is sent securely to ${profile.email}.`
          : `Form backend not configured locally, opens your email client to send to ${profile.email}.`}
      </p>
    </form>
  )
}
