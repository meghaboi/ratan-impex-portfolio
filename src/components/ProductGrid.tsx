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
      {items.map((item, i) => {
        const card = (
          <div
            data-grid-card
            className="card-shadow group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/5"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center p-6 text-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundColor: item.color ?? '#1a1530' }}
              >
                <span className="font-display text-2xl font-extrabold uppercase leading-tight text-cream">
                  {item.title}
                </span>
              </div>
            )}
            {item.image && <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />}
            {item.color && item.image && (
              <span
                className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full ring-2 ring-cream/70"
                style={{ backgroundColor: item.color }}
              />
            )}
            {item.image && (
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                {item.subtitle && <p className="label-meta text-cream/70">{item.subtitle}</p>}
                <p className="font-display mt-0.5 text-sm font-bold leading-tight text-cream md:text-base">
                  {item.title}
                </p>
              </div>
            )}
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
              onClick={() => onItemClick(item, i)}
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
