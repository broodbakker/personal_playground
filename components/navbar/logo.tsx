import React from 'react'
import Link from "next/link"
import styled from "styled-components"
//styled
import { CursorBox } from "../shared/styledComponents"
//constants
import { ROUTES } from "../../util/constants"
import { Hover } from '../shared/styledComponents';
import { Text } from "grommet"

const Container = styled(CursorBox)`
 ${Hover}
`

const Logo = () =>
  <Container >
    <Link href={ROUTES.home.route}>
      <a>
        <Text color="fontColor" weight={900} size='small'>
          Martijn van de Ree
        </Text>
      </a>
    </Link>
  </Container>

export default Logo