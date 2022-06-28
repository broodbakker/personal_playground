//constant
import PostPage from "../../components/template/postPage";
import { POSTS_PATH } from "../../util/constants"
//function
import { importMdFiles, getFileBySlug } from "../../util/functions/files"
//typescript
import { IPost } from "../../util/typescript"

export default function Post({ file }) {
  return (
    <PostPage file={file} />
  )
}

export async function getStaticPaths() {
  const paths = importMdFiles(POSTS_PATH)

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {

  const file: IPost = getFileBySlug(params.slug, POSTS_PATH)

  return {
    props: {
      file
    },
  }
}
