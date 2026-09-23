import { motion, useScroll, useSpring } from 'framer-motion'

/** Fixed hairline at the top of the viewport tracking whole-document scroll progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-saffron"
    />
  )
}
