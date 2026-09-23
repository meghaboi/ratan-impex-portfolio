import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ImageReveal from './ImageReveal'
import ScrollReveal from './ScrollReveal'
import type { Product } from '../data/content'

type SpecimenProps = {
  product: Product
  brandName: string
  brandSlug: string
  brandColor: string
  index: number
  total: number
  reverse?: boolean
}

/** Large, alternating image + copy treatment for products that have real photography. */
export function ProductSpecimen({ product, brandName, brandSlug, brandColor, index, total, reverse }: SpecimenProps) {
  return (
    <div className="rule-t grid gap-8 border-ink/10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
      <ImageReveal
        className={`aspect-[4/5] w-full bg-[#f4efe2] ${reverse ? 'md:order-2' : ''}`}
        curtainColor="#f4efe2"
      >
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </ImageReveal>

      <div>
        <ScrollReveal>
          <span className="font-editorial text-2xl italic text-ink/35">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brandColor }} />
            <span className="label-meta text-ink/50">{brandName}</span>
          </div>
          <h3 className="font-display mt-4 text-heading font-extrabold leading-[1.02] text-ink">{product.name}</h3>
          <p className="text-body-fluid mt-5 max-w-md text-ink/70">{product.description}</p>
          {product.size && <p className="label-meta mt-4 text-ink/40">{product.size}</p>}
          <Link
            to={`/brands/${brandSlug}`}
            className="group mt-8 inline-flex items-center gap-1.5 label-meta text-ink"
          >
            View full {brandName} range
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}

type RowProps = {
  product: Product
  brandColor: string
  index: number
}

/** Plain typographic catalogue row for SKUs without photography — a printed catalogue mixes hero shots with listed items. */
export function ProductRow({ product, brandColor, index }: RowProps) {
  return (
    <ScrollReveal delay={Math.min(index * 0.02, 0.3)}>
      <div className="rule-t flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-ink/10 py-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-ink/30">{String(index + 1).padStart(2, '0')}</span>
          <h4 className="font-display text-lg font-semibold text-ink sm:text-xl">{product.name}</h4>
        </div>
        <div className="flex items-baseline gap-4 pl-8">
          {product.size && <span className="label-meta text-ink/40">{product.size}</span>}
          <span className="hidden h-1.5 w-1.5 rounded-full sm:inline-block" style={{ backgroundColor: brandColor }} />
        </div>
        <p className="w-full max-w-xl text-sm text-ink/60">{product.description}</p>
      </div>
    </ScrollReveal>
  )
}
