import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import DriftWall from './DriftWall'
import RevealWords from './RevealWords'
import { allProductPhotos, company, brands, stats, contact } from '../data/content'

const productsStat = stats.find((s) => s.label === 'Products')!

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[720px] overflow-hidden bg-ink text-cream">
      {/* Product imagery bleeds off the right edge — a tilted column, not a boxed panel */}
      <div className="absolute inset-y-0 right-0 w-[46%] opacity-70 sm:w-[38%] lg:w-[32%]">
        <DriftWall
          items={allProductPhotos}
          columns={3}
          tileWidth={220}
          tileHeight={150}
          gap={14}
          speed={16}
          tilt={14}
          turn={-10}
          depth={90}
          dim={0.5}
          fade={0.4}
          lift={40}
          overlayColor="#1a1530"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ink to-transparent" />
      </div>

      {/* Metadata line */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute left-6 top-24 label-meta text-cream/60 sm:left-10 md:top-28"
      >
        India — Global · Est. {company.founded}
      </motion.div>

      {/* Oversized wordmark, asymmetric */}
      <div className="absolute left-6 top-36 sm:left-10 md:top-40">
        <h1 className="font-display text-mega font-extrabold uppercase leading-[0.86] tracking-tight">
          <RevealWords text="Ratan" whileMount delay={0.25} as="div" />
          <RevealWords text="Impex" whileMount delay={0.4} as="div" className="ml-[0.5em] text-saffron" />
        </h1>
      </div>

      {/* Statement, offset lower-right */}
      <div className="absolute bottom-40 left-6 max-w-md sm:left-10 md:bottom-44 md:left-[38%] md:max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-editorial text-lead italic leading-snug text-cream/90"
        >
          {company.positioning}
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 sm:flex"
      >
        <span className="label-meta">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>

      {/* Bottom strip */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 border-t border-cream/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="label-meta flex flex-wrap gap-x-6 gap-y-1 text-cream/60">
          <span>{brands.length} Brands</span>
          <span>{productsStat.value}{productsStat.suffix} Products</span>
          <span>Nationwide Delivery</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#brands" className="group inline-flex items-center gap-1.5 label-meta text-cream">
            Explore Our Brands
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={contact.whatsappCatalogue}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 border border-cream/25 px-5 py-2.5 label-meta transition-colors hover:bg-cream hover:text-ink"
          >
            <MessageCircle size={14} />
            Get the Catalogue
          </a>
        </div>
      </div>
    </section>
  )
}
