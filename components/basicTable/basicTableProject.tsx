//style
import { Box, Heading } from "grommet"
//components
import { LinkUnderline } from "../shared/link"
import ProjectCards from '../projectCards/projectCards';

type LatestPostsProps = {
  posts: any
  title: string
  path: string
  more?: string
}

export const BasicTableProject = ({ posts, title, path, more }: LatestPostsProps) => {
  return (
    <Box fill="horizontal">
      <Box direction="row" justify="between" pad={{ bottom: "xsmall" }}
        margin={{ bottom: "small" }} border={{ color: 'lightBorderColor', size: 'xsmall', side: "bottom" }}>
        <Heading level="2" size="small" color="headingColor" >{title}</Heading>
        <LinkUnderline href={path}>
          <Box>{more}</Box>
        </LinkUnderline>
      </Box>

      <ProjectCards projects={posts} />
    </Box>
  )
}
export default BasicTableProject