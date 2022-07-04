import ArticlesPage from "../components/template/articlesPage";
//constants
import { POSTS_PATH } from "../util/constants"
//functions
import { getArticleFiles } from "../util/functions/files"
//typescript
import { IPost } from "../util/typescript"

interface IArticles {
  posts: IPost[],
}

function Articles({ posts }: IArticles) {
  return <ArticlesPage posts={posts} />
}

export async function getStaticProps() {
  const posts = await getArticleFiles(POSTS_PATH)

  return { props: { posts } }
}

export default Articles