import HomePage from "../components/template/homePage";
//constants
import { POSTS_PATH, PROJECTS_PATH } from "../util/constants"
//function
import { getArticlesByAmount, getProjectsByAmount } from "../util/functions/files"
//typescript
import { IPost, IProject } from "../util/typescript"

interface IHome {
  posts: IPost[],
  projects: IProject[]
}

function Home({ posts, projects }: IHome) {
  return (
    <HomePage posts={posts} projects={projects} />
  )
}

export async function getStaticProps() {
  const posts = await getArticlesByAmount(POSTS_PATH, 6)

  const projects = await getProjectsByAmount(PROJECTS_PATH, 6)

  return { props: { posts, projects } }
}

export default Home