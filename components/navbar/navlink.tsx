
import React from 'react'
import Link from "next/link"
//compoents
import { Article, UserExpert, System } from "grommet-icons"
import { Box, Text } from "grommet"
//styled
import styled from "styled-components"
import { CursorBox, Hover } from "../shared/styledComponents"
//constant
import { GLOBALSTYLE } from '../../util/constants'
// //typescript
import { NavLinks } from "../../typescript"

const NavIcons = {
  Artikelen: <Article />,
  Projects: <System />,
  "Over Mij": <UserExpert />
}

const Container = styled(CursorBox)`
  @media ${GLOBALSTYLE.breakpoint.minmobile}  {
    flex-direction:row;
  }
 ${Hover}
`

const NavIconsContainer = styled(Box)`
  @media ${GLOBALSTYLE.breakpoint.minmobile}  {
   margin-right:0.5rem;
  }
`

type NavLinksProps = NavLinks

const NavLink = ({ navRoute }: NavLinksProps) => {
  return (
    <Container align="center" >
      <NavIconsContainer >
        {NavIcons[navRoute.name]}
      </NavIconsContainer>

      <Link href={navRoute.route}>
        <Text color="fontColor" size="small" weight="bold">
          <a>
            {navRoute.name}
          </a>
        </Text>
      </Link>
    </Container>
  )
}

export default NavLink
