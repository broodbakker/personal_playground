import ProjectsPage from "../components/template/projectsPage";
//constants
import { PROJECTS_PATH } from "../util/constants"
//functions
import { getFiles } from "../util/functions/files"
//typescript
import { IProject } from '../util/typescript/index';

function Projects({ projects }) {
  return <ProjectsPage projects={projects} />
}

export async function getStaticProps() {
  const projects: IProject[] = await getFiles(PROJECTS_PATH)

  return { props: { projects } }
}

export default Projects