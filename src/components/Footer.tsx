import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { contact, company } from '../data/content'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Brands', to: '/brands' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream/70">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-8 px-6 py-16 text-center md:px-10">
        <Link to="/">
          <img src="/images/misc/logo.png" alt="Ratan Impex" className="h-12 w-auto brightness-0 invert" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="label-meta text-cream/70 transition-colors hover:text-saffron">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-saffron hover:text-saffron"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={contact.whatsappCall}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-saffron hover:text-saffron"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        <p className="text-sm text-cream/40">
          © {new Date().getFullYear()} {company.legalName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
