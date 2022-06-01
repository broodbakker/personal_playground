import ArticlesPage from "../components/template/articlesPage";
//constants
import { POSTS_PATH } from "../util/constants"
//functions
import { getFiles } from "../util/functions/files"

function Articles({ posts }) {
  return <ArticlesPage posts={posts} />
}

export async function getStaticProps() {
  const posts = await getFiles(POSTS_PATH)

  return { props: { posts } }
}

export default Articles