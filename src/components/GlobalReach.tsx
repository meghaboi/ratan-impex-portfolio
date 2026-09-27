import ScrollReveal from './ScrollReveal'
import { countries } from '../data/content'

export default function GlobalReach() {
  return (
    <section className="relative bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-saffron">Global Reach</span>
          <h2 className="font-editorial text-balance mt-4 max-w-3xl text-heading italic leading-tight">
            Sourced from six countries, delivered to every corner of India.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {countries.map((c) => (
              <span
                key={c}
                className="font-display rounded-full border border-cream/20 px-5 py-2.5 text-sm font-semibold sm:text-base"
              >
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
