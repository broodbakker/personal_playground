import Header from "./header"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
import { Box } from "grommet"
import Main from "./main"
//typescript
import { IPost } from "../../../util/typescript"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

interface IPostPage {
  file: IPost
}

const PostPage = ({ file }: IPostPage) => {
  return (
    <Container alignSelf="center" margin={{ bottom: "large" }}>
      <Box margin={{ top: "large", }}>
        <Header data={file.data} />
      </Box>
      <Main file={file} />
    </Container>
  )
}

export default PostPage