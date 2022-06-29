//constant
// import ProjectPage from "../components/template/postPage";
import { PROJECTS_PATH } from "../util/constants"
//function
import { importMdFiles, getFileBySlug } from "../util/functions/files"

export default function Project({ file }) {

  return (
    // <ProjectPage file={file} />
    <div>test</div>
  )
}

export async function getStaticPaths() {
  const paths = importMdFiles(PROJECTS_PATH)

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {

  const file = await getFileBySlug(params.slug, PROJECTS_PATH)

  return {
    props: {
      file
    },
  }
}
