import React from 'react'
import Link from "next/link"
import { Box, ResponsiveContext } from "grommet"
import { Article, UserExpert, System } from "grommet-icons"
//typescript
import { NavLinks } from "../../typescript"
//styled
import { CursorBox } from "../shared/styledComponents"

const NavIcons = {
  artikelen: <Article />,
  projecten: <UserExpert />,
  "over mij": <System />
}
type NavLinksProps = NavLinks

const NavLink = ({ navRoute }: NavLinksProps) => {
  const size = React.useContext(ResponsiveContext);

  const right = size === "small" ? "none" : "small"

  return (
    <CursorBox align="center" direction={size === "small" ? "column" : "row"} margin={{ horizontal: "xsmall" }}>
      <Box margin={right}>
        {NavIcons[navRoute.name]}
      </Box>

      <Link href={navRoute.route}>
        <a>
          {navRoute.name}
        </a>
      </Link>
    </CursorBox>
  )
}


export default NavLink
