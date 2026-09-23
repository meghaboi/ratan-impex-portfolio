import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import ImageReveal from './ImageReveal'
import BrandMark from './BrandMark'
import { brands, type Brand } from '../data/content'

function BrandRow({ brand, index }: { brand: Brand; index: number }) {
  const image = brand.poster ?? brand.logo

  return (
    <ScrollReveal delay={Math.min(index * 0.03, 0.2)}>
      <Link
        to={`/brands/${brand.slug}`}
        className="group rule-t grid grid-cols-[44px_1fr] items-center gap-4 border-ink/10 py-7 md:grid-cols-[70px_1fr_200px_190px] md:gap-8 md:py-9"
        style={{ '--brand': brand.color } as CSSProperties}
      >
        <span className="font-mono text-sm text-ink/35">{String(index + 1).padStart(2, '0')}</span>

        <h3 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-4xl lg:text-6xl">
          {brand.name}
        </h3>

        <div className="col-span-2 mt-3 flex flex-col gap-1 md:col-span-1 md:mt-0">
          <span className="label-meta text-ink/50">{brand.country}</span>
          <span className="font-editorial italic text-ink/60">{brand.tagline}</span>
        </div>

        <div className="col-span-2 md:col-span-1">
          {image ? (
            <ImageReveal className="aspect-[4/3] w-full bg-ink/5 md:w-44 lg:w-48" curtainColor="#f7efd9">
              <img
                src={image}
                alt={`${brand.name} — ${brand.country}`}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </ImageReveal>
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-ink/5 md:w-44 lg:w-48">
              <BrandMark brand={brand} className="max-h-8 w-auto max-w-[70%] object-contain" textClassName="text-sm" />
            </div>
          )}
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function BrandIndex() {
  return (
    <section id="brands" className="relative bg-cream-soft py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <ScrollReveal>
          <div className="rule-b flex flex-wrap items-end justify-between gap-6 border-ink/10 pb-10">
            <div>
              <span className="label-meta text-berry">02 — Brand Portfolio</span>
              <h2 className="font-display mt-3 text-heading font-extrabold text-ink">
                {brands.length} brands, one table
              </h2>
            </div>
            <p className="max-w-xs text-body-fluid text-ink/60">
              Every brand we import, one at a time — click through for the full range.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {brands.map((brand, i) => (
            <BrandRow key={brand.slug} brand={brand} index={i} />
          ))}
          <div className="rule-t border-ink/10" />
        </div>
      </div>
    </section>
  )
}
