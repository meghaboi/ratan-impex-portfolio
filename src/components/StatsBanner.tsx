import ScrollReveal from './ScrollReveal'
import Counter from './Counter'
import { stats } from '../data/content'

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-saffron">Threshold of Success</span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={Math.min(i * 0.06, 0.3)}>
              <div className="text-center sm:text-left">
                <div className="font-display text-4xl font-extrabold text-saffron sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="label-meta mt-2 text-cream/60">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
