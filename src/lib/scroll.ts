import { useEffect } from 'react'
import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Staggers the children matched by `selector` inside `containerRef` as they enter the viewport,
 * using ScrollTrigger.batch so fast-scrolling past a dozen cards doesn't fire a dozen independent
 * triggers in the same frame. No-ops under prefers-reduced-motion (cards just render in place).
 */
export function useStaggerReveal(containerRef: RefObject<HTMLElement | null>, selector: string, deps: unknown[] = []) {
  useEffect(() => {
    const container = containerRef.current
    if (!container || prefersReducedMotion()) return

    const targets = container.querySelectorAll<HTMLElement>(selector)
    gsap.set(targets, { opacity: 0, y: 32 })

    const batch = ScrollTrigger.batch(targets, {
      start: 'top 88%',
      once: true,
      onEnter: (els) =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
        }),
    })

    return () => {
      batch.forEach((b) => b.kill())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/**
 * Scrub-based vertical parallax on `ref`, gated to viewports at/above `minWidth` (default: tablet).
 * Mobile gets no parallax at all — cheaper and avoids jank on low-power devices/large image paints.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, amount = 60, minWidth = 768) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const mm = gsap.matchMedia()
    mm.add(`(min-width: ${minWidth}px)`, () => {
      const tween = gsap.fromTo(
        el,
        { y: -amount },
        {
          y: amount,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    })

    return () => mm.revert()
  }, [ref, amount, minWidth])
}

/**
 * Slides `ref` in from an (x, y) offset to its resting position, scrubbed directly to scroll
 * position (not a one-shot reveal) so the element keeps tracking the scrollbar the way a
 * Revolution-Slider-style layer/parallax animation does. Gated to `minWidth`+ viewports — on
 * mobile there's no room for elements to fly in from off-canvas, so it no-ops there.
 */
export function useSlideIn(
  ref: RefObject<HTMLElement | null>,
  { x = 0, y = 0, start = 'top 95%', end = 'top 55%', minWidth = 1024 }: { x?: number; y?: number; start?: string; end?: string; minWidth?: number } = {},
) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const mm = gsap.matchMedia()
    mm.add(`(min-width: ${minWidth}px)`, () => {
      const tween = gsap.fromTo(
        el,
        { x, y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        },
      )
      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    })

    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, x, y, start, end, minWidth])
}

/** Kills every live ScrollTrigger — call before a new route mounts its own triggers. */
export function resetScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill())
}
