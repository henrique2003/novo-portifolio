import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { SkillExampleMobile, SkillExampleWeb } from "../molecules"

export const SkillExamples: React.FC = () => {
  const slideWrapRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!slideWrapRef.current || !containerRef.current) return

    const slideWrap = slideWrapRef.current
    const container = containerRef.current

    if (window.screen.width < 900) return

    gsap.set(container, { width: container.scrollWidth })

    const horizontalScroll = gsap.to(container, {
      x: () => -((container.scrollWidth - window.innerWidth)) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: slideWrap,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => "+=" + container.scrollWidth,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      horizontalScroll.kill()
    }
  }, [])

  return (
    <div className="w-full overflow-hidden max-lg:overflow-visible" ref={slideWrapRef}>
      <div className="flex h-[100vh] gap-20 items-center max-lg:flex-col max-lg:h-auto max-lg:mt-20" ref={containerRef}>
        <SkillExampleWeb />
        <SkillExampleMobile />
      </div>
    </div>
  )
}
