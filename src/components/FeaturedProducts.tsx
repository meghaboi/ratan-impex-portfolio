import ScrollReveal from './ScrollReveal'
import ProductGrid, { type GridItem } from './ProductGrid'
import { brands } from '../data/content'

const items: GridItem[] = brands.flatMap((b) =>
  b.products
    .filter((p) => p.image)
    .map((p) => ({
      key: `${b.slug}-${p.name}`,
      image: p.image,
      title: p.name,
      subtitle: b.name,
      color: b.color,
      to: `/brands/${b.slug}`,
    })),
)

export default function FeaturedProducts() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">The Collection</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            A closer look at what people keep reaching for.
          </h2>
        </ScrollReveal>

        <div className="mt-4">
          <ProductGrid items={items} columns={4} />
        </div>
      </div>
    </section>
  )
}
