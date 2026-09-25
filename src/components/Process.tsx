import ScrollReveal from './ScrollReveal'

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
  return (
    <section id="process" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">04 — How It Moves</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            From international supplier to Indian consumer.
          </h2>
          <p className="text-body-fluid mt-5 max-w-xl text-ink/60">
            A growing pan-India distribution ecosystem connecting international brands with multiple channels across
            the Indian market.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          {stages.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05}>
              <div className="rule-t grid gap-4 border-ink/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-start md:gap-10">
                <span className="font-editorial text-3xl italic text-ink/30">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
                  {s.name}
                </h3>
                <div>
                  <p className="text-body-fluid max-w-md text-ink/70">{s.text}</p>
                  <p className="label-meta mt-4 text-ink/40">{s.tags.join(' · ')}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="rule-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
