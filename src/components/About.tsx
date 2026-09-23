import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { company, mission, vision, values, departments, countries } from '../data/content'

const pillars = [
  { title: 'Our Mission', text: mission },
  { title: 'Our Vision', text: vision },
  { title: 'Our Values', text: values },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-berry/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-8">
        <ScrollReveal>
          <span className="font-semibold uppercase tracking-widest text-berry">About Us</span>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            {company.positioning}
          </h2>
          <p className="mt-6 text-lg text-ink/70">{company.intro}</p>
          <p className="mt-4 text-lg text-ink/70">{company.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {departments.map((d) => (
              <span
                key={d}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
              >
                {d}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-berry">
            Countries we import from
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {countries.map((c) => (
              <span
                key={c}
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream"
              >
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div ref={ref} className="relative">
          <motion.div style={{ y: imgY }} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-saffron/30 via-berry/10 to-leaf/20 blur-2xl" />
            <img
              src="/images/gallery/about-showcase.jpg"
              alt="Ratan Impex international brand curation"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-ink/20"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl px-6 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-ink/5 bg-white p-8 shadow-sm shadow-ink/5 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-display text-xl font-semibold text-berry">{p.title}</h3>
                <p className="mt-3 text-ink/70">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
