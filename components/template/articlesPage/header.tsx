import React from 'react'
//styles
import { Box, Text, Heading } from "grommet"
//components
import { LinkUnderline } from "../../shared/link"
import Searchbar from "../../../components/searchbar"

const Header = () => {
  return (
    <>
      <Box align='center'>
        <Box margin={{ bottom: "medium" }} >
          <Heading color="fontColor1" level="1" size="small">Artikelen</Heading>
        </Box>

        <Box margin={{ bottom: "medium" }}>
          <Text textAlign='center' size="large">Tutorials, artikelen, projectenm code snippets en alle andere dingen die in mij opkomen om over te schrijven. </Text>
        </Box>
      </Box >

      <Searchbar placeholder='Begin met typen om te zoeken..'
        bgColor="light" name="search"
      />
    </>

  )
}



export default Header