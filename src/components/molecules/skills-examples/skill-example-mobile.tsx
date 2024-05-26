import { getFruitsPhone } from "../../../assets"

export const SkillExampleMobile: React.FC = () => {
  return (
    <div className="min-w-[100vw] flex gap-10 justify-center items-center h-[100vh]">
      <div className="flex flex-col items-end justify-center gap-5 min-w-[500px]">
        <h4 className="text-xl text-white font-semibold text-right tracking-wide">
          Desenvolvimento de Apps mobile
        </h4>
        <p className="text-grayrer leading-7 tracking-wide text-right text-md max-w-[600px]">
          É um fato conhecido de todos que um leitor se distrairá com o
          conteúdo de texto legível de uma página quando estiver examinando
          sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
          distribuição normal de letras, ao contrário de "Conteúdo aqui,
          conteúdo aqui",
        </p>
      </div>
      <img
        src={getFruitsPhone}
        alt="Imagem do aplicativo GetFruits, um aplicativo de delivery de frutas"
        title="Imagem do aplicativo GetFruits, um aplicativo de delivery de frutas"
        className="mr-52"
      />
    </div>
  )
}
