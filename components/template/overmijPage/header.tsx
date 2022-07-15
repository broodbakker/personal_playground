import React from 'react'
import { Box, Text, Heading } from "grommet"
import { LinkUnderline } from "../../shared/link"

const Header = () => {
  return (
    <Box align='center'>


      <Box margin={{ bottom: "medium" }} >
        <Heading color="fontColor1" level="1" size="small">Over Mij</Heading>
      </Box>

      <Box margin={{ bottom: "medium" }}
      >
        {/* <Text textAlign='center' size="large">Software developer, open-sourcerer, and lead singer of Floppy and the Diskettes</Text> */}
      </Box>
    </Box >
  )
}

export default Header