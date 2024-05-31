import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Projects, Technologies } from "../molecules"
import projects from '../../mocks/projects'

export const ProjectsTechnologies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.screen.width < 900) return

    const container = containerRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top top",
        end: () => "+=" + container?.scrollWidth,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    tl
      .to("#technologie-item-1", {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-1", { y: 0 }, '<')
      .to("#technologie-item-description-1", { y: 0 }, '<')
      .to("#technologie-item-2", {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-2", { y: 0 }, '<')
      .to("#technologie-item-description-2", { y: 0 }, '<')
      .to("#technologie-item-3", {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-3", { y: 0 }, '<')
      .to("#technologie-item-description-3", { y: 0 }, '<')
      .to("#technologie-item-4", {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-4", { y: 0 }, '<')
      .to("#technologie-item-description-4", { y: 0 }, '<')
      .to("#technologie", {
        marginTop: '-20px',
      })
      .to("#projects", {
        y: 0,
        opacity: 1
      }, '<')
      .to(`#project-item-0`, { opacity: 1 }, '<')
      .to(`#project-item-0`, { opacity: 0, display: 'none' })
      .to(`#project-item-1`, { opacity: 1 }, '<')
      .to(`#project-item-1`, { opacity: 0, display: 'none' })
      .to(`#project-item-2`, { opacity: 1 }, '<')
      .to(`#project-item-2`, { opacity: 0, display: 'none' })
      .to(`#project-item-3`, { opacity: 1 }, '<')
      .to(`#project-item-3`, { opacity: 0, display: 'none' })
      .to(`#project-item-4`, { opacity: 1 }, '<')
      .to(`#project-item-4`, { opacity: 0 })
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden max-md:mt-20 flex flex-col gap-5 justify-center items-center" ref={containerRef}>
      <Technologies />
      <Projects projects={projects} />
    </div>
  )
}
