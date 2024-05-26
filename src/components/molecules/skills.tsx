import gsap from "gsap"
import { TriangleLeft, TriangleRight } from "../atoms/triangles"
import { useEffect, useRef } from 'react'

export const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)
  const triangleLeftRef = useRef<HTMLDivElement>(null)
  const triangleRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduction-trace",
        start: "top top",
        end: "=+200px",
        scrub: true
      }
    })

    tl
      .to(titleRef.current, {
        duration: 2,
        opacity: 1,
        ease: "power1"
      })
      .to(subTitleRef.current, {
        duration: 2,
        opacity: 1,
        ease: "power1"
      }, '<')
      .to(triangleLeftRef.current, {
        duration: 2,
        opacity: 1,
        left: 0,
        rotate: 360
      })
      .to(triangleRightRef.current, {
        duration: 2,
        opacity: 1,
        right: 0,
        rotate: -360
      }, '<')
  }, [])

  return (
    <div className="w-full mt-28 flex flex-col justify-center items-center gap-5 min-h-[350px] relative">
      <h2 className="text-5xl font-semibold uppercase text-center text-white tracking-wider opacity-0" ref={titleRef}>Habilidades</h2>
      <p className="font-medium text-center mt-4 text-grayrer text-md opacity-0" ref={subTitleRef}>Veja como posso te ajudar</p>
      <TriangleRight className="border-l-orange-400 absolute bottom-[20px] opacity-0 left-[-100px]" ref={triangleLeftRef} />
      <TriangleLeft className="border-r-ocean-blue absolute bottom-[20px] opacity-0 right-[-100px]" ref={triangleRightRef} />
    </div>
  )
}
