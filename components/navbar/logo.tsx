import React from 'react'
import Link from "next/link"
//styled
import { CursorBox } from "../shared/styledComponents"
//constants
import { ROUTES } from "../../util/constants"

const Logo = () =>
  <CursorBox>
    <Link href={ROUTES.home.route}>
      <a>
        Martijn van de Ree
      </a>
    </Link>
  </CursorBox>

export default Logo