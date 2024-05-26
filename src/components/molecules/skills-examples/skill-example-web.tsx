import { cineLumniMacBook } from "../../../assets"

export const SkillExampleWeb: React.FC = () => {
  return (
    <div className="min-w-[100vw] flex gap-10 justify-center items-center h-[100vh]">
      <img
        src={cineLumniMacBook}
        alt="Imagem do sistema CineLumni, um sistema de gestão para cinema"
        title="Imagem do sistema CineLumni, um sistema de gestão para cinema"
      />
      <div className="flex w-full flex-col items-start justify-center gap-5 min-w-[500px]">
        <h4 className="text-xl text-white font-semibold text-left tracking-wide">
          Desenvolvimento de Softwares e websites
        </h4>
        <p className="text-grayrer leading-7 tracking-wide text-md max-w-[600px]">
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
