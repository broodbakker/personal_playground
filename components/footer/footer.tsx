import React from 'react'
import styled from "styled-components"
//styled
import { MaxWidth } from "../shared/styledComponents"
import { Deploy as DeployIcon } from 'grommet-icons';
import { Box, Footer as F, Text } from 'grommet';

const InsideContainer = styled(MaxWidth)`
`

const Footer = () =>
  <Box background="primary" justify="center" direction="row" pad={{ vertical: "small" }}
    border={{ side: "top", size: "small", color: "lightBorderColor" }}  >
    <InsideContainer direction="row" justify="between" fill="horizontal"  >
      <Box direction="row" align="center">

        <Text color="fontColor" weight={900} margin={{ right: "small" }} >
          Gemaakt door: Martijn van de Ree
        </Text>
        < DeployIcon color="fontColor" size="medium" />
      </Box>

      <Box direction="row" align="center" >
        ©Copyright 2022
      </Box>
    </InsideContainer>
  </Box>

export default Footer