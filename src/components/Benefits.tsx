import { useRef } from 'react'
import { Package, MapPinned, ShieldCheck, Leaf, Handshake, TrendingUp } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useStaggerReveal } from '../lib/scroll'
import { benefits } from '../data/content'

const ICONS = [Package, MapPinned, ShieldCheck, Leaf, Handshake, TrendingUp]

export default function Benefits() {
  const gridRef = useRef<HTMLDivElement>(null)
  useStaggerReveal(gridRef, '[data-benefit-card]')

  return (
    <section className="relative bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">Why Ratan Impex</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            What makes us the partner of choice.
          </h2>
        </ScrollReveal>

        <div ref={gridRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((b, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={b.title}
                data-benefit-card
                className="card-shadow rounded-2xl border border-ink/5 bg-cream p-7 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/15 text-saffron-dark">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display mt-5 text-xl font-extrabold text-ink">{b.title}</h3>
                <p className="text-body-fluid mt-2 text-ink/65">{b.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
