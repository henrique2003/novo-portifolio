import { Container } from "../atoms/container"
import { Header } from "../molecules/header"
import { Introduction } from "../molecules/introduction"

export const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Container>
        <Header />
        <Introduction />
      </Container>
    </div>
  )
}
