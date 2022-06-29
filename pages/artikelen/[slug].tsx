//constant
import PostPage from "../../components/template/postPage";
import { POSTS_PATH } from "../../util/constants"
//function
import { importMdFiles, getFileBySlug } from "../../util/functions/files"
//typescript
import { IPost } from "../../util/typescript"

const Artikelen = (props) => {
  return (
    <>
      <PostPage file={props.file} />
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
  const file1: IPost = await getFileBySlug(params.slug, POSTS_PATH)

  const file = JSON.parse(JSON.stringify(file1));

  return {
    props: {
      file
    },
  }
}

export default Artikelen