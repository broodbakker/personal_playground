//constant
import PostPage from "../../components/template/postPage";
import { POSTS_PATH } from "../../util/constants"
//function
import { importMdFiles, getFileBySlug } from "../../util/functions/files"
//typescript
import { IPost } from "../../util/typescript"

export default function Post({ file }: any) {
  console.log("data", file)
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

  console.log(params, "test")

  const file: IPost = await getFileBySlug(params.slug, POSTS_PATH)

  console.log("file", file.data)
  return {
    props: {
      file
    },
  }
}
