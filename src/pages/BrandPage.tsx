import { Fragment, useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Contact from '../components/Contact'
import ProductGrid, { type GridItem } from '../components/ProductGrid'
import { ProductRow } from '../components/ProductEntry'
import { useParallax } from '../lib/scroll'
import { brands, contact } from '../data/content'

export default function BrandPage() {
  const { slug } = useParams()
  const brand = brands.find((b) => b.slug === slug)
  const posterRef = useRef<HTMLImageElement>(null)
  useParallax(posterRef, 40)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!brand) return <Navigate to="/" replace />

  const withPhoto = brand.products.filter((p) => p.image)
  const withoutPhoto = brand.products.filter((p) => !p.image)
  const gridItems: GridItem[] = withPhoto.map((p) => ({
    key: p.name,
    image: p.image,
    title: p.name,
    subtitle: p.size,
    color: brand.color,
  }))

  return (
    // Keyed on slug: without this, navigating brand-to-brand (same route element, new params)
    // wouldn't remount the page, so the hero's mount animations and this scroll-scrubbed
    // parallax tween would go stale after the first switch instead of restarting per brand.
    <Fragment key={brand.slug}>
      <section className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden bg-ink pt-28 text-cream">
        {brand.poster && (
          <div className="absolute inset-0">
            <img ref={posterRef} src={brand.poster} alt="" className="h-full w-full scale-125 object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          </div>
        )}

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10">
          <Link to="/brands" className="label-meta mb-10 flex w-fit items-center gap-2 text-cream/60 hover:text-cream">
            <ArrowLeft size={14} /> Back to all brands
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-meta"
            style={{ color: brand.color }}
          >
            {brand.country}
            {brand.products.length > 0 && ` · ${brand.products.length} Products`}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            {brand.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            {brand.tagline}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            href={contact.whatsappCatalogue}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 border border-cream/25 px-6 py-3.5 label-meta transition-colors hover:bg-cream hover:text-ink"
          >
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </motion.a>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <ScrollReveal>
            <span className="label-meta text-berry">Overview</span>
            <p className="text-body-fluid mt-4 max-w-2xl text-ink/70">{brand.overview}</p>
          </ScrollReveal>

          {gridItems.length > 0 && (
            <div className="mt-10">
              <ProductGrid items={gridItems} columns={4} />
            </div>
          )}

          {withoutPhoto.length > 0 && (
            <div className="mt-16">
              <ScrollReveal>
                <span className="label-meta text-ink/40">Full Range</span>
              </ScrollReveal>
              <div className="mt-4">
                {withoutPhoto.map((p, i) => (
                  <ProductRow key={p.name} product={p} brandColor={brand.color} index={i} />
                ))}
                <div className="rule-t border-ink/10" />
              </div>
            </div>
          )}
        </div>
      </section>

      <Contact />
    </Fragment>
  )
}
