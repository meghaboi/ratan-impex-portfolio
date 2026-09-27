import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { contact } from '../data/content'

const cards = [
  { icon: Phone, label: 'Call Us', value: contact.phone, href: `tel:${contact.phoneRaw}` },
  { icon: Mail, label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: 'Visit Us', value: contact.address, href: undefined },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden bg-ink pt-28 text-cream">
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Link to="/" className="label-meta mb-10 flex w-fit items-center gap-2 text-cream/60 hover:text-cream">
            <ArrowLeft size={14} /> Back home
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-meta text-saffron"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            Contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            We deliver across the country — reach out and we'll take it from there.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                {cards.map((c, i) => {
                  const Icon = c.icon
                  const body = (
                    <div className="card-shadow h-full rounded-2xl border border-ink/5 bg-cream-soft p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/15 text-saffron-dark">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <p className="label-meta mt-5 text-ink/50">{c.label}</p>
                      <p className="mt-1.5 text-body-fluid text-ink">{c.value}</p>
                    </div>
                  )
                  return (
                    <ScrollReveal key={c.label} delay={i * 0.06} className={c.label === 'Visit Us' ? 'sm:col-span-2' : ''}>
                      {c.href ? (
                        <a href={c.href} className="block h-full transition-opacity hover:opacity-80">
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </ScrollReveal>
                  )
                })}

                <ScrollReveal delay={0.18} className="sm:col-span-2">
                  <div className="card-shadow rounded-2xl border border-ink/5 bg-cream-soft p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/15 text-saffron-dark">
                      <Clock size={20} strokeWidth={1.75} />
                    </div>
                    <p className="label-meta mt-5 text-ink/50">Hours</p>
                    {contact.hours.map((h) => (
                      <p key={h.days} className="mt-1.5 text-body-fluid text-ink">
                        {h.days}: <span className="text-ink/60">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.24}>
                <a
                  href={contact.whatsappCatalogue}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 label-meta text-cream transition-colors hover:bg-ink/85 sm:w-auto"
                >
                  <MessageCircle size={16} />
                  Request the Catalogue on WhatsApp
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="card-shadow aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <iframe
                  title="Ratan Impex location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
