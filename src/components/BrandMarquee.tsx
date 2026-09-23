import TextLoop from './TextLoop'
import { brands } from '../data/content'

export default function BrandMarquee() {
  const text = brands.map((b) => b.name).join(' ')

  return (
    <div className="relative overflow-hidden bg-saffron">
      <TextLoop
        text={text}
        shape="line"
        speed={70}
        separator="✦"
        fontSize={30}
        fontWeight={800}
        letterSpacing={0.5}
        color="#1a1530"
        ribbon={false}
        pauseOnHover
        className="font-display"
        style={{ height: 88 }}
      />
    </div>
  )
}
