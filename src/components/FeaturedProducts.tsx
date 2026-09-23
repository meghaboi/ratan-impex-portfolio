import ScrollReveal from './ScrollReveal'
import { ProductSpecimen } from './ProductEntry'
import { brands } from '../data/content'

type Featured = {
  brandSlug: string
  brandName: string
  brandColor: string
  name: string
  description: string
  size?: string
  image: string
}

const featured: Featured[] = brands.flatMap((b) =>
  b.products
    .filter((p) => p.image)
    .map((p) => ({
      brandSlug: b.slug,
      brandName: b.name,
      brandColor: b.color,
      name: p.name,
      description: p.description,
      size: p.size,
      image: p.image as string,
    })),
)

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <span className="label-meta text-berry">03 — The Collection</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-heading font-extrabold text-ink">
            A closer look at what people keep reaching for.
          </h2>
        </ScrollReveal>

        <div className="mt-4">
          {featured.map((p, i) => (
            <ProductSpecimen
              key={p.brandSlug + p.name}
              product={p}
              brandName={p.brandName}
              brandSlug={p.brandSlug}
              brandColor={p.brandColor}
              index={i}
              total={featured.length}
              reverse={i % 2 === 1}
            />
          ))}
          <div className="rule-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
