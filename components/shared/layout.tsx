import { FunctionComponent } from "React"

import { Navbar } from "../navbar"

type LayoutProps = {
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    < >
      <Navbar />
      {children}
    </ >
  )
}



