import { TechsTypes } from "../enums"

export type Project = {
  image: string,
  description: string
  links: {
    site: string
    github: string
  },
  techs: TechsTypes[],
  title: string,
  color: string
}
