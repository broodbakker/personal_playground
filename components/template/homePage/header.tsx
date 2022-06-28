import React from 'react'
import { Yoga, Github } from "grommet-icons"
//constant
import { GLOBALSTYLE, ROUTES, HEADER_IMAGE, GITHUB_LINK } from '../../../util/constants'
//styles
import styled, { css } from "styled-components"
import { Box, Image, Text, Heading } from "grommet"
import Link, { LinkUnderline } from "../../shared/link"
import { normalizeColor } from "grommet/utils";

const Container = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    flex-direction:row;
  }
`
const Text1 = styled(Text)`
  font-style:italic;
   ${props => css`
      &:hover {
      color:${normalizeColor("primary", props.theme)};;
    }
  `}
`

const ImageBox = styled(Box)`
  width:150px;
  min-width:150px;
  min-height:200px;
  border-radius:0.5rem;
  overflow: hidden;
  margin-bottom:1rem;
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    width:225px;
    min-width:225px;
    min-height:300px;
    margin-bottom:0rem;
  }
`

const Header = () => {
  return (
    <Container >
      {/* image */}
      <ImageBox height="small" margin={{ right: "medium" }} border={{ size: "small", color: "lightBorderColor" }}>
        <Image
          fit="cover"
          src={HEADER_IMAGE}
        />
      </ImageBox>

      <Box>
        <Box margin={{ bottom: "small" }}>
          <Heading color="headingColor" level="1" size="small">Hallo iedereen, ik ben Martijn</Heading>
        </Box>

        <Box margin={{ bottom: "medium" }}>

          {/* ik vind het fantastisch om aan mijn eigen projecten te werken. */}
          {/* nu ga ik een poging wagen om hierover ook te schrijven wat ik van deze projecten geleerd heb en hoe ik ze geschreven heb*/}
          {/* met als doel om mijn eigen progressie bij te houden. Want ik werk aan veel projecten maar er komt altijd van alles tussen dus wanneer ik ze af maak dan is het ook klaar */}
          {/* deze website is mijn digitale tuin */}
          {/* met een verzamelingen van dingen die ik heb geleerd en gemaakt */}
          {/* ik hoop voor iedereen dat het wat lees plezier geeft. */}

          {/* Hallo iedereen, ik ben Martijn */}
          {/* Ik ben een software ontwikkelaar.*/}
          {/* Leuk dat je een kijkje neemt op mijn site. */}
          {/* Dit is mijn digitale bibliotheek */}
          {/* Ik laat hier mijn projecten zien en ik laat zien hoe ik ze gebouwd heb daarnaast schrijf ik over van alles wat mij bezig houdt./}
          {/* Om mijn progressie bij te houden en ik schrijf veel maar laat het nooit zien. Ik hoop hier verandering in te brengen */}
          {/* Ik hoop dat ik wat lees plezier kan geven aan iedereen en volg mij op mijn ondtekkingsreis! */}
          <Text size="large">Ik ben een software ontwikkelaar. Leuk dat je een kijkje neemt op mijn site!
            Dit is mijn digitale bibliotheek. Hier zijn mijn<LinkUnderline href="/"> projecten </LinkUnderline>en<LinkUnderline href="/"> artikelen </LinkUnderline> te vinden die ik schrijf in mijn vrije tijd, met als doel om mijn eigen progressie beter bij te houden en niet zo bang te zijn om dingen online te zetten omdat ze voor mijn gevoel nooit af zijn.
          </Text>
          <Box margin={{ top: "small" }}>
            <Text size="large">
              Volg mij op mijn ondtekkingsreis. Ik hoop dat ik jullie wat lees plezier kan geven en misschien steek je er wat van op.
            </Text>
          </Box>
        </Box>

        <Box direction="row">
          <Link href={ROUTES["over-mij"].route}>
            <Box direction="row" margin={{ right: "small" }}>
              <Yoga color='primary1' />
              <Text1 margin={{ left: "xsmall" }} color="lightFontColor" weight="100">meer over mij</Text1>
            </Box>
          </Link>

          <Link href={GITHUB_LINK}>
            <Box direction="row">
              <Github color='primary1' />
              <Text1 margin={{ left: "xsmall" }} color="lightFontColor" weight="100" >GitHub</Text1>
            </Box>
          </Link>

        </Box>

      </Box >
    </Container>
  )
}

export default Header