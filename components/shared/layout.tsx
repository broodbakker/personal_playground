import styled, { css } from "styled-components"
import { Box } from "grommet"
import Navbar from "../navbar"
import Footer from "../footer"
//styled components
import { SelectedText } from "../shared/styledComponents"
//constants
import { BACKGROUND_IMAGE } from "../../util/constants"
import { normalizeColor } from "grommet/utils";

const Container = styled(Box)`
  position:relative;
`
const RelativeBox = styled(Box)`
  position:relative;
`

const AbsoluteBox = styled(Box)`
  //image
  content: "";
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  //circle
  &:after {
    content: "";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    clip-path: circle(56.5% at 10% 49%);
    opacity:0.15;
    ${props => css`
      background: ${normalizeColor("primary2", props.theme)};
  `}
  }
  //transparant
  &:before {
    content: "";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: white;
    opacity:0.95;
  }
`

const NavbarContainer = styled.div`
  position: sticky;
  width:100%;
  top:0;
  z-index:1;
`

const FooterContainer = styled.div`
  width:100%;
  bottom:0;
  z-index:1;
`

//'https://res.cloudinary.com/dta9vptzh/image/upload/v1655718212/lauren/lauren2.jpg
export const Layout = ({ children }) => {
  return (
    <SelectedText>
      <RelativeBox>
        <AbsoluteBox background={`url(https://res.cloudinary.com/dta9vptzh/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1656493445/martijn_playground/image4.svg)`} />
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <Container>
          {children}
        </Container>

        <FooterContainer>
          <Footer />
        </FooterContainer>

      </RelativeBox>
    </SelectedText>
  )
}



