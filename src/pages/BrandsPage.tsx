import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import BrandIndex from '../components/BrandIndex'
import Contact from '../components/Contact'
import { stats, countries } from '../data/content'

const brandsStat = stats.find((s) => s.label === 'Brands')!

export default function BrandsPage() {
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
            {brandsStat.value}{brandsStat.suffix} Brands · {countries.length} Countries
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-4 text-display font-extrabold uppercase leading-[0.92] tracking-tight"
          >
            Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-editorial mt-5 max-w-xl text-lead italic text-cream/85"
          >
            Every brand we import and distribute across India, one at a time.
          </motion.p>
        </div>
      </section>

      <BrandIndex />
      <Contact />
    </>
  )
}
