import { getFruitsPhone } from "../../../assets"

export const SkillExampleMobile: React.FC = () => {
  return (
    <div className="min-w-[100vw] flex gap-10 justify-center items-center h-[100vh] max-lg:h-auto max-lg:flex-col max-lg:min-w-full">
      <div className="flex flex-col items-end justify-center gap-5 max-md:gap-3 min-w-[500px] max-lg:w-[90%] max-lg:order-2 max-lg:max-w-full max-lg:min-w-full">
        <h4 className="text-2xl max-sm:text-lg max-md:text-xl text-white font-semibold text-right tracking-wide max-lg:text-left max-lg:w-full">
          Desenvolvimento de Apps mobile
        </h4>
        <p className="text-grayrer leading-7 tracking-wide text-right text-xl max-lg:text-sm max-w-[600px] max-lg:max-w-full max-lg:text-left">
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
        className="mr-52 max-lg:order-1 max-lg:mr-0 max-lg:text-center max-w-[300px] w-full max-sm:max-w-[200px]"
      />
    </div>
  )
}
