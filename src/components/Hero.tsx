import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// These are the finished Ratan Impex campaign creatives used on the established site. They are
// deliberately allowed to do the selling themselves: no generic headline is laid over the work.
const slides = [
  { image: '/images/hero/julies-campaign.jpg', name: "Julie's", to: '/brands/julies', position: 'center' },
  { image: '/images/hero/milami-campaign.jpg', name: 'Milami', to: '/brands/milami', position: 'center' },
  { image: '/images/hero/campaign-3.jpg', name: 'Captain Dolphin', to: '/brands/captain-dolphin', position: 'center' },
  { image: '/images/hero/campaign-4.jpg', name: 'Coco Royal', to: '/brands/coco-royal', position: 'center' },
]

/** A restrained campaign carousel, built around genuine product artwork rather than decorative copy. */
export default function Hero() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()
  const slide = slides[active]

  const goTo = (index: number) => setActive((index + slides.length) % slides.length)

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => goTo(active + 1), 5000)
    return () => window.clearInterval(timer)
  }, [active, reducedMotion])

  return (
    <section
      className="relative isolate h-[64dvh] min-h-[390px] touch-pan-y overflow-hidden bg-cream md:h-auto md:min-h-0 md:aspect-[2.4/1]"
      aria-label="Featured product campaigns"
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null }}
      onTouchEnd={(event) => {
        const start = touchStartX.current
        const end = event.changedTouches[0]?.clientX
        touchStartX.current = null
        if (start === null || end === undefined || Math.abs(start - end) < 48) return
        goTo(start > end ? active + 1 : active - 1)
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={`${slide.name} product campaign`}
          initial={reducedMotion ? false : { opacity: 0.2, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, scale: 1.005 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover md:object-fill"
          style={{ objectPosition: slide.position }}
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4 sm:px-6 sm:pb-6 md:px-10 md:pb-8">
        <Link
          to={slide.to}
          className="bg-ink px-4 py-3 label-meta text-cream transition-colors hover:bg-cream hover:text-ink"
        >
          Explore {slide.name}
        </Link>

        <div className="flex items-center gap-2" aria-label="Campaign controls">
          <button type="button" onClick={() => goTo(active - 1)} className="grid h-10 w-10 place-items-center bg-cream/90 text-ink transition-transform hover:scale-105" aria-label="Previous campaign"><ArrowLeft size={17} /></button>
          {slides.map((item, index) => (
            <button key={item.name} type="button" onClick={() => goTo(index)} aria-label={`Show ${item.name} campaign`} aria-current={index === active} className={`h-10 w-3 transition-all ${index === active ? 'bg-ink' : 'bg-cream/85 hover:bg-ink/60'}`} />
          ))}
          <button type="button" onClick={() => goTo(active + 1)} className="grid h-10 w-10 place-items-center bg-cream/90 text-ink transition-transform hover:scale-105" aria-label="Next campaign"><ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  )
}
