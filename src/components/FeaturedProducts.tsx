import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FlipCard from './FlipCard'
import { brands } from '../data/content'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

type Featured = {
  brandSlug: string
  brandName: string
  name: string
  description: string
  image: string
  color: string
}

const featured: Featured[] = brands.flatMap((b) =>
  b.products
    .filter((p) => p.image)
    .map((p) => ({
      brandSlug: b.slug,
      brandName: b.name,
      name: p.name,
      description: p.description,
      image: p.image as string,
      color: b.color,
    })),
)

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-1/4 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-widest text-berry">Choose Your Best</span>
          <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
            Products people keep reaching for
          </h2>
          <p className="mt-3 text-ink/60">Tap or hover a card to flip it.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {featured.map((p) => (
            <motion.div key={p.brandSlug + p.name} variants={item} className="aspect-[3/4] w-full">
              <FlipCard
                width="100%"
                height="100%"
                radius={24}
                draggable={false}
                hoverScale={1.02}
                shadowOpacity={0.25}
                ariaLabel={`${p.name} — flip for details`}
                front={
                  <div className="relative h-full w-full bg-[#f4efe2]">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" draggable={false} />
                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.brandName}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="font-display text-sm font-semibold leading-snug text-white sm:text-base">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                }
                back={
                  <div
                    className="flex h-full w-full flex-col justify-between p-5"
                    style={{ background: `linear-gradient(160deg, ${p.color}, #1a1530)` }}
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                        {p.brandName}
                      </span>
                      <h3 className="font-display mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                        {p.name}
                      </h3>
                      <p className="mt-3 text-sm text-white/75">{p.description}</p>
                    </div>
                    <Link
                      to={`/brands/${p.brandSlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    >
                      View {p.brandName}
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
