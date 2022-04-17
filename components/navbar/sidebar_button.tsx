import React from 'react'
import Link from "next/link"
import { ResponsiveContext } from "grommet"
import { Menu } from "grommet-icons"
//styled
import { CursorBox } from "../shared/styledComponents"
//constants
import { ROUTES } from "../../util/constants"

const SidebarButton = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <>
      {size != "small" &&
        <CursorBox margin={{ right: "medium" }}>
          <Link href={ROUTES.home.route}>
            <a>
              <Menu />
            </a>
          </Link>
        </CursorBox>
      }
    </>
  )
}

export default SidebarButton