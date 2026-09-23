import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import BrandMark from './BrandMark'
import { brands, type Brand } from '../data/content'

function StackCard({
  brand,
  index,
  total,
  progress,
}: {
  brand: Brand
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const step = 1 / (total + 0.6)
  const enterStart = Math.max(0, (index - 0.85) * step)
  const enterEnd = index * step

  // Y transform: glide up smoothly all the way from bottom into dock position,
  // then shift up slightly as layers stack on top.
  const y = useTransform(progress, (p) => {
    if (index === 0) {
      if (p <= step) return '0%'
      const layers = Math.min((p - step) / step, 4)
      return `${-layers * 14}px`
    }

    if (p < enterStart) return '105%'
    if (p <= enterEnd) {
      const enterFraction = (p - enterStart) / (enterEnd - enterStart)
      // Quad ease-out smoothing
      const eased = 1 - Math.pow(1 - enterFraction, 2)
      return `${(1 - eased) * 100}%`
    }

    // Once docked, gently push up as newer cards arrive
    const subsequentStart = (index + 0.15) * step
    if (p <= subsequentStart) return '0%'
    const layers = Math.min((p - subsequentStart) / step, 4)
    return `${-layers * 14}px`
  })

  // Scale: dock at 1.0, then scale down subtly to build layered deck depth
  const scale = useTransform(progress, (p) => {
    if (index === 0) {
      if (p <= step) return 1
      const layers = Math.min((p - step) / step, 4)
      return Math.max(0.86, 1 - layers * 0.035)
    }

    if (p < enterStart) return 0.96
    if (p <= enterEnd) {
      const enterFraction = (p - enterStart) / (enterEnd - enterStart)
      return 0.96 + enterFraction * 0.04
    }

    const subsequentStart = (index + 0.15) * step
    if (p <= subsequentStart) return 1
    const layers = Math.min((p - subsequentStart) / step, 4)
    return Math.max(0.86, 1 - layers * 0.035)
  })

  // Opacity: fade in swiftly at the start of entrance
  const opacity = useTransform(progress, (p) => {
    if (index === 0) return 1
    if (p < enterStart) return 0
    const fadeWindow = (enterEnd - enterStart) * 0.2
    if (p <= enterStart + fadeWindow) {
      return (p - enterStart) / fadeWindow
    }
    return 1
  })

  // Filter: subtle depth dimming on cards buried under the stack
  const filter = useTransform(progress, (p) => {
    const activeStart = index === 0 ? step : (index + 0.15) * step
    if (p <= activeStart) return 'brightness(1)'
    const layers = Math.min((p - activeStart) / step, 4)
    const b = Math.max(0.72, 1 - layers * 0.07)
    return `brightness(${b})`
  })

  // Highlight 3 featured products as badge pills
  const previewProducts = brand.products.slice(0, 3)

  return (
    <motion.div
      style={{
        zIndex: index,
        transformOrigin: 'top center',
        y,
        scale,
        opacity,
        filter,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
    >
      <div className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-ink/35 md:flex-row md:rounded-[2.5rem]">
        {/* Visual Poster Side (Left) */}
        <div className="relative h-[42%] w-full overflow-hidden bg-ink md:h-full md:w-[48%]">
          {brand.poster ? (
            <img
              src={brand.poster}
              alt={`${brand.name} poster showcase`}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center p-8"
              style={{ background: `linear-gradient(155deg, ${brand.color}, #1a1530)` }}
            >
              <BrandMark
                brand={brand}
                className="max-h-24 w-auto max-w-[80%] object-contain"
                textClassName="text-3xl text-white"
              />
            </div>
          )}

          {/* Atmospheric gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 40%), linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%)`,
            }}
          />

          {/* Top floating pill badge */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: brand.color }}
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
              {brand.country}
            </span>
          </div>
        </div>

        {/* Content Side (Right) */}
        <div
          className="relative flex flex-1 flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto"
          style={{
            background: `linear-gradient(155deg, ${brand.colorSoft} 0%, #ffffff 60%, ${brand.colorSoft}22 100%)`,
          }}
        >
          {/* Header row */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <span
                className="font-mono inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm"
                style={{ backgroundColor: brand.color }}
              >
                <Sparkles size={13} />
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold">
                {brand.products.length} Products
              </span>
            </div>

            <h3 className="font-display mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {brand.name}
            </h3>
            <p className="mt-2 text-base font-semibold sm:text-lg" style={{ color: brand.color }}>
              {brand.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
              {brand.overview}
            </p>

            {/* Popular products preview pills */}
            {previewProducts.length > 0 && (
              <div className="mt-5">
                <span className="font-mono block text-xs font-bold uppercase tracking-wider text-ink/40">
                  Featured Lineup
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {previewProducts.map((p) => (
                    <span
                      key={p.name}
                      className="rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-xs font-medium text-ink/80 shadow-xs backdrop-blur-xs"
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between gap-4">
            <Link
              to={`/brands/${brand.slug}`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: brand.color }}
            >
              Explore {brand.name}
              <ArrowRight size={18} />
            </Link>

            <span className="font-mono hidden sm:inline-block text-xs uppercase tracking-widest text-ink/40 font-medium">
              Product of {brand.country}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function BrandStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const total = brands.length

  // Pin container scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="brands" className="relative bg-cream-soft">
      {/* Intro Header */}
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-8 text-center md:px-8 md:pt-32 md:pb-12">
        <span className="font-semibold uppercase tracking-widest text-berry">Brand Portfolio</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl md:text-5xl">
          {total} international brands, stacked for discovery
        </h2>
        <p className="mt-4 text-base sm:text-lg text-ink/70">
          Scroll down — each brand rises from the deck and stacks into view.
        </p>
      </div>

      {/* Outer scroll track with ample height for every card to enter, dock, and be enjoyed */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${(total + 0.8) * 100}vh` }}
      >
        {/* Sticky Pinned Stage */}
        <div className="sticky top-20 sm:top-24 flex h-[calc(100vh-5.5rem)] items-center justify-center px-4 md:px-8 overflow-hidden">
          {/* Card Deck Stage */}
          <div className="relative flex h-[580px] w-full max-w-6xl items-center justify-center sm:h-[600px] lg:h-[620px]">
            {brands.map((brand, i) => (
              <StackCard
                key={brand.slug}
                brand={brand}
                index={i}
                total={total}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
