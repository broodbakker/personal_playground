import React, { Dispatch } from 'react'
//styles
import { Box, Text, Heading } from "grommet"
//components
import Searchbar from "../../../components/searchbar"

interface Iheader {
  handleSearch: Dispatch<any>
  value: string
}
const Header = ({ handleSearch, value }: Iheader) => {
  return (
    <>
      <Box align='center'>
        <Box margin={{ bottom: "medium" }} >
          <Heading color="fontColor1" level="1" size="small">Artikelen</Heading>
        </Box>

        <Box margin={{ bottom: "medium" }}>
          <Text textAlign='center' size="large">Uitleg, artikelen, projecten, code snippets en alle andere dingen die in mij opkomen om over te schrijven.</Text>
        </Box>
      </Box >

      <Searchbar placeholder='Begin met typen om te zoeken..'
        bgColor="light" name="search" handleSearch={handleSearch}
        value={value}
      />
    </>

  )
}



export default Header