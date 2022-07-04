import React from 'react'
//styles
import styled, { css } from "styled-components"
import { Box, Text, Heading } from "grommet"
import { LinkUnderline, BasicLink } from "../../shared/link"
import { normalizeColor } from 'grommet/utils';

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
    < >
      <Box margin={{ bottom: "medium" }}>

        {/* opening */}

        {/* inspiration */}
        <Text margin={{ bottom: "medium" }}>Hey, Ik ben Martijn! a software engineer working in Chicago. Welcome to my spot on the web for projects created, tutorials written, musings, and anything else I want to show the world.</Text>

        <Text margin={{ bottom: "medium" }}>
          My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what learned with the world and document notes for myself, and hopefully connect with a few people.
        </Text>

        <Text >
          Check out the projects page to see a highlight of the open-source <LinkUnderline href="/">projects</LinkUnderline> made, and articles to see everything also written external <LinkUnderline href="/">public</LinkUnderline>  for DigitalOcean, Envato Tuts+, etc. and done a few speaking engagements and podcasts, which you can find below.
        </Text>
      </Box>

      {/* what am i doing now */}
      {/* Connect */}

      {/* Random facts */}

      {/* tools */}


      {/* songs */}
      <Box margin={{ vertical: "medium" }} >
        <Box margin={{ bottom: "small" }}>
          <Heading level="3" size="small">What  doing now</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <Text1>Updated February 24th, 2022</Text1>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <List>
            <li><Text color="primary">Staying inside because s too cold</Text></li>
            <li><Text color="primary">Looking for new video games to play</Text></li>
            <li><Text color="primary">Working at <LinkUnderline href="https://www.balto.ai/">Balto AI</LinkUnderline> </Text></li>
            <li><Text color="primary">Writing about GraphQL</Text></li>
            <li><Text color="primary">Working on a JavaScript implementation of </Text><LinkUnderline href="https://store.steampowered.com/app/736260/Baba_Is_You/">Baba Is You</LinkUnderline></li>
          </List>
        </Box>

        <Box >
          <List>
            <li><Text color="primary">Staying inside becauses too cold</Text></li>
            <li><Text color="primary">Looking for new video games to play</Text></li>
            <li><Text color="primary">Working at <LinkUnderline href="https://www.balto.ai/">Balto AI</LinkUnderline> </Text></li>
            <li><Text color="primary">Writing about GraphQL</Text></li>
            <li><Text color="primary">Working on a JavaScript implementation of </Text><LinkUnderline href="https://store.steampowered.com/app/736260/Baba_Is_You/">Baba Is You</LinkUnderline></li>
          </List>
        </Box>
      </Box>

      <Box margin={{ vertical: "medium" }}>
        <Box margin={{ bottom: "small" }}>
          <Heading level="3" size="small">Connect</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <Text>You can contact me by email at hello at taniarascia.com to say hi! I always appreciate meeting new people.</Text>
        </Box>

        <Box >
          <List>
            <li><BasicLink test href="/" ><Text color="primary">Staying inside becausetoo cold</Text></BasicLink></li>
            <li><BasicLink href="/"><Text color="primary">Looking for new video games to play
            </Text>
            </BasicLink></li>
          </List>
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
      </Box>


      <Box margin={{ bottom: "medium" }}>
        <Box margin={{ bottom: "large" }} pad={{ bottom: "small" }} border={{ color: 'primary', size: 'small', side: "bottom" }}>
          <Heading level="3" size="small">Tools</Heading>
        </Box>

        <Box margin={{ bottom: "small" }}>
          <List>
            <li><Text color="primary">Staying inside becausoo cold</Text></li>
            <li><Text color="primary">Looking for new video games to play</Text></li>
            <li><Text color="primary">Working at <BasicLink href="https://www.balto.ai/">Balto AI</BasicLink> </Text></li>
            <li><Text color="primary">Writing about GraphQL</Text></li>
            <li><Text color="primary">Working on a JavaScript implementation of </Text><BasicLink href="https://store.steampowered.com/app/736260/Baba_Is_You/">Baba Is You</BasicLink></li>
          </List>
        </Box>

        <Blockquote>
          <Text>
            Tania writes extremely clear, concise tutorialsrrently have a job in development without this site. So thanks for ruining my life, Tania.
          </Text>
        </Blockquote>
      </Box>

    </ >
  )
}

export default Main