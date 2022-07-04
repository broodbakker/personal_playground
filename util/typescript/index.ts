export interface IPost {
  data: IPostData
  content: string
}

export interface IPostData {
  title: string
  date: Date
  subject: string
  author: string
  tags: string[]
  image: string
  content: string
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