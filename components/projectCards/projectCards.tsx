import React from 'react'
//constant
import { GLOBALSTYLE } from '../../util/constants'
//styles
import styled from "styled-components"
import { Box, Image, Text, Heading } from "grommet"
import { ButtonLink } from "../shared/link"
//typescript
import { IProject, IProjectData } from '../../util/typescript/index';

const Grid = styled(Box)`
 display: grid;
 grid-gap: 1rem;
 @media ${GLOBALSTYLE.breakpoint.minmobile}  {
     grid-template-columns: repeat(2, 1fr);
  }
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
     grid-template-columns: repeat(3, 1fr);
  }
`

interface IProjectCards {
  projects: IProject[]
}

const ProjectCards = ({ projects }: IProjectCards) => {
  return (
    <Grid>
      {projects.map((project, index) => <Card key={index} project={project.data} />)}
    </Grid>
  )
}

const BoxCard = styled(Box)`
  gap:0.5rem;
`

const CardContainer = styled(Box)`
  border-radius:0.5rem;
`

const ImageBox = styled(Box)`
  border-radius:0.5rem;
  overflow: hidden;
`

interface IProjectCard {
  project: IProjectData
}

const Card = ({ project }: IProjectCard) => {
  return (
    <CardContainer background="white" pad="small" align="center" border={{ color: 'lightBorderColor', size: 'small' }}>
      <Box margin={{ vertical: "small" }}>
        <Heading color="headingColor" level="2" size="small">{project.title}</Heading>
      </Box>

      <ImageBox height="xsmall" width="xsmall" margin={{ vertical: "small" }}
        border={{ size: "small", color: "lightBorderColor" }}>
        <Image
          fit="cover"
          src={project.image[0]}
          alt={project.title}
        />
      </ImageBox>

      <BoxCard direction="row" justify="center" margin={{ vertical: "small" }} fill="horizontal">
        <ButtonLink href={project.link[0]}>Code</ButtonLink>
        <ButtonLink href={project.link[1]}>Demo</ButtonLink>
        <ButtonLink href={project.link[2]}>Uitleg</ButtonLink>
      </BoxCard>

      <Box>
        <Text textAlign='center' color="fontColor1" margin={{ vertical: "small" }}>
          {project.description}
        </Text>

      </Box>

    </CardContainer>
  )

}


export default ProjectCards