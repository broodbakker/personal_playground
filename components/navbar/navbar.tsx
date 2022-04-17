import React from 'react'
import styled from "styled-components"
import { Box, ResponsiveContext } from "grommet"
//constants
import { NAV_ROUTES } from "../../util/constants"
//components
import Navlink from "./navlink"
import Logo from "./logo"
import SidebarButton from "./sidebar_button"
import Toolbar from "./toolbar"

const Container = styled(Box)`
  height:4em;
`
const Navbar = () => {
  const size = React.useContext(ResponsiveContext);

  const pad = size === "large" ? "none" : "medium"
  return (
    <Container background="primary" justify="center" direction="row" >
      <Box direction="row" fill="horizontal" justify="between" width={{ max: "large" }} pad={{ horizontal: pad }}  >
        <Box direction="row" align="center">
          <SidebarButton />
          <Logo />
        </Box>

        <Box direction="row" align="center" >
          {NAV_ROUTES.map((navRoute, index) => <Navlink navRoute={navRoute} key={index} />)}
        </Box>

        <Box direction="row" align="center">
          <Toolbar />
        </Box>
      </Box>
    </Container>
  )
}

export default Navbar