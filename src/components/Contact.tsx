import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import DotGrid from './DotGrid'
import { contact } from '../data/content'

const details = [
  { icon: Phone, label: 'Call Us', value: contact.phone, href: `tel:${contact.phoneRaw}` },
  { icon: Mail, label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: 'Visit Us', value: contact.address, href: undefined },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div className="absolute inset-0">
        <DotGrid
          dotSize={5}
          gap={28}
          baseColor="#2a2340"
          activeColor="#f4b333"
          proximity={150}
          shockRadius={230}
          shockStrength={4}
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/50 to-ink/85" />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <ScrollReveal>
          <span className="font-semibold uppercase tracking-widest text-saffron">Contact</span>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
            We deliver our products all over the country — reach out to us.
          </h2>

          <div className="mx-auto mt-10 grid gap-6 text-left sm:grid-cols-3">
            {details.map((d) => {
              const Icon = d.icon
              const content = (
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-saffron">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-cream/50">{d.label}</p>
                    <p className="mt-0.5 text-cream/90">{d.value}</p>
                  </div>
                </div>
              )
              return d.href ? (
                <a key={d.label} href={d.href} className="block transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              )
            })}
          </div>

          <div className="mx-auto mt-6 flex max-w-md items-start gap-4 text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-saffron">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-cream/50">Hours</p>
              {contact.hours.map((h) => (
                <p key={h.days} className="mt-0.5 text-cream/90">
                  {h.days}: <span className="text-cream/70">{h.time}</span>
                </p>
              ))}
            </div>
          </div>

          <a
            href={contact.whatsappCatalogue}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-4 font-semibold text-ink shadow-lg shadow-saffron/20 transition-transform hover:scale-105"
          >
            <MessageCircle size={20} />
            Request the Catalogue on WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
