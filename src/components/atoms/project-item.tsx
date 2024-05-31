import { FaReact, FaCss3, FaNodeJs } from 'react-icons/fa'
import { mongo, sass, styledComponents, typescript } from '../../assets'
import { TechsTypes } from '../../enums'

interface IProjectItemProps {
  id: number
  image: string
  title: string
  techs: string[]
  description: string
  links: {
    site?: string
    github: string
  }
  color: string
}

export const ProjectItem: React.FC<IProjectItemProps> = ({ image, title, techs, links, description, color, id }) => {
  function loadTechs(tech: string): JSX.Element {
    switch (tech) {
      case TechsTypes.reactNative:
        return <FaReact title="react native" size={30} color='#5ac9e7' />
      case TechsTypes.react:
        return <FaReact title="react native" size={30} color='#5ac9e7' />
      case TechsTypes.styledComponents:
        return <img src={styledComponents} alt="icone do styled-components" title="styled-components" className='w-[30px]' />
      case TechsTypes.typescript:
        return <img src={typescript} alt="icone do typescript" title="styled-components" className='w-[30px]' />
      case TechsTypes.css:
        return <FaCss3 title="css" size={30} color='#264ce4e5' />
      case TechsTypes.mongodb:
        return <img src={mongo} alt="icone do mongodb" title="icone do mongodb" className='w-[30px]' />
      case TechsTypes.nodejs:
        return <FaNodeJs title="nodejs" size={30} color='#539e43' />
      default:
        return <img src={sass} alt="icone do sass" title="icone do sass" className='w-[30px]' />
    }
  }

  return (
    <div className='w-full border-2 rounded-md h-[98%] mb-10 opacity-0' style={{ borderColor: color }} id={`project-item-${id}`}>
      <div className="flex gap-5 h-full">
        <div className="w-full lg:w-1/2 lg:pr-3 h-full">
          <img src={image} alt={`Image mostrando o projeto ${title}`} title={title} className="w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 pb-3">
          <p className={`text-${color} font-montserrat text-xl border-b border-gray-500 pb-1 ml-1 max-w-xs mt-5`}>{title}</p>
          <div className="mt-4 bg-transparent">
            <div className="flex gap-2">
              {techs.length > 0 && techs.map(techItem => loadTechs(techItem))}
            </div>
            <section className="mt-5">
              <p className="text-white opacity-90 tracking-wide font-opensans text-lg leading-6 mb-8 max-w-xl">{description}</p>
              {links.site && (
                <a
                  href={links.site}
                  target="_blank"
                  className={`inline-block text-white border border-${color} rounded px-5 py-1 font-montserrat text-lg mr-2 transition duration-300 ease-in-out hover:bg-${color} hover:text-white`}
                >Site</a>
              )}
              <a
                href={links.github}
                target="_blank"
                className={`inline-block text-white border border-white rounded px-5 py-1 font-montserrat text-lg transition duration-300 ease-in-out hover:bg-${color} hover:text-white`}
              >Github</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

