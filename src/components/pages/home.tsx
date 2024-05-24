import { useEffect, useRef } from "react"
import { Container } from "../atoms/container"
import { Header } from "../molecules/header"
import { Introduction } from "../molecules/introduction"

export const Home: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

  }, [])
  return (
    <div className="w-full h-full">
      <Container>
        <Header />
        <Introduction containerRef={introductionRef} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laborum nam praesentium aperiam, enim dicta quae quo dolorem minus nostrum aut omnis est, possimus iste minima. Veritatis unde hic sunt?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laborum nam praesentium aperiam, enim dicta quae quo dolorem minus nostrum aut omnis est, possimus iste minima. Veritatis unde hic sunt?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laborum nam praesentium aperiam, enim dicta quae quo dolorem minus nostrum aut omnis est, possimus iste minima. Veritatis unde hic sunt?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laborum nam praesentium aperiam, enim dicta quae quo dolorem minus nostrum aut omnis est, possimus iste minima. Veritatis unde hic sunt?</p>
      </Container>
    </div>
  )
}
