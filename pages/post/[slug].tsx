//constant
import PostPage from "../../components/template/postPage";
import { POSTS_PATH } from "../../util/constants"
//function
import { importMdFiles, getFileBySlug } from "../../util/functions/files"

export default function Post({ file }) {
  return (
    // <PostPage file={file} />
    <div>test</div>
  )
}

export async function getStaticPaths() {
  const paths = importMdFiles(POSTS_PATH)


  return {
    paths,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const file = getFileBySlug(params.slug, POSTS_PATH)

  return {
    props: {
      file
    },
  }
}
