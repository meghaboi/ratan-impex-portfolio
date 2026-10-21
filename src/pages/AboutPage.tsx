import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ImageReveal from '../components/ImageReveal'
import Contact from '../components/Contact'
import { useParallax } from '../lib/scroll'
import { company, mission, vision, values, capabilities } from '../data/content'
import { Globe } from '../components/Globe'
import { globeArcs, globeMarkers } from '../data/geo'

const pillars = [
  { numeral: 'I', title: 'Our Mission', text: mission },
  { numeral: 'II', title: 'Our Vision', text: vision },
  { numeral: 'III', title: 'Our Values', text: values },
]

export default function AboutPage() {
  const imgRef = useRef<HTMLImageElement>(null)
  useParallax(imgRef, 32)

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
            Est. {company.founded} · {company.headquarters}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            {company.positioning}
          </motion.p>
        </div>
      </section>

      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-end">
            <ScrollReveal>
              <h2 className="font-editorial text-balance text-heading italic leading-[1.03] text-ink">
                {company.positioning}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-fluid text-ink/70">{company.intro}</p>
              <p className="mt-4 text-body-fluid text-ink/70">{company.description}</p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <ScrollReveal className="order-2 md:order-1">
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <div className="absolute inset-0 rounded-full bg-saffron/15 blur-3xl" />
                <Globe markers={globeMarkers} arcs={globeArcs} dark={0} diffuse={1.3} mapBrightness={3} mapSamples={9000} baseColor={[0.97, 0.87, 0.61]} markerColor={[0.76, 0.23, 0.29]} arcColor={[0.88, 0.56, 0.12]} glowColor={[0.98, 0.94, 0.83]} markerSize={0.045} markerElevation={0.02} arcWidth={1.1} arcHeight={0.3} speed={0.0025} theta={0.25} />
              </div>
              <p className="label-meta mt-4 text-center text-ink/50">Our global sourcing network</p>
            </ScrollReveal>
            <ImageReveal className="order-1 aspect-[16/10] w-full md:order-2" from="left">
              <img
                ref={imgRef}
                src="/images/gallery/about-showcase.jpg"
                alt="Ratan Impex international brand curation"
                className="h-full w-full scale-125 object-cover"
              />
            </ImageReveal>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-3 md:mt-28 md:gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="card-shadow h-full rounded-2xl border border-ink/5 bg-cream-soft p-7 md:p-8">
                  <span className="font-editorial text-3xl italic text-saffron-dark">{p.numeral}</span>
                  <h3 className="label-meta mt-4 text-ink">{p.title}</h3>
                  <p className="text-body-fluid mt-3 text-ink/70">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-16 grid gap-8 rounded-2xl border border-ink/5 bg-cream-soft p-8 sm:grid-cols-2 md:p-10">
              <div>
                <span className="label-meta text-ink/70">Core Capabilities</span>
                <p className="text-body-fluid mt-3 text-ink/60">{capabilities.join(' / ')}</p>
              </div>
              <div>
                <span className="label-meta text-ink/70">Offices</span>
                <p className="text-body-fluid mt-3 text-ink/60">{company.offices.join(' / ')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Contact variant="compact" />
    </>
  )
}
