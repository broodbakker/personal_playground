import React from 'react'
//styles
import styled from "styled-components"
import { Box, Text, Heading } from "grommet"
import { BasicLink } from "../../shared/link"


const BoxCard = styled(Box)`
  gap:0.5rem;
`

const Header = ({ data }:any) => {
  return (
    <>
      <Box margin={{ bottom: "small" }}
      >
        <Text textAlign='center'>Written by Tania Rascia on January 31, 2022  <BasicLink href="/">n GitHub.</BasicLink> </Text>
      </Box>

      <Box margin={{ bottom: "small" }} >
        {/* <Heading level="1" size="small" textAlign='center'>{data.title}</Heading> */}
      </Box>

      <Box margin={{ bottom: "small" }} >
        <BoxCard direction="row" justify="center" margin={{ vertical: "small" }} fill="horizontal">
          {/* {data.tags.map((tag) =>   <ButtonLink href="/">{tag}</ButtonLink>)} */}
        </BoxCard>
      </Box>
    </ >
  )
}

export default Header