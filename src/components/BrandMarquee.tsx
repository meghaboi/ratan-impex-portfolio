import TextLoop from './TextLoop'
import { brands } from '../data/content'

export default function BrandMarquee() {
  const text = brands.map((b) => b.name).join(' ')

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-cream">
      <TextLoop
        text={text}
        shape="line"
        speed={55}
        separator="/"
        fontSize={22}
        fontWeight={600}
        letterSpacing={1}
        color="#1a153055"
        ribbon={false}
        pauseOnHover
        className="font-mono"
        style={{ height: 56 }}
      />
    </div>
  )
}
