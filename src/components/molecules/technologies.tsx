import { FaNodeJs, FaReact } from "react-icons/fa"
import { TechnologieItem } from "../atoms"
import { TbBrandCSharp } from "react-icons/tb"

export const Technologies: React.FC = () => {
  return (
    <div className="bg-[#171717] w-full rounded-lg py-14 px-8 flex justify-center items-center flex-col h-[40vh] mt-[200px]" id="technologie">
      <h3 className="uppercase text-white font-semibold text-5xl text-center max-md:text-4xl">Tecnologioas que Utilizo</h3>
      <p className="mt-5 text-white opacity-70 text-center text-xl font-light max-md:text-lg">Conheca as linguagens mais utilizadas na atualidade</p>
      <div className="mt-10 grid grid-cols-4 gap-5 w-full max-lg:grid-cols-2 max-sm:grid-cols-1">
        <TechnologieItem
          icon={<FaReact size={38} color="#336AE9" />}
          borderColor="border-[#336AE9]"
          text="React Native"
          description="App Mobile"
          id={1}
        />
        <TechnologieItem
          icon={<FaReact size={38} color="#00D1F7" />}
          borderColor="border-[#00D1F7]"
          text="React"
          description="Web sites"
          id={2}
        />
        <TechnologieItem
          icon={<FaNodeJs size={38} color="#8CC84B" />}
          borderColor="border-[#8CC84B]"
          text="NodeJs"
          description="Apis"
          id={3}
        />
        <TechnologieItem
          icon={<TbBrandCSharp size={38} color="#8C50D7" />}
          borderColor="border-[#8C50D7]"
          text="CSharp"
          description="Apis"
          id={4}
        />
      </div>
    </div>
  )
}
