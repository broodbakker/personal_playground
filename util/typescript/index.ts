export interface IPost {
  data: IPostData
  content: string
}

export interface IPostData {
  templateKey: string
  title: string
  date: string
  subject: string
  author: string
  tags: string[]
  image: string[]
  slug: string
}

export interface IProject {
  data: IProjectData
  content: string
}

export interface IProjectData {
  templateKey: string
  title: string
  date: string
  subject: string
  author: string
  tags: string[]
  link: string[]
  image: string[]
  slug: string
  description: string
}