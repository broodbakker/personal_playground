import HomePage from "../components/template/homePage";
import { Button } from "component-library-martijn";
//constants
import { POSTS_PATH, PROJECTS_PATH } from "../util/constants"
//function
import { getFilesAmount } from "../util/functions/files"

function Home({ posts, projects }) {
  return (
    <>
      <HomePage posts={posts} projects={projects} />
    </>)
}

export async function getStaticProps() {
  const posts = await getFilesAmount(POSTS_PATH, 2)
  const projects = await getFilesAmount(PROJECTS_PATH, 2)

  return { props: { posts, projects } }
}

export default Home