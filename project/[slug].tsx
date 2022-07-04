//constant
// import ProjectPage from "../components/template/postPage";
import { PROJECTS_PATH } from "../util/constants"
//function
import { importMdFiles, getProjectFileBySlug } from "../util/functions/files"
//typescript
import { IProject } from "../util/typescript"

interface IArticle {
  file: IProject,
}

export default function Project({ file }: IArticle) {

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

  const file = await getProjectFileBySlug(params.slug, PROJECTS_PATH)

  return {
    props: {
      file
    },
  }
}
