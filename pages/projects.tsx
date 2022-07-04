import ProjectsPage from "../components/template/projectsPage";
//constants
import { PROJECTS_PATH } from "../util/constants"
//functions
import { getProjectFiles } from "../util/functions/files"
//typescript
import { IProject } from '../util/typescript/index';


interface IProjects {
  projects: IProject[],
}
function Projects({ projects }: IProjects) {
  return <ProjectsPage projects={projects} />
}

export async function getStaticProps() {
  const projects = await getProjectFiles(PROJECTS_PATH)


  return { props: { projects } }
}

export default Projects