import Header from "./header"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
import { Box } from "grommet"
import Main from "./main"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`
const PostPage = ({ file }) => {
  console.log("file", file)
  return (
    <Container alignSelf="center" margin={{ bottom: "large" }}>
      <Box margin={{ vertical: "large" }}>
        <Header data={file.data} />
      </Box>
      <Main file={file} />
    </Container>
  )
}

export default PostPage