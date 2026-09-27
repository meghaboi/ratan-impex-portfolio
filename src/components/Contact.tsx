import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import DotGrid from './DotGrid'
import { contact } from '../data/content'

const details = [
  { icon: Phone, label: 'Call Us', value: contact.phone, href: `tel:${contact.phoneRaw}` },
  { icon: Mail, label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: 'Visit Us', value: contact.address, href: undefined },
]

type Props = {
  /** Home teaser: heading + single CTA only. Full detail list lives on the /contact page. */
  variant?: 'full' | 'compact'
}

export default function Contact({ variant = 'full' }: Props) {
  const compact = variant === 'compact'

  return (
    <section id="contact" className={`relative overflow-hidden bg-ink text-cream ${compact ? 'py-24 md:py-32' : 'py-28 md:py-40'}`}>
      <div className="absolute inset-0 opacity-70">
        <DotGrid
          dotSize={4}
          gap={30}
          baseColor="#2a2340"
          activeColor="#f4b333"
          proximity={140}
          shockRadius={200}
          shockStrength={3}
          className="h-full w-full"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <ScrollReveal>
          <span className="label-meta text-saffron">Contact</span>
          <h2 className="font-editorial text-balance mt-4 text-heading italic leading-tight">
            We deliver across the country — reach out to us.
          </h2>

          {!compact && (
            <div className="mt-14">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="rule-t flex items-start gap-4 border-cream/10 py-6">
                    <Icon size={18} className="mt-0.5 shrink-0 text-saffron" />
                    <div>
                      <p className="label-meta text-cream/45">{d.label}</p>
                      <p className="mt-1 text-cream/90">{d.value}</p>
                    </div>
                  </div>
                )
                return d.href ? (
                  <a key={d.label} href={d.href} className="block transition-opacity hover:opacity-75">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                )
              })}

              <div className="rule-t flex items-start gap-4 border-cream/10 py-6">
                <Clock size={18} className="mt-0.5 shrink-0 text-saffron" />
                <div>
                  <p className="label-meta text-cream/45">Hours</p>
                  {contact.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-cream/90">
                      {h.days}: <span className="text-cream/60">{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="rule-t border-cream/10" />
            </div>
          )}

          <div className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap ${compact ? 'mt-10' : 'mt-12'}`}>
            <a
              href={contact.whatsappCatalogue}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cream/25 px-7 py-4 label-meta transition-colors hover:bg-cream hover:text-ink"
            >
              <MessageCircle size={16} />
              Request the Catalogue on WhatsApp
            </a>
            {compact && (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-cream/25 px-7 py-4 label-meta text-cream/80 transition-colors hover:bg-cream hover:text-ink"
              >
                Full Contact Details
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
