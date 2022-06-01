import Header from "./header"
import Main from "./main"
import {Box} from "grommet"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

const ArticlesPage = () =>
  <Container alignSelf="center">
    <Box margin={{ vertical: "large" }}>
     <Header />
    </Box>
    <Main />
  </Container>

export default ArticlesPage