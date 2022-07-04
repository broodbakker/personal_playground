//constant
import PostPage from "../../components/template/postPage";
import { POSTS_PATH } from "../../util/constants"
//function
import { importMdFiles, getArticleFileBySlug } from "../../util/functions/files"
//typescript
import { IPost } from "../../util/typescript"


interface IArticle {
  file: IPost,
}

const Artikelen = ({ file }: IArticle) => {
  return (
    <>
      <PostPage file={file} />
    </>

  )
}

export async function getStaticPaths() {
  const paths = importMdFiles(POSTS_PATH)

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const file: IPost = await getArticleFileBySlug(params.slug, POSTS_PATH)

  return {
    props: {
      file
    },
  }
}

export default Artikelen