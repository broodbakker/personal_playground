import React from 'react'
//styles
import { Box, Text, Heading } from "grommet"
//components
import { LinkUnderline } from "../../shared/link"
//constants
import { GITHUB_LINK } from "../../../util/constants"

const Header = () => {
  return (
    <Box >
      <Box align='center'>
        <Box margin={{ bottom: "medium" }} >
          <Heading color="fontColor1" level="1" size="small">Projecten</Heading>
        </Box>
        <Box margin={{ bottom: "medium" }}>
          <Text textAlign='center' size="large">Al mijn open-source projecten van klein tot groot met uitleg hoe ik ze geschreven heb. Hier is een link naar mijn <LinkUnderline href={GITHUB_LINK}>GitHub</LinkUnderline> account</Text>
        </Box>
      </Box >
    </Box >
  )
}



export default Header