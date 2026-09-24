import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import FeaturedProducts from '../components/FeaturedProducts'
import { ProductRow } from '../components/ProductEntry'
import Contact from '../components/Contact'
import { brands, stats } from '../data/content'

const productsStat = stats.find((s) => s.label === 'Products')!
const brandsStat = stats.find((s) => s.label === 'Brands')!

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden bg-ink pt-28 text-cream">
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Link to="/" className="label-meta mb-10 flex w-fit items-center gap-2 text-cream/60 hover:text-cream">
            <ArrowLeft size={14} /> Back home
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-meta text-saffron"
          >
            {brandsStat.value}{brandsStat.suffix} Brands · {productsStat.value}{productsStat.suffix} Products
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            Every SKU we import and distribute, from confectionery to snacks and drinks.
          </motion.p>
        </div>
      </section>

      <FeaturedProducts />

      <section className="bg-cream-soft py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <ScrollReveal>
            <span className="label-meta text-berry">Full Catalogue</span>
            <h2 className="font-display mt-3 text-heading font-extrabold text-ink">Every remaining SKU, by brand.</h2>
          </ScrollReveal>

          <div className="mt-14">
            {brands.map((brand) => {
              const withoutPhoto = brand.products.filter((p) => !p.image)
              if (withoutPhoto.length === 0) return null
              return (
                <div key={brand.slug} className="mt-16 first:mt-0">
                  <ScrollReveal>
                    <div className="rule-b flex items-baseline justify-between gap-4 border-ink/10 pb-4">
                      <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                        {brand.name}
                      </h3>
                      <Link to={`/brands/${brand.slug}`} className="label-meta text-ink/50 hover:text-ink">
                        {brand.country}
                      </Link>
                    </div>
                  </ScrollReveal>
                  <div className="mt-2">
                    {withoutPhoto.map((p, i) => (
                      <ProductRow key={p.name} product={p} brandColor={brand.color} index={i} />
                    ))}
                  </div>
                </div>
              )
            })}
            <div className="rule-t border-ink/10" />
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
