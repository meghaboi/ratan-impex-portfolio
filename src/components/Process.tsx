import ScrollReveal from './ScrollReveal'

const stages = [
  {
    name: 'Source',
    text: "Identifying the world's finest food and confectionery brands worth bringing home.",
    tags: ['Trade Marketing', 'Sales Department'],
  },
  {
    name: 'Import',
    text: 'Every shipment cleared, documented and accounted for before it reaches Indian shores.',
    tags: ['Finance', 'IT Department'],
  },
  {
    name: 'Warehouse',
    text: 'Received, checked and held in trust until it is ready to move.',
    tags: ['Supply Chain', 'Logistics & Warehouse'],
  },
  {
    name: 'Distribute',
    text: 'Out to 400+ distributors across 28 states, on schedule, every time.',
    tags: ['Sales Department', 'Logistics & Warehouse'],
  },
  {
    name: 'Shelf',
    text: 'From our warehouse to retail shelves and doorsteps nationwide.',
    tags: ['Trade Marketing', 'E-Commerce'],
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">04 — How It Moves</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            From origin to your nearest shelf.
          </h2>
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
