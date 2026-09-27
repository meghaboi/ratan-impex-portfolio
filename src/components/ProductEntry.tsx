import ScrollReveal from './ScrollReveal'
import type { Product } from '../data/content'

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
