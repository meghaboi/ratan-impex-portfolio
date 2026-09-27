import ScrollReveal from './ScrollReveal'
import ProductGrid, { type GridItem } from './ProductGrid'
import { brands } from '../data/content'

const items: GridItem[] = brands.map((b) => ({
  key: b.slug,
  image: b.poster ?? b.logo,
  title: b.name,
  subtitle: b.country,
  color: b.color,
  to: `/brands/${b.slug}`,
}))

export default function BrandIndex() {
  return (
    <section className="relative bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
            <div>
              <span className="label-meta text-berry">Brand Portfolio</span>
              <h2 className="font-display mt-3 text-heading font-extrabold text-ink">
                {brands.length} brands, one table
              </h2>
            </div>
            <p className="max-w-xs text-body-fluid text-ink/60">
              Every brand we import, one at a time — click through for the full range.
            </p>
          </div>
        </ScrollReveal>

        <ProductGrid items={items} columns={3} />
      </div>
    </section>
  )
}
