import styled, { css } from "styled-components"
import { Box } from "grommet"
import { normalizeColor } from "grommet/utils";

export const CursorBox = styled(Box)`
  cursor:pointer;
`
export const SelectedText = styled.div`
  ${props => css`
    & ::selection {
      background: ${normalizeColor("secondary", props.theme)};
      color: white;
    }
  `}
  `

export const Link = styled.a`
  cursor:pointer;
  align-self:center;
  ${props => css`
      &:hover {
      background-color:${normalizeColor("secondary", props.theme)};
      color:white;
    }
  `}
`

export const LinkUnderline1 = styled.a`
  font-weight:600;
  padding-top:0.25rem;
  ${props => css`
      border-bottom: 2px solid ${normalizeColor("secondary", props.theme)};
      color: ${normalizeColor("primary", props.theme)};
      &:hover {
        background-color:${normalizeColor("secondary", props.theme)};
        color:white;
    }
  `}
`

export const LinkUnderline = styled(Link)`
  font-weight:600;
  padding-top:0.25rem;
  ${props => css`
      border-bottom: 2px solid ${normalizeColor("secondary", props.theme)};
      color: ${normalizeColor("primary", props.theme)};
  `}
`

export const MaxWidth = styled(Box)`
  max-width:850px;
`
export const Hover = css`
  padding:0.5rem;
  border-radius:0.25rem;
  ${props => css`
  &:hover {
      background-color:${normalizeColor("primary1", props.theme)};
    }
  `}
`