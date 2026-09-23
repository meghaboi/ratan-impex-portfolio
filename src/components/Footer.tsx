import { Link } from 'react-router-dom'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import BrandMark from './BrandMark'
import { brands, contact, company } from '../data/content'

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
    <footer className="relative overflow-hidden bg-[#120e22] text-cream/70">
      {/* decorative backdrop for the dark section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-berry/15 blur-3xl" />
        <div className="absolute right-1/5 top-1/2 h-80 w-80 rounded-full bg-saffron/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-leaf/10 blur-3xl" />
      </div>

      {/* brand logo strip */}
      <div className="relative border-b border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-cream/40">
            Brands we bring to India
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                className="flex h-16 items-center rounded-2xl bg-white px-5 shadow-lg transition-transform hover:-translate-y-1 hover:scale-105"
              >
                <BrandMark
                  brand={b}
                  className="h-9 w-auto max-w-[110px] object-contain"
                  textClassName="text-base"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src="/images/misc/logo.png" alt={company.name} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm">{company.description}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-saffron hover:text-ink"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={contact.whatsappCall}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-saffron hover:text-ink"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-cream">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-saffron">About Us</a></li>
              <li><a href="#brands" className="hover:text-saffron">Brands</a></li>
              <li><a href="#products" className="hover:text-saffron">Products</a></li>
              <li><a href="#faq" className="hover:text-saffron">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-cream">Brands</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link to={`/brands/${b.slug}`} className="inline-flex items-center gap-1 hover:text-saffron">
                    {b.name}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-cream">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li className="max-w-xs">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} {company.legalName}, All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
