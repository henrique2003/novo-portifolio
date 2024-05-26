import { useEffect, useRef } from "react"
import { meImg } from "../../assets"
import gsap from "gsap"
import { ArrowDown } from "lucide-react"
import { Square } from "../atoms/square"

export const Introduction: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const pointRef = useRef<HTMLDivElement>(null)
  const beforeTraceRef = useRef<HTMLDivElement>(null)
  const afterTraceRef = useRef<HTMLDivElement>(null)
  const traceDetailRef = useRef<HTMLDivElement>(null)
  const squareRef1 = useRef<HTMLDivElement>(null)
  const squareRef2 = useRef<HTMLDivElement>(null)
  const squareRef3 = useRef<HTMLDivElement>(null)
  const squareRef4 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl
      .to(titleRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power1"
      })
      .to(subtitleRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power1"
      })
      .to(beforeTraceRef.current, {
        duration: 0.5,
        width: '40px',
        ease: "power1"
      })
      .to(afterTraceRef.current, {
        duration: 0.5,
        width: '40px',
        ease: "power1"
      }, '<')
      .to(pointRef.current, {
        duration: 0.3,
        color: '#00D1F7'
      })
      .to(traceDetailRef.current, {
        duration: 0.7,
        opacity: 0.4
      }, '<')
      .to(squareRef1.current, {
        duration: 1,
        opacity: 1,
        right: 0,
        rotate: -360
      })
      .to(squareRef2.current, {
        duration: 1,
        opacity: 1,
        right: 0,
        rotate: -360
      }, '<')
      .to(squareRef3.current, {
        duration: 1,
        opacity: 1,
        right: 24,
        rotate: -360
      }, '<')
      .to(squareRef4.current, {
        duration: 1,
        opacity: 1,
        right: 55,
        rotate: -360
      }, '<')
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <img
        src={meImg}
        alt="Imagem de Henrique De Melo Cristioglu"
        title="Imagem de Henrique De Melo Cristioglu"
        className="max-w-[300px] w-full h-full max-h-[300px]"
      />
      <h1 className="font-semibold text-center my-5 text-white text-5xl opacity-0 flex gap-2" ref={titleRef}>
        <div className="w-0 overflow-hidden flex justify-center items-center border-b-2 border-b-white" ref={beforeTraceRef}></div>
        Henrique
        <span className="text-white" ref={pointRef}>.</span>C
        <div className="w-0 overflow-hidden flex justify-center items-center border-b-2 border-b-white" ref={afterTraceRef}></div>
      </h1>
      <p className="font-semibold uppercase text-center mt-4 text-grayrer text-md opacity-0" ref={subtitleRef}><i>Desenvoldedor fullstack</i></p>
      <div className="w-full relative flex justify-center items-center">
        <div id="introduction-trace" className="w-[3px] rounded-lg bg-grayrer h-[100px] mt-20 opacity-0" ref={traceDetailRef}></div>
        <Square ref={squareRef1} className="top-0" />
        <Square ref={squareRef2} className="top-20" />
        <Square ref={squareRef3} className="top-20 right-7" />
        <Square ref={squareRef4} className="top-20 right-24" />
      </div>
      <div className="w-[80px] h-[80px] rounded-[50%] mt-20 border border-grayrer flex justify-center items-center">
        <ArrowDown color="#A2A2A2" size={30} />
      </div>
    </div>
  )
}
