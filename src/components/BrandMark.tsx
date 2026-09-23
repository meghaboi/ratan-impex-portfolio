import type { Brand } from '../data/content'

type Props = {
  brand: Brand
  className?: string
  textClassName?: string
}

export default function BrandMark({ brand, className, textClassName }: Props) {
  if (brand.logo) {
    return <img src={brand.logo} alt={brand.name} className={className} />
  }
  return (
    <span
      className={`font-display font-bold ${textClassName ?? ''}`}
      style={{ color: brand.color }}
    >
      {brand.name}
    </span>
  )
}
