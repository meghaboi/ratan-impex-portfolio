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
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
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
          <span className="label-meta text-saffron">07 — Contact</span>
          <h2 className="font-editorial text-balance mt-4 text-heading italic leading-tight">
            We deliver across the country — reach out to us.
          </h2>

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

          <a
            href={contact.whatsappCatalogue}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 border border-cream/25 px-7 py-4 label-meta transition-colors hover:bg-cream hover:text-ink"
          >
            <MessageCircle size={16} />
            Request the Catalogue on WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
