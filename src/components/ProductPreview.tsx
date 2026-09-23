import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import Counter from './Counter'
import DriftWall from './DriftWall'
import { brands, stats, allProductPhotos } from '../data/content'

const productsStat = stats.find((s) => s.label === 'Products')!

export default function ProductPreview() {
  return (
    <section id="products" className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-2 md:items-center md:gap-10 md:px-10">
        <div>
          <ScrollReveal>
            <span className="label-meta text-berry">03 — The Collection</span>
            <h2 className="font-editorial text-balance mt-4 text-heading italic leading-tight text-ink">
              {productsStat.value}
              {productsStat.suffix} products, {brands.length} brands, one warehouse.
            </h2>
          </ScrollReveal>

          <div className="mt-14">
            <ScrollReveal delay={0.05}>
              <div className="rule-t flex items-baseline justify-between gap-4 border-ink/10 py-6">
                <span className="label-meta text-ink/50">Brands Imported</span>
                <span className="font-display text-4xl font-bold text-berry sm:text-5xl">
                  <Counter value={brands.length} />
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rule-t flex items-baseline justify-between gap-4 border-ink/10 py-6">
                <span className="label-meta text-ink/50">Products Distributed</span>
                <span className="font-display text-4xl font-bold text-berry sm:text-5xl">
                  <Counter value={productsStat.value} suffix={productsStat.suffix} />
                </span>
              </div>
            </ScrollReveal>
            <div className="rule-t border-ink/10" />
          </div>

          <ScrollReveal delay={0.15}>
            <Link
              to="/products"
              className="group mt-10 inline-flex items-center gap-2 border border-ink/20 px-7 py-4 label-meta text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Explore All Products
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="h-[70vh] md:h-[80vh]">
          <DriftWall
            items={allProductPhotos}
            columns={4}
            tileWidth={200}
            tileHeight={140}
            gap={14}
            speed={16}
            tilt={12}
            turn={-8}
            depth={80}
            dim={0.4}
            fade={0.3}
            lift={40}
            parallax={0.7}
            overlayColor="#1a1530"
          />
        </div>
      </div>
    </section>
  )
}
