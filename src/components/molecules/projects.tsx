import { Project } from "../../domain"
import { ProjectItem } from "../atoms"

type IProjectsProps = {
  projects: Project[]
}

export const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  return (
    <div className="w-full rounded-lg justify-center items-center flex-col h-[50vh] overflow-hidden opacity-0 translate-y-[20%]" id="projects">
      {projects.length > 0 && projects.map(({
        image,
        description,
        links,
        techs,
        title,
        color
      }, index) => (
        <ProjectItem
          key={index}
          id={index}
          image={image}
          description={description}
          links={links}
          techs={techs}
          title={title}
          color={color}
        />
      ))}
    </div>
  )
}
