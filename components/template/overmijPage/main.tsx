import React from 'react'
//styles
import styled, { css } from "styled-components"
import { Box, Text, Heading } from "grommet"
import { LinkUnderline, BasicLink } from "../../shared/link"
import { normalizeColor } from 'grommet/utils';
import { LinkUnderline1 } from "../../shared/styledComponents"

const Text1 = styled(Text)`
  font-style: italic;
`

const List = styled.ul`
  & > li {
      color: red;
    }
`;

const Blockquote = styled.blockquote`
   ${props => css`
        border-left:${normalizeColor("primary", props.theme)} 5px solid;
        border-right:${normalizeColor("primary", props.theme)} 1px solid;
        border-top:${normalizeColor("primary", props.theme)} 1px solid;
        border-bottom:${normalizeColor("primary", props.theme)} 1px solid;
      `}
      border-radius:0 0.5rem 0.5rem 0;
      background:white;
      padding:1rem;
`

const Main = () => {
  return (
    <div>
      <Box margin={{ bottom: "medium" }}>
        {/* opening */}
        {/* inspiration */}
        <Text margin={{ bottom: "medium" }}>Hey, Ik ben Martijn een software developer uit Utrecht.
          Welkom op mijn plekje op het web. Hier ben ik van plan mijn projecten te laten zien aan de wereld en er iets over te schrijven.</Text>

        {/* <Text margin={{ bottom: "medium" }}>
          My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what learned with the world and document notes for myself, and hopefully connect with a few people.
        </Text> */}

        {/* <Text >
          Check out the projects page to see a highlight of the open-source <LinkUnderline href="/">projects</LinkUnderline> made, and articles to see everything also written external <LinkUnderline href="/">public</LinkUnderline>  for DigitalOcean, Envato Tuts+, etc. and done a few speaking engagements and podcasts, which you can find below.
        </Text> */}
      </Box>

      {/* what am i doing now */}
      {/* Connect */}

      {/* tools */}


      {/* songs */}
      <Box margin={{ vertical: "small" }} >
        <Box margin={{ bottom: "small" }}>
          <Heading level="3" size="small">waar ben ik nu mee bezig</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <List>
            <li><Text color="primary">Ik ben aan het verhuizen naar Zutphen</Text></li>
            <li><Text color="primary">Op zoek naar een leuke als front-end developer</Text></li>
            <li><Text color="primary">Aan het werk bij de brandweer </Text></li>
            <li><Text color="primary">Een manier vinden om betalingen te intergreren in websites met behulp van stripe</Text></li>
            <li><Text color="primary"><LinkUnderline1 href="https://www.youtube.com/watch?v=GKdl-GCsNJ0&ab_channel=TheBeatles-Topic">Here comes the sun - Beatles</LinkUnderline1>
              {" "}leren op de gitaar</Text></li>
          </List>
        </Box>
      </Box>



      {/* Random facts */}
      {/* <Box margin={{ vertical: "medium" }}>
        <Box margin={{ bottom: "small" }}>
          <Heading level="3" size="small">Random facts</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <List>
            <li><Text color="primary">Staying inside becaustoo cold</Text></li>
            <li><Text color="primary">Looking for new video games to play</Text></li>
            <li><Text color="primary">Working at <LinkUnderline href="https://www.balto.ai/">Balto AI</LinkUnderline> </Text></li>
            <li><Text color="primary">Writing about GraphQL</Text></li>
            <li><Text color="primary">Working on a JavaScript implementation of </Text><LinkUnderline href="https://store.steampowered.com/app/736260/Baba_Is_You/">Baba Is You</LinkUnderline></li>
          </List>
        </Box>
      </Box> */}

      <Box margin={{ vertical: "small" }}>
        <Blockquote>
          <Text>
            I have learned that i still have a lot to learn
          </Text>
        </Blockquote>
      </Box>

      <Box margin={{ bottom: "medium", top: "large" }}>
        <Box margin={{ bottom: "small" }} pad={{ bottom: "small" }} border={{ color: 'primary', size: 'small', side: "bottom" }}>
          <Heading level="3" size="medium">Tools waarmee ik werk</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <List>
            <li><Text color="primary">Html</Text></li>
            <li><Text color="primary">Css</Text></li>
            <List>
              <li><Text color="primary">Styled componnents</Text></li>
              <li><Text color="primary">Bootstrap</Text></li>
              <li><Text color="primary">Tailwind</Text></li>
              <li><Text color="primary">Chakra ui</Text></li>
            </List>
            <li><Text color="primary">Javascript</Text></li>
            <List>
              <li><Text color="primary">Node js</Text></li>
              <li><Text color="primary">React</Text></li>
              <List>
                <li><Text color="primary">Next js</Text></li>
              </List>

            </List>
            <li><Text color="primary">library</Text></li>
            <List>
              <li><Text color="primary">redux</Text></li>
            </List>

            <li><Text color="primary">hosting</Text></li>
            <List>
              <li><Text color="primary">Netlify</Text></li>
              <li><Text color="primary">Netlify</Text></li>
            </List>
            <li><Text color="primary">Testing</Text></li>
            <List>
              <li><Text color="primary">Jest</Text></li>
              <li><Text color="primary">Cypress</Text></li>
            </List>
          </List>
        </Box>
      </Box>

      <Box margin={{ vertical: "medium" }}>
        <Box margin={{ bottom: "small" }}>
          <Heading level="3" size="small">Contact</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <Text>Je kan altijd een bericht sturen naar mijn email of mijn github account bekijken!</Text>
        </Box>

        <Box >
          <List>
            <li><LinkUnderline1 href="https://github.com/martijnvanderee" >
              <Text>github</Text></LinkUnderline1></li>
            <li><Text color="primary">email: mrtjnvanderee@gmail.com </Text>
            </li>
          </List>
        </Box>

      </Box>
    </div >
  )
}

export default Main