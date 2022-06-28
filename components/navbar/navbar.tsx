import React from 'react'
import { Box } from "grommet"
import { MaxWidth } from '../shared/styledComponents'
//constants
import { NAV_ROUTES } from "../../util/constants"
//components
import Navlink from "./navlink"
import Logo from "./logo"
//style
import styled from "styled-components"

const InsideContainer = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

const Navbar = () => {
  return (
    <Box background="primary" justify="center" direction="row" pad={{ vertical: "xsmall" }}
      border={{ side: "bottom", size: "small", color: "lightBorderColor" }}  >
      <InsideContainer direction="row" justify="between" fill="horizontal"  >
        <Box direction="row" align="center">
          {/* <SidebarButton /> */}
          <Logo />
        </Box>

        <Box direction="row" align="center" >
          {NAV_ROUTES.map((navRoute, index) => <Navlink navRoute={navRoute} key={index} />)}
        </Box>
      </InsideContainer>
    </Box>
  )
}

export default Navbar