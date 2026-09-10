// src/utils/useHeroAnimation.ts

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useHeroAnimation() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const circleWrapperRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  const tag1WrapperRef = useRef<HTMLDivElement>(null)
  const tag1Ref = useRef<HTMLDivElement>(null)
  const tag2WrapperRef = useRef<HTMLDivElement>(null)
  const tag2Ref = useRef<HTMLDivElement>(null)
  const tag3WrapperRef = useRef<HTMLDivElement>(null)
  const tag3Ref = useRef<HTMLDivElement>(null)
  const tag4WrapperRef = useRef<HTMLDivElement>(null)
  const tag4Ref = useRef<HTMLDivElement>(null)

  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Floating animation — independent of scroll, runs forever
    const floatTargets = [
      { ref: circleRef, distance: -15, duration: 2.5, delay: 0 },
      { ref: tag1Ref, distance: -10, duration: 2, delay: 0 },
      { ref: tag2Ref, distance: -10, duration: 2, delay: 0.3 },
      { ref: tag3Ref, distance: -10, duration: 2, delay: 0.6 },
      { ref: tag4Ref, distance: -10, duration: 2, delay: 0.9 },
    ]

    const floatTweens = floatTargets.map(({ ref, distance, duration, delay }) =>
      gsap.to(ref.current, {
        y: distance,
        duration,
        delay,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    )

    // Parallax on scroll — separate tween per target, each with its own trigger
    const parallaxTweens: gsap.core.Tween[] = []

    const parallaxTargets = [
      { ref: circleWrapperRef, distance: -40 },
      { ref: tag1WrapperRef, distance: -60 },
      { ref: tag2WrapperRef, distance: -90 },
      { ref: tag3WrapperRef, distance: -50 },
      { ref: tag4WrapperRef, distance: -80 },
      { ref: textRef, distance: -150 },
      { ref: gridRef, distance: -60 },
    ]

    parallaxTargets.forEach(({ ref, distance }) => {
      if (!ref.current) return
      const tween = gsap.to(ref.current, {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      parallaxTweens.push(tween)
    })

    return () => {
      floatTweens.forEach((tween) => tween.kill())
      parallaxTweens.forEach((tween) => tween.kill())
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return {
    heroRef,
    textRef,
    circleWrapperRef,
    circleRef,
    tag1WrapperRef,
    tag1Ref,
    tag2WrapperRef,
    tag2Ref,
    tag3WrapperRef,
    tag3Ref,
    tag4WrapperRef,
    tag4Ref,
    gridRef,
  }
}