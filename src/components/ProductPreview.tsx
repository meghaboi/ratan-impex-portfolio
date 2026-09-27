import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import ProductGrid, { type GridItem } from './ProductGrid'
import { brands, stats, allProductPhotos } from '../data/content'

const productsStat = stats.find((s) => s.label === 'Products')!
const brandsStat = stats.find((s) => s.label === 'Brands')!

const productImageOwner = new Map(
  brands.flatMap((b) => b.products.filter((p) => p.image).map((p) => [p.image as string, b] as const)),
)

const featured: GridItem[] = allProductPhotos.slice(0, 8).map((p) => {
  const brand = productImageOwner.get(p.image)
  return {
    key: p.image,
    image: p.image,
    title: p.title,
    subtitle: brand?.country,
    color: brand?.color,
    to: brand ? `/brands/${brand.slug}` : undefined,
  }
})

export default function ProductPreview() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
            <div>
              <span className="label-meta text-berry">The Collection</span>
              <h2 className="font-display text-balance mt-3 max-w-2xl text-heading font-extrabold text-ink">
                {productsStat.value}
                {productsStat.suffix} products from {brandsStat.value}
                {brandsStat.suffix} international brands.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-1.5 label-meta text-ink/70 hover:text-ink"
            >
              Explore All Products
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <ProductGrid items={featured} columns={4} />
      </div>
    </section>
  )
}
