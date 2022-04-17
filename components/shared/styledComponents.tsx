import styled,{css} from "styled-components"
import { Box } from "grommet"
import { normalizeColor } from "grommet/utils";

export const CursorBox = styled(Box)`
  cursor:pointer;
`

export const SelectedText = styled.div`
  ${props => css`
  & ::selection {
    background: ${normalizeColor("primary", props.theme)};
    color:white;
  }
  `}
  `