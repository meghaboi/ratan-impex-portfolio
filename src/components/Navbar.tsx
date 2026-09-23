import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { contact } from '../data/content'

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Brands', hash: '#brands' },
  { label: 'Products', hash: '#products' },
  { label: 'Process', hash: '#process' },
  { label: 'Contact', hash: '#contact' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const goTo = (hash: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tone = scrolled || open ? 'text-ink' : 'text-cream'

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`absolute inset-0 border-b transition-all duration-500 ${
          scrolled ? 'border-ink/10 bg-cream/92 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      />

      <div
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? 'py-3' : 'py-5 md:py-7'
        }`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${tone}`}
        >
          RATAN IMPEX
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => goTo(l.hash)}
              className={`group relative label-meta pb-1 ${tone}`}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <a
          href={contact.whatsappCall}
          target="_blank"
          rel="noreferrer"
          className={`hidden items-center gap-2 border px-5 py-2.5 label-meta transition-colors md:flex ${
            scrolled ? 'border-ink/20 text-ink hover:bg-ink hover:text-cream' : 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
          }`}
        >
          Get in Touch
          <ArrowUpRight size={14} />
        </a>

        <button
          className={`p-2 transition-colors md:hidden ${tone}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 flex h-[100dvh] flex-col justify-between bg-ink px-6 pb-10 pt-24 text-cream md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.button
                  key={l.hash}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: EASE }}
                  onClick={() => goTo(l.hash)}
                  className="font-editorial rule-b border-cream/15 py-4 text-left text-4xl italic"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <a
              href={contact.whatsappCall}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-cream/25 px-5 py-4 label-meta"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
