
import Navbar from "../navbar"
//styled components
import { SelectedText } from "../shared/styledComponents"

type LayoutProps = {
  children?: JSX.Element;
}

export const Layout = ({ children }) => {
  return (
    <SelectedText>
      <Navbar />
      {children}
    </SelectedText>
  )
}



