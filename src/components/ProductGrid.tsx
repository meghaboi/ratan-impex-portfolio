import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStaggerReveal } from '../lib/scroll'

export type GridItem = {
  key: string
  /** Omit when there's no photography — the card falls back to a colored initial tile. */
  image?: string | null
  title: string
  subtitle?: string
  color?: string
  to?: string
}

type Props = {
  items: GridItem[]
  className?: string
  /** Card count per row at the lg breakpoint — mobile is always 2-up. */
  columns?: 2 | 3 | 4
  onItemClick?: (item: GridItem, index: number) => void
}

const COLS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

/** Colorful, image-forward card grid — the rangdecor-style "product wall" used across
 *  the home teaser, /products, /brands/:slug and /gallery. Reveals in a GSAP scroll-triggered
 *  stagger rather than one card at a time. */
export default function ProductGrid({ items, className, columns = 3, onItemClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  useStaggerReveal(containerRef, '[data-grid-card]', [items.length])

  return (
    <div ref={containerRef} className={`grid grid-cols-2 gap-4 md:gap-6 ${COLS[columns]} ${className ?? ''}`}>
      {items.map((item, index) => {
        const isPackshot = item.image?.includes('/products/')
        const card = (
          <div
            data-grid-card
            className="group w-full overflow-hidden border border-ink/10 bg-white"
          >
            {item.image ? (
              <div className="aspect-square overflow-hidden bg-[#f7f5ef]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-105 ${isPackshot ? 'object-contain p-4 md:p-6' : 'object-cover'}`}
                />
              </div>
            ) : (
              <div
                className="flex aspect-square w-full items-center justify-center p-6 text-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundColor: item.color ?? '#1a1530' }}
              >
                <span className="font-display text-2xl font-extrabold uppercase leading-tight text-cream">
                  {item.title}
                </span>
              </div>
            )}
            <div className="min-h-[78px] border-t border-ink/10 p-3 md:min-h-[92px] md:p-4">
              {item.subtitle && <p className="label-meta text-ink/45">{item.subtitle}</p>}
              <p className="font-display mt-1 text-sm font-bold leading-tight text-ink md:text-base">{item.title}</p>
              {item.color && <span className="mt-2 block h-0.5 w-7" style={{ backgroundColor: item.color }} />}
            </div>
          </div>
        )

        if (item.to) {
          return (
            <Link key={item.key} to={item.to} className="block">
              {card}
            </Link>
          )
        }

        if (onItemClick) {
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onItemClick(item, index)}
              className="block w-full text-left"
            >
              {card}
            </button>
          )
        }

        return <div key={item.key}>{card}</div>
      })}
    </div>
  )
}
