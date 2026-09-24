import ScrollReveal from './ScrollReveal'
import ImageReveal from './ImageReveal'
import { company, mission, vision, values, capabilities } from '../data/content'

const pillars = [
  { numeral: 'I', title: 'Our Mission', text: mission },
  { numeral: 'II', title: 'Our Vision', text: vision },
  { numeral: 'III', title: 'Our Values', text: values },
]

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">01 — Who We Are</span>
        </ScrollReveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-end">
          <ScrollReveal>
            <h2 className="font-editorial text-balance text-heading italic leading-[1.03] text-ink">
              {company.positioning}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-fluid text-ink/70">{company.intro}</p>
            <p className="mt-4 text-body-fluid text-ink/70">{company.description}</p>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-24">
          <ImageReveal className="ml-auto aspect-[16/9] w-full md:w-[70%]">
            <img
              src="/images/gallery/about-showcase.jpg"
              alt="Ratan Impex international brand curation"
              className="h-full w-full object-cover"
            />
          </ImageReveal>
        </div>

        <div className="mt-20 md:mt-28">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="rule-t grid gap-3 border-ink/10 py-8 md:grid-cols-[100px_220px_1fr] md:items-baseline md:gap-6">
                <span className="font-editorial text-3xl italic text-saffron-dark">{p.numeral}</span>
                <h3 className="label-meta text-ink">{p.title}</h3>
                <p className="text-body-fluid max-w-xl text-ink/70">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
          <div className="rule-t border-ink/10" />
        </div>

        <ScrollReveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-body-fluid text-ink/50">
            <span className="label-meta text-ink/70">Core Capabilities — </span>
            {capabilities.join(' / ')}
          </p>
          <p className="mt-4 max-w-3xl text-body-fluid text-ink/50">
            <span className="label-meta text-ink/70">Offices — </span>
            {company.offices.join(' / ')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
