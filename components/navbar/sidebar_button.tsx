import React from 'react'
import { Menu } from "grommet-icons"
//constant
import { GLOBALSTYLE } from '../../util/constants'
//styled
import styled from "styled-components"
import { CursorBox, Hover } from "../shared/styledComponents"

const Container = styled(CursorBox)`
  display:none;
  @media ${GLOBALSTYLE.breakpoint.minmobile}  {
    display:block;
  }
  & > svg {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  ${Hover}
`

const SidebarButton = () => {
  return (
    <Container margin={{ right: "medium" }} >
      <Menu color="fontColor"/>
    </Container>
  )
}

export default SidebarButton