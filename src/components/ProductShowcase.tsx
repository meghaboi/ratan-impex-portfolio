import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { useSlideIn } from '../lib/scroll'
import { company } from '../data/content'

type Tile = {
  image: string
  alt: string
  className: string
  x: number
}

// Alternating sides/depths so the two left tiles and two right tiles slide in at slightly
// different rates as the section scrolls through — reads as parallax, not a single flat move.
const tiles: Tile[] = [
  { image: '/images/products/julies-butter-crackers.png', alt: "Julie's Butter Crackers", className: 'left-[4%] top-6 h-36 w-36 -rotate-6 xl:h-44 xl:w-44', x: -320 },
  { image: '/images/products/roshen-konafetto-choco.png', alt: 'Roshen Konafetto Wafers', className: 'left-[13%] top-64 h-32 w-32 rotate-3 xl:h-36 xl:w-36', x: -220 },
  { image: '/images/products/coco-royal-melon.png', alt: 'Coco Royal Coconut Milk — Melon', className: 'right-[13%] top-6 h-32 w-32 rotate-6 xl:h-36 xl:w-36', x: 220 },
  { image: '/images/products/chiko-cream-fudge.png', alt: 'Chiko Cream Fudge', className: 'right-[4%] top-64 h-36 w-36 -rotate-3 xl:h-44 xl:w-44', x: 320 },
]

function FlankingImage({ tile }: { tile: Tile }) {
  const ref = useRef<HTMLDivElement>(null)
  useSlideIn(ref, { x: tile.x, minWidth: 1280 })

  return (
    <div
      ref={ref}
      className={`card-shadow-dark absolute hidden overflow-hidden rounded-2xl bg-cream xl:block ${tile.className}`}
    >
      <img src={tile.image} alt={tile.alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}

/** The "products fly in as you scroll" band — flanking packshots slide in from off-canvas on
 *  both sides, scrubbed to scroll position. Replaces the old kinetic-type-only treatment. */
export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream xl:min-h-[600px] xl:py-32">
      {tiles.map((t) => (
        <FlankingImage key={t.image} tile={t} />
      ))}

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center md:px-10">
        <ScrollReveal>
          <span className="label-meta text-saffron">The Portfolio</span>
          <h2 className="font-editorial text-balance mt-4 text-heading italic leading-tight">
            International shelves, brought home to India.
          </h2>
          <p className="text-body-fluid mt-5 text-cream/70">{company.tagline}</p>
        </ScrollReveal>

        {/* Below xl there's no room for off-canvas flanking tiles — same packshots, a plain strip. */}
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 xl:hidden">
          {tiles.map((t) => (
            <div key={t.image} className="h-28 w-28 shrink-0 snap-center overflow-hidden rounded-2xl bg-cream">
              <img src={t.image} alt={t.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
