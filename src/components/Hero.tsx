import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import MagneticLink from './MagneticLink'
import { brands, contact, stats } from '../data/content'

const slides = brands.filter((brand) => brand.poster).slice(0, 5)
const productsStat = stats.find((stat) => stat.label === 'Products')!

/** Product-first landing banner: the catalogue is now the first thing a visitor discovers. */
export default function Hero() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()
  const slide = slides[active]

  const goTo = (index: number) => setActive((index + slides.length) % slides.length)

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => goTo(active + 1), 6500)
    return () => window.clearInterval(timer)
  }, [active, reducedMotion])

  return (
    <section
      className="relative isolate min-h-[760px] touch-pan-y overflow-hidden bg-ink text-cream md:min-h-[820px]"
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null }}
      onTouchEnd={(event) => {
        const start = touchStartX.current
        const end = event.changedTouches[0]?.clientX
        touchStartX.current = null
        if (start === null || end === undefined || Math.abs(start - end) < 48) return
        goTo(start > end ? active + 1 : active - 1)
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.slug}
          initial={reducedMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, scale: 1.025 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={slide.poster} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,38,.90)_0%,rgba(20,16,38,.56)_42%,rgba(20,16,38,.12)_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,38,.9)_0%,transparent_42%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto flex min-h-[760px] max-w-[1600px] flex-col px-6 pb-8 pt-32 md:min-h-[820px] md:px-10 md:pb-10 md:pt-40">
        <motion.div
          key={`${slide.slug}-copy`}
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="label-meta mb-5 flex items-center gap-3 text-saffron">
            <span className="h-px w-8 bg-saffron" />
            Now featuring · {slide.country}
          </p>
          <h1 className="font-display text-balance text-display font-extrabold uppercase leading-[0.88] tracking-tight md:text-mega">
            {slide.name}
          </h1>
          <p className="font-editorial mt-5 max-w-xl text-lead italic leading-snug text-cream/90">{slide.tagline}</p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">{slide.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={`/brands/${slide.slug}`} className="group inline-flex items-center gap-2 bg-cream px-5 py-3.5 label-meta text-ink transition-colors hover:bg-saffron">
              Explore {slide.name}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 border border-cream/35 px-5 py-3.5 label-meta text-cream transition-colors hover:border-cream hover:bg-cream/10">
              View all products
            </Link>
          </div>
        </motion.div>

        <div className="mt-auto grid gap-6 pt-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex items-center gap-2" aria-label="Featured brands">
            {slides.map((brand, index) => (
              <button key={brand.slug} type="button" onClick={() => goTo(index)} aria-label={`Show ${brand.name}`} aria-current={index === active} className="group flex min-h-11 items-center gap-2">
                <span className={`h-1 w-7 transition-all duration-500 sm:w-11 ${index === active ? 'bg-saffron' : 'bg-cream/35 group-hover:bg-cream/70'}`} />
                <span className={`hidden label-meta transition-colors sm:inline ${index === active ? 'text-cream' : 'text-cream/45'}`}>{brand.name}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => goTo(active - 1)} className="grid h-11 w-11 place-items-center border border-cream/30 transition-colors hover:bg-cream hover:text-ink" aria-label="Previous banner"><ArrowLeft size={17} /></button>
            <button onClick={() => goTo(active + 1)} className="grid h-11 w-11 place-items-center border border-cream/30 transition-colors hover:bg-cream hover:text-ink" aria-label="Next banner"><ArrowRight size={17} /></button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/15 bg-ink/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p className="label-meta text-cream/65">{productsStat.value}{productsStat.suffix} products · Global brands, built for India</p>
          <MagneticLink className="w-fit" strength={6}>
            <a href={contact.whatsappCatalogue} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 label-meta text-saffron hover:text-cream"><MessageCircle size={15} /> Get the catalogue</a>
          </MagneticLink>
        </div>
      </div>
    </section>
  )
}
