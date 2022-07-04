import React from 'react'
import ReactMarkdown from "react-markdown"
//constant
import { GLOBALSTYLE } from '../../../util/constants'
//styles
import styled, { css } from "styled-components"
import { Box } from "grommet"
import { normalizeColor } from "grommet/utils";
//typescript
import { IPost } from "../../../util/typescript"

const Container = styled(Box)`
  padding-right:0.5rem;
  padding-left:0.5rem;
  @media ${GLOBALSTYLE.breakpoint.mintablet}  {
    padding-right:0px;
    padding-left:0px;
  }
`

const Block = styled.blockquote`
 ${props => css`
    border-left:${normalizeColor("primary", props.theme)} 5px solid;
 `}
 border-radius:0 0.5rem 0.5rem 0;
  border-right:green 1px solid;
  border-top:green 1px solid;
  border-bottom:green 1px solid;
  padding:1rem;
`

const StylingPost = styled.div`
    * > p {
      margin-bottom:1rem;
    }

    & > p {
      margin-bottom:1rem;
    }

    & > em {
      font-style: italic;
      font-weight:500;
    }

    * > em {
      font-style: italic;
      font-weight:500;
    }
    * > a {
        cursor:pointer;
        color: green;
        align-self:center;
        ${props => css`
          border-bottom: 2px solid ${normalizeColor("primary", props.theme)};
          &:hover {
            background-color:${normalizeColor("primary", props.theme)};
            color:white;
          }
       `}
      }
    * > h6,h2,h3,h4,h1{
      color:yellow;
      border-bottom:1px red solid;
    }
    & > h1{
      color:yellow;
      border-bottom:1px red solid;
    }
    * > h3,h4{
      color:orange;
    }
    * > blockquote {
    ${props => css`
        border-left:${normalizeColor("primary", props.theme)} 5px solid;
        border-right:${normalizeColor("primary", props.theme)} 1px solid;
        border-top:${normalizeColor("primary", props.theme)} 1px solid;
        border-bottom:${normalizeColor("primary", props.theme)} 1px solid;
      `}
      border-radius:0 0.5rem 0.5rem 0;
      background:white;
      padding:1rem;
    }
`

interface IMain {
  file: IPost
}

const Main = ({ file }: IMain) => {
  return (
    <Box align="center" pad={{ vertical: "medium" }}>
      <Container width={{ max: "large" }}>

        <StylingPost>
          <ReactMarkdown>
            {file.content}
          </ReactMarkdown>
        </StylingPost>

      </Container>
    </Box >
  )
}

export default Main