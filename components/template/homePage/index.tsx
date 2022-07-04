import Header from "./header"
//components
import { Box } from "grommet"
import BasicTable, { BasicTableProject } from "../../basicTable"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
//constants
import { ROUTES } from "../../../util/constants"
//typescript
import { IPost, IProject } from "../../../util/typescript"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

interface IHomePage {
  posts: IPost[],
  projects: IProject[]
}

const HomePage = ({ posts, projects }: IHomePage) => {
  return (
    <Container alignSelf="center" >
      <Box margin={{ vertical: "large" }}>
        <Header />
      </Box>

      <Box margin={{ vertical: "medium" }}>
        <BasicTable title="Laatste Artikelen" posts={posts} path={ROUTES.artikelen.route} more="Bekijk alle artikelen" />
      </Box>

      <Box margin={{ bottom: "medium" }}>
        <BasicTableProject title="Projecten" posts={projects} path={ROUTES.projects.route} more="Bekijk alle projecten" />
      </Box>
    </Container>
  )
}

export default HomePage