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

    gsap.set(container, { width: container.scrollWidth })

    const horizontalScroll = gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth) + "px",
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
    <div className="w-full overflow-hidden" ref={slideWrapRef}>
      <div className="flex h-[100vh] gap-20 items-center" ref={containerRef}>
        <SkillExampleWeb />
        <SkillExampleMobile />
      </div>
    </div>
  )
}
