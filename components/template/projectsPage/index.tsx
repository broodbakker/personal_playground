import Header from "./header"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
import { Box } from "grommet"
import ProjectCards from "../../projectCards"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

const ProjectsPage = ({ projects }) =>
  <Container alignSelf="center" margin={{ bottom: "large" }}>
    <Box margin={{ vertical: "large" }}>
      <Header />
    </Box>
    <ProjectCards projects={projects} />
  </Container>


export default ProjectsPage