//style
import styled, { css } from "styled-components"
import { Box, Heading } from "grommet"
import { normalizeColor } from "grommet/utils";
//components
import { LinkUnderline } from "../shared/link"
import { CursorBox } from '../shared/styledComponents';
import Link from "../shared/link"
//typescript
import { IPost, IProject } from "../../util/typescript"

type LatestPostsProps = {
  posts: IPost[] | IProject[]
  title: string
  path: string
  more?: string
}

const LatestPosts = ({ posts, title, path, more }: LatestPostsProps) => {
  return (
    <Box fill="horizontal">
      <Box direction="row" justify="between" pad={{ bottom: "xsmall" }}
        margin={{ bottom: "small" }} border={{ color: 'lightBorderColor', size: 'xsmall', side: "bottom" }}>
        <Heading level="2" size="small" color="headingColor" >{title}</Heading>
        <LinkUnderline href={path}>
          <Box>{more}</Box>
        </LinkUnderline>
      </Box>

      <Box>
        {posts.map((post, index) => <LatestPost key={index} title={post.data.title} date={post.data.date} path={`${path}/${post.data.slug}`} />)}
      </Box>
    </Box>
  )
}

export const LatestSearchTable = ({ posts, title, path, more }: any) => {
  return (
    <Box fill="horizontal">
      <Box direction="row" justify="between" pad={{ bottom: "xsmall" }}
        margin={{ bottom: "small" }} border={{ color: 'lightBorderColor', size: 'xsmall', side: "bottom" }}>
        <Heading level="2" size="small" color="headingColor" >Zoek Resultaten:</Heading>
        <LinkUnderline href={path}>
          <Box>{more}</Box>
        </LinkUnderline>
      </Box>

      <Box>
        {posts.map((post, index) => <LatestPost key={index} title={post.title} date={post.date} path={post.href} />)}
      </Box>
    </Box>
  )
}

const PostContainer = styled(CursorBox)`
  border-radius:0.5rem;
  ${props => css`
      &:hover {
      background-color:${normalizeColor("lightBackground", props.theme)};
      color:white;
    }
  `}
`
const H = styled(Heading)`
  font-size:1em;
`

const Time = styled.time`
  display:flex;
  justify-content:center;
  align-items: center;
 ${props => css`
      color:${normalizeColor("darkFontColor", props.theme)};;
  `}
`

type PostProps = {
  title: string
  date: string
  path: string
}

const LatestPost = ({ title, date, path }: PostProps) =>
  <Link href={path}>
    <PostContainer direction="row" justify="between" pad={{ vertical: "small", horizontal: "small" }}>
      <H level="3" color="linkColor">{title}</H>
      <Time>{date}</Time>
    </PostContainer>
  </Link>


export default LatestPosts