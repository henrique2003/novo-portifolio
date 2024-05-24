import { CodeXml } from "lucide-react"

export const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center top-0 left-0">
      <div className="w-full flex justify-between items-center max-w-full">
        <h2 className="uppercase text-[1rem] text-ligther">Henrique Cristioglu</h2>
        <CodeXml size={22} color="white" />
      </div>
    </div>
  )
}
