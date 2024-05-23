import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Home } from "./components/pages/home"

function App(): JSX.Element {
  gsap.registerPlugin(useGSAP)

  return (
    <Home />
  )
}

export default App
