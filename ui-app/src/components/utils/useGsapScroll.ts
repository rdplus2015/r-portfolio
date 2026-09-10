// src/utils/useGsapScroll.ts
// Sets up smooth scrolling with Lenis and syncs it with GSAP's
// ScrollTrigger, so scroll-based animations stay in sync with the
// smoothed scroll position. Mounted once, in App.tsx.

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // higher = smoother/slower, more pronounced glide
      easing: (t) => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    lenis.on("scroll", ScrollTrigger.update)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}