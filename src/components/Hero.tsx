import { lazy, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import DriftWall from './DriftWall'
import { allProductPhotos, company, brands, stats, contact } from '../data/content'

// vgpu (WebGPU) pulls in a sizeable bundle for a purely decorative background —
// split it into its own chunk so it never blocks first paint.
const ShapeWaves = lazy(() => import('./ShapeWaves'))

const productsStat = stats.find((s) => s.label === 'Products')!

export default function Hero() {
  const [gpuFailed, setGpuFailed] = useState(false)

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink py-28 lg:py-0">
      {/* Ambient shader background — gracefully no-ops if WebGPU isn't available */}
      {!gpuFailed && (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <ShapeWaves
              color="#4a3f6b"
              hoverColor="#f4b333"
              backgroundColor="#1a1530"
              shapes="mixed"
              cellSize={12}
              speed={0.7}
              glow={0.4}
              fade={0.35}
              splashStrength={0.5}
              onError={() => setGpuFailed(true)}
            />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 mx-auto grid h-full max-w-[1600px] items-center gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:px-10 lg:py-20">
        {/* Text column */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron backdrop-blur-sm sm:text-sm"
          >
            {company.legalName} · Est. {company.founded}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-cream text-balance sm:text-6xl lg:text-7xl"
          >
            {company.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-base text-cream/65 sm:text-lg lg:mx-0"
          >
            {company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
          >
            {[
              [`${brands.length}`, 'Brands'],
              [`${productsStat.value}${productsStat.suffix}`, 'Products'],
              ['Nationwide', 'Delivery'],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-saffron sm:text-3xl">{value}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-cream/50">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#brands"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 font-semibold text-ink shadow-lg shadow-saffron/20 transition-transform hover:scale-105"
            >
              Explore Our Brands
              <ArrowRight size={18} />
            </a>
            <a
              href={contact.whatsappCatalogue}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/5 px-7 py-3.5 font-semibold text-cream backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Get the Catalogue
            </a>
          </motion.div>
        </div>

        {/* Drift wall panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative aspect-[16/12] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40 lg:aspect-auto lg:h-[86vh] lg:min-h-[620px]"
        >
          <DriftWall
            items={allProductPhotos}
            columns={7}
            tileWidth={180}
            tileHeight={124}
            gap={16}
            speed={26}
            tilt={16}
            turn={-14}
            depth={120}
            dim={0.55}
            fade={0.25}
            lift={50}
            overlayColor="#1a1530"
          />
        </motion.div>
      </div>
    </section>
  )
}
