import ScrollReveal from './ScrollReveal'
import Counter from './Counter'
import { countries, stats } from '../data/content'

const deliveryStats = stats.filter((s) => s.label !== 'Products' && s.label !== 'Brands')

export default function GlobalReach() {
  return (
    <section id="global" className="relative bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-saffron">05 — Global Reach</span>
          <h2 className="font-editorial text-balance mt-4 max-w-3xl text-heading italic leading-tight">
            Sourced from six countries, delivered to every corner of India.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10">
          <div>
            <ScrollReveal>
              <span className="label-meta text-cream/50">Sourced From</span>
            </ScrollReveal>
            <div className="mt-6">
              {countries.map((c, i) => (
                <ScrollReveal key={c} delay={i * 0.05}>
                  <div className="rule-t flex items-baseline justify-between gap-4 border-cream/10 py-5">
                    <span className="font-display text-2xl font-semibold sm:text-3xl">{c}</span>
                    <span className="font-mono text-xs text-cream/40">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </ScrollReveal>
              ))}
              <div className="rule-t border-cream/10" />
            </div>
          </div>

          <div>
            <ScrollReveal>
              <span className="label-meta text-cream/50">Delivered Across</span>
            </ScrollReveal>
            <div className="mt-6">
              {deliveryStats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.06}>
                  <div className="rule-t flex items-baseline justify-between gap-4 border-cream/10 py-5">
                    <span className="label-meta text-cream/60">{s.label}</span>
                    <span className="font-display text-4xl font-bold text-saffron sm:text-5xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                  </div>
                </ScrollReveal>
              ))}
              <div className="rule-t border-cream/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
