import Header from "./header"
//components
import BasicTable from "../../basicTable/basicTable"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
import { Box } from "grommet"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

const ArticlesPage = ({ posts }) =>
  <Container alignSelf="center" >
    <Box margin={{ vertical: "xlarge" }}>
      <Header />
    </Box>
    <Box margin={{ bottom: "medium" }}>
      <BasicTable title="Laatste artikelen" posts={posts} path="./post" />
    </Box>
  </Container >


export default ArticlesPage