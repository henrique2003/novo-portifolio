import { RedLine } from "../atoms"
import { Container } from "../atoms/container"
import { Header, Introduction, Skills } from "../molecules"
import { ProjectsTechnologies, SkillExamples } from "../organisms"

export const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Container>
        <Header />
        <Introduction />
        <Skills />
        <SkillExamples />
        <RedLine />
        <ProjectsTechnologies />
      </Container>
    </div>
  )
}
