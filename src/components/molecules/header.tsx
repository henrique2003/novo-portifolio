import { BsGithub } from "react-icons/bs"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"

export const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center top-0 left-0">
      <div className="w-full flex justify-between items-center max-w-full">
        <h2 className="uppercase text-[1rem] text-ligther">Henrique De Melo Cristioglu</h2>
        <div className="flex items-center justify-center gap-3">
          <a href="https://github.com/henrique2003" target="_blank">
            <BsGithub size={30} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/henrique-cristioglu" target="_blank">
            <FaLinkedin size={30} color="white" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511959426382" target="_blank">
            <FaWhatsapp size={30} color="white" />
          </a>
        </div>
      </div>
    </div>
  )
}
