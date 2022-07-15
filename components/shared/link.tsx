import Link from "next/link"
import { LinkUnderline as Link1, Link as Link2, CursorBox } from "./styledComponents"
import styled, { css } from 'styled-components';
import { normalizeColor } from "grommet/utils";
import { Text } from "grommet"

type LinkComponentProps = {
  children: JSX.Element;
  href: string
}

const LinkComponent = ({ children, href }: LinkComponentProps) =>
  <Link href={href}>
    <a>
      {children}
    </a>
  </Link>

type AProps = {
  children: string | JSX.Element;
  href: string
  test?: boolean
}

export const LinkUnderline = ({ children, href }: AProps) =>
  <Link href={href}>
    <Link1>
      {children}
    </Link1>
  </Link>

export const BasicLink = ({ children, href, test }: AProps) => {
  const L = test ? Link2 : Link1
  return (
    <Link href={href}>
      <L>
        {children}
      </L>
    </Link>
  )
}

const Box1 = styled(CursorBox)`
  border-radius:0.5rem;
  ${props => css`
      &:hover {
      border:1px solid ${normalizeColor("primary1", props.theme)};
      color:white;

      & > span {
    color: ${normalizeColor("primary1", props.theme)};
  }
    }
  `}
`

export const ButtonLink = ({ children, href }: AProps) =>
  <a href={href}>  <Box1 background="white" color="secondary" border={{ color: 'lightBorderColor', size: 'xsmall' }}
    pad={{ horizontal: "small", vertical: "xxsmall" }}>
    <Text color="fontColor1" weight={900}>{children}</Text>
  </Box1></a>


type TagProps = {
  children: string | JSX.Element;
  test?: boolean
}
export const Tag = ({ children }: TagProps) =>
  <Box1 background="white" color="secondary"
    border={{ color: 'lightBorderColor', size: 'xsmall' }}
    pad={{ horizontal: "small", vertical: "xxsmall" }}>
    <Text color="fontColor1" weight={900}>{children}</Text>
  </Box1>

export default LinkComponent