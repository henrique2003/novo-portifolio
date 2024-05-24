import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Home } from "./components/pages/home"
import { ScrollTrigger } from "gsap/all"

function App(): JSX.Element {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  return (
    <Home />
  )
}

export default App
