import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import BrandMark from './BrandMark'
import { brands } from '../data/content'

export default function BrandWall() {
  const [hovered, setHovered] = useState(0)
  const active = brands[hovered]
  const activeImage = active.poster ?? active.logo

  return (
    <section id="brands" className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <div className="rule-b flex flex-wrap items-end justify-between gap-6 border-cream/10 pb-10">
            <div>
              <span className="label-meta text-saffron">02 — Brand Portfolio</span>
              <h2 className="font-display mt-3 text-heading font-extrabold">{brands.length} brands, one table</h2>
            </div>
            <Link to="/brands" className="group inline-flex items-center gap-1.5 label-meta text-cream/70 hover:text-cream">
              Explore All Brands
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Desktop: hover wall with a cross-fading background image */}
        <div className="relative mt-4 hidden min-h-[620px] md:block">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeImage && (
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 0.32, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img src={activeImage} alt="" className="h-full w-full object-cover" loading="lazy" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink" />
          </div>

          <div className="relative">
            {brands.map((brand, i) => (
              <Link
                key={brand.slug}
                to={`/brands/${brand.slug}`}
                onMouseEnter={() => setHovered(i)}
                className={`rule-t flex items-baseline justify-between gap-6 border-cream/10 py-5 transition-opacity duration-300 lg:py-6 ${
                  hovered === i ? 'opacity-100' : 'opacity-35 hover:opacity-70'
                }`}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-cream/40">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-4xl font-extrabold uppercase tracking-tight lg:text-6xl">
                    {brand.name}
                  </span>
                </span>
                <span className="label-meta hidden text-cream/50 sm:inline">{brand.country}</span>
              </Link>
            ))}
            <div className="rule-t border-cream/10" />
          </div>
        </div>

        {/* Mobile: swipeable cards, image shown inline instead of on hover */}
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:hidden">
          {brands.map((brand) => {
            const image = brand.poster ?? brand.logo
            return (
              <Link
                key={brand.slug}
                to={`/brands/${brand.slug}`}
                className="w-[78vw] shrink-0 snap-center"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-cream/5">
                  {image ? (
                    <img src={image} alt={brand.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <BrandMark brand={brand} className="max-h-10 w-auto max-w-[70%] object-contain" textClassName="text-lg" />
                    </div>
                  )}
                </div>
                <h3 className="font-display mt-3 text-2xl font-extrabold uppercase tracking-tight">{brand.name}</h3>
                <span className="label-meta text-cream/50">{brand.country}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
