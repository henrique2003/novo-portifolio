import { cineLumniMacBook } from "../../../assets"

export const SkillExampleWeb: React.FC = () => {
  return (
    <div className="min-w-[100vw] flex gap-10 justify-center items-center h-[100vh] max-lg:h-auto max-lg:flex-col max-lg:min-w-full">
      <img
        src={cineLumniMacBook}
        alt="Imagem do sistema CineLumni, um sistema de gestão para cinema"
        title="Imagem do sistema CineLumni, um sistema de gestão para cinema"
        className="max-lg:text-center max-lg:mx-auto w-full"
      />
      <div className="flex w-full flex-col items-start justify-center gap-5 min-w-[500px] max-lg:min-w-[0px] max-lg:w-[100%]">
        <h4 className="text-xl text-white font-semibold text-left tracking-wide w-full">
          Desenvolvimento de Softwares e websites
        </h4>
        <p className="text-grayrer leading-7 tracking-wide text-md max-w-[600px] w-full">
          É um fato conhecido de todos que um leitor se distrairá com o
          conteúdo de texto legível de uma página quando estiver examinando
          sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
          distribuição normal de letras, ao contrário de "Conteúdo aqui,
          conteúdo aqui",
        </p>
      </div>
    </div>
  )
}
