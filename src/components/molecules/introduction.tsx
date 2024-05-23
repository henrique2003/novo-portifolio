import { meImg } from "../../assets"

export const Introduction: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[100px]">
      <img
        src={meImg}
        alt="Imagem de Henrique De Melo Cristioglu"
        title="Imagem de Henrique De Melo Cristioglu"
        className="max-w-[300px] w-full h-full max-h-[300px]"
      />
    </div>
  )
}
