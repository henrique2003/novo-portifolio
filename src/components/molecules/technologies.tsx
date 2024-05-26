import { useEffect, useRef } from "react"
import { TechnologieItem } from "../atoms"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"
import gsap from "gsap"

export const Technologies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const technologieItem1Ref = useRef<HTMLDivElement>(null)
  const technologieItem2Ref = useRef<HTMLDivElement>(null)
  const technologieItem3Ref = useRef<HTMLDivElement>(null)
  const technologieItem4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
      .to(technologieItem1Ref.current, {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-1", { y: 0 }, '<')
      .to("#technologie-item-description-1", { y: 0 }, '<')
      .to(technologieItem2Ref.current, {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-2", { y: 0 }, '<')
      .to("#technologie-item-description-2", { y: 0 }, '<')
      .to(technologieItem3Ref.current, {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-3", { y: 0 }, '<')
      .to("#technologie-item-description-3", { y: 0 }, '<')
      .to(technologieItem4Ref.current, {
        background: "#424141",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      })
      .to("#technologie-item-title-4", { y: 0 }, '<')
      .to("#technologie-item-description-4", { y: 0 }, '<')
  }, [])

  return (
    <div className="w-full flex justify-center items-center h-screen overflow-hidden" ref={containerRef}>
      <div className="bg-[#171717] w-full rounded-lg py-14 px-8 flex justify-center items-center flex-col">
        <h3 className="uppercase text-white font-semibold text-5xl text-center">Tecnologioas que Utilizo</h3>
        <p className="mt-5 text-white opacity-70 text-center text-xl font-light">Conheca as linguagens mais utilizadas na atualidade</p>
        <div className="mt-10 grid grid-cols-4 gap-5 w-full">
          <TechnologieItem
            icon={<FaReact size={38} color="#336AE9" />}
            borderColor="border-[#336AE9]"
            text="React Native"
            description="App Mobile"
            ref={technologieItem1Ref}
            id={1}
          />
          <TechnologieItem
            icon={<FaReact size={38} color="#00D1F7" />}
            borderColor="border-[#00D1F7]"
            text="React"
            description="Web sites"
            ref={technologieItem2Ref}
            id={2}
          />
          <TechnologieItem
            icon={<FaNodeJs size={38} color="#8CC84B" />}
            borderColor="border-[#8CC84B]"
            text="NodeJs"
            description="Apis"
            ref={technologieItem3Ref}
            id={3}
          />
          <TechnologieItem
            icon={<TbBrandCSharp size={38} color="#8C50D7" />}
            borderColor="border-[#8C50D7]"
            text="CSharp"
            description="Apis"
            ref={technologieItem4Ref}
            id={4}
          />
        </div>
      </div>
    </div>
  )
}
