import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowLeft, MessageCircle, Package } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Contact from '../components/Contact'
import BrandMark from '../components/BrandMark'
import FlipCard from '../components/FlipCard'
import { brands, contact } from '../data/content'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function BrandPage() {
  const { slug } = useParams()
  const brand = brands.find((b) => b.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!brand) return <Navigate to="/" replace />

  return (
    <>
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden pt-28"
        style={{ background: `linear-gradient(160deg, ${brand.colorSoft}, #fdf8ee 65%)` }}
      >
        {brand.poster && (
          <div className="absolute inset-0">
            <img src={brand.poster} alt="" className="h-full w-full object-cover object-bottom opacity-[0.07]" />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, ${brand.colorSoft} 15%, transparent 45%, ${brand.colorSoft} 85%)` }}
            />
          </div>
        )}

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-8">
          <Link
            to="/#brands"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink"
          >
            <ArrowLeft size={16} /> Back to all brands
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrandMark
              brand={brand}
              className="h-16 w-auto max-w-[240px] object-contain sm:h-20"
              textClassName="text-3xl sm:text-4xl"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-6 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl"
          >
            {brand.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-lg text-ink/70"
          >
            {brand.overview}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            href={contact.whatsappCatalogue}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: brand.color }}
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </motion.a>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <Package size={22} style={{ color: brand.color }} />
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Full {brand.name} Range
              </h2>
            </div>
            <p className="mt-2 text-ink/60">{brand.products.length} products imported and distributed nationwide.</p>
          </ScrollReveal>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {brand.products.map((p) => (
              <motion.div key={p.name} variants={item} className="aspect-[3/4] w-full">
                <FlipCard
                  width="100%"
                  height="100%"
                  radius={24}
                  draggable={false}
                  hoverScale={1.02}
                  shadowOpacity={0.2}
                  ariaLabel={`${p.name} — flip for details`}
                  front={
                    p.image ? (
                      <div className="relative h-full w-full bg-[#f4efe2]">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" draggable={false} />
                        {p.size && (
                          <span
                            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow"
                            style={{ backgroundColor: brand.color }}
                          >
                            {p.size}
                          </span>
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <h3 className="font-display text-sm font-semibold leading-snug text-white sm:text-base">
                            {p.name}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center"
                        style={{ background: `linear-gradient(160deg, ${brand.colorSoft}, white)` }}
                      >
                        <BrandMark
                          brand={brand}
                          className="h-10 w-auto max-w-[60%] object-contain opacity-80"
                          textClassName="text-lg opacity-80"
                        />
                        <h3 className="font-display text-base font-semibold leading-snug text-ink">{p.name}</h3>
                        {p.size && (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                            style={{ backgroundColor: brand.color }}
                          >
                            {p.size}
                          </span>
                        )}
                      </div>
                    )
                  }
                  back={
                    <div
                      className="flex h-full w-full flex-col justify-center p-6 text-center"
                      style={{ background: `linear-gradient(160deg, ${brand.color}, #1a1530)` }}
                    >
                      <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                      {p.size && <p className="font-mono mt-2 text-xs uppercase tracking-widest text-white/60">{p.size}</p>}
                      <p className="mt-4 text-sm text-white/80">{p.description}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
