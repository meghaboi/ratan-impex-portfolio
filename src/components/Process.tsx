import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { useStaggerReveal } from '../lib/scroll'

const stages = [
  {
    name: 'Suppliers',
    text: 'Carefully selected international food and beverage brands, chosen for quality, consumer appeal and market potential. Vegetarian products only.',
    tags: ['International Import'],
  },
  {
    name: 'Ratan Impex',
    text: 'Imported, warehoused and managed end to end — from international supplier to the Indian market.',
    tags: ['Supply Chain', 'Logistics & Warehousing'],
  },
  {
    name: 'Distributors',
    text: 'Distributors, super stockists and dealers connect each brand to sales channels across India.',
    tags: ['Distribution', 'Sales'],
  },
  {
    name: 'Retail',
    text: 'Retailers, supermarkets, chain stores and modern trade — supported by launches, distribution tracking and business reviews.',
    tags: ['Trade Marketing'],
  },
  {
    name: 'Online',
    text: 'A dedicated e-commerce team, since 2024, places every brand on Swiggy Instamart, Amazon, JioMart, BigBasket and more.',
    tags: ['E-Commerce'],
  },
  {
    name: 'Consumers',
    text: 'International flavours in homes across India, backed by long-term brand partnerships.',
    tags: ['Brand Development'],
  },
]

export default function Process() {
  const gridRef = useRef<HTMLDivElement>(null)
  useStaggerReveal(gridRef, '[data-process-card]')

  return (
    <section className="relative bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">How It Moves</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            From international supplier to Indian consumer.
          </h2>
          <p className="text-body-fluid mt-5 max-w-xl text-ink/60">
            A growing pan-India distribution ecosystem connecting international brands with multiple channels across
            the Indian market.
          </p>
        </ScrollReveal>

        <div ref={gridRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {stages.map((s, i) => (
            <div key={s.name} data-process-card className="card-shadow rounded-2xl border border-ink/5 bg-cream p-7">
              <span className="font-editorial text-3xl italic text-ink/25">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display mt-3 text-2xl font-extrabold uppercase tracking-tight text-ink">
                {s.name}
              </h3>
              <p className="text-body-fluid mt-3 text-ink/65">{s.text}</p>
              <p className="label-meta mt-4 text-ink/40">{s.tags.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
