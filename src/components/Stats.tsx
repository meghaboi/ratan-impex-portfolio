import ScrollReveal from './ScrollReveal'
import Counter from './Counter'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="relative -mt-1 bg-ink py-16 text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.1} className="text-center">
            <div className="font-display text-4xl font-semibold text-saffron sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-cream/70 sm:text-base">
              {s.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
