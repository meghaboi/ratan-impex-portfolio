import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Globe } from './Globe'
import RevealWords from './RevealWords'
import MagneticLink from './MagneticLink'
import { company, stats, contact } from '../data/content'
import { globeMarkers, globeArcs } from '../data/geo'

const productsStat = stats.find((s) => s.label === 'Products')!
const brandsStat = stats.find((s) => s.label === 'Brands')!

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15])
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={sectionRef} className="relative h-[100dvh] min-h-[720px] overflow-hidden bg-ink text-cream">
      {/* Globe — India at the hub, arcs tracing each source country in. A sphere reads as
          broken if it's clipped, so unlike the wall this used to be, it stays fully visible
          rather than bleeding off the edge. */}
      <motion.div
        style={{ scale: globeScale }}
        className="absolute right-[2%] top-1/2 w-[74vw] max-w-[560px] -translate-y-1/2 sm:w-[54vw] lg:right-[4%] lg:w-[40vw] xl:w-[34vw]"
      >
        <Globe
          markers={globeMarkers}
          arcs={globeArcs}
          dark={1}
          diffuse={1.3}
          mapBrightness={4}
          mapSamples={12000}
          baseColor={[0.16, 0.13, 0.26]}
          markerColor={[0.957, 0.702, 0.2]}
          arcColor={[0.878, 0.557, 0.122]}
          glowColor={[0.32, 0.26, 0.48]}
          markerSize={0.05}
          markerElevation={0.02}
          arcWidth={1.2}
          arcHeight={0.32}
          speed={0.0035}
          theta={0.3}
        />
      </motion.div>

      {/* Text stays inside the centered, capped container every other section uses — this is
          what keeps IT anchored/gutter-respecting regardless of how wide the gallery bleeds. */}
      <div className="relative mx-auto h-full max-w-[1600px] px-6 md:px-10">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          {/* Metadata line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute left-6 top-24 label-meta text-cream/60 md:left-10 md:top-28"
          >
            India — Global · Est. {company.founded}
          </motion.div>

          {/* Oversized wordmark, asymmetric */}
          <div className="absolute left-6 top-36 md:left-10 md:top-40">
            <h1 className="font-display text-mega font-extrabold uppercase leading-[0.86] tracking-tight">
              <RevealWords text="Ratan" whileMount delay={0.25} as="div" />
              <RevealWords text="Impex" whileMount delay={0.4} as="div" className="ml-[0.5em] text-saffron" />
            </h1>
          </div>

          {/* Statement, offset lower-right */}
          <div className="absolute bottom-60 left-6 max-w-md sm:bottom-40 md:bottom-44 md:left-[38%] md:max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-editorial text-lead italic leading-snug text-cream/90"
            >
              {company.tagline}
            </motion.p>
          </div>
        </motion.div>
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

      {/* Bottom strip — full-bleed toolbar, deliberately outside the capped container */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 border-t border-cream/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="label-meta flex flex-wrap gap-x-6 gap-y-1 text-cream/60">
          <span>{brandsStat.value}{brandsStat.suffix} Brands</span>
          <span>{productsStat.value}{productsStat.suffix} Products</span>
          <span>Nationwide Delivery</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
          <MagneticLink className="block w-full sm:inline-block sm:w-auto">
            <Link
              to="/brands"
              className="group flex items-center justify-center gap-1.5 border border-cream/25 px-5 py-3 label-meta text-cream transition-colors hover:bg-cream hover:text-ink sm:justify-start sm:border-0 sm:px-0 sm:py-0 sm:hover:bg-transparent sm:hover:text-cream"
            >
              Explore Our Brands
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticLink>
          <MagneticLink className="block w-full sm:inline-block sm:w-auto">
            <a
              href={contact.whatsappCatalogue}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-1.5 border border-cream/25 px-5 py-3 label-meta transition-colors hover:bg-cream hover:text-ink sm:justify-start sm:py-2.5"
            >
              <MessageCircle size={14} />
              Get the Catalogue
            </a>
          </MagneticLink>
        </div>
      </div>
    </section>
  )
}
