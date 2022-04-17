import React from 'react'
import { Box, ResponsiveContext, Image } from "grommet"

import { Article } from "grommet-icons"

const Header = () => {
  const size = React.useContext(ResponsiveContext);

  const pad = size === "large" ? "none" : "medium"
  return (
    <Box justify="center" direction="row" pad={{ vertical: "medium" }}>

      <Box direction={size === "small" ? "column" : "row"} width={{ max: "large" }}
        pad={{ horizontal: pad, vertical: "medium" }}
      >
        <Box width={{ min: "small", max: "small" }} height="small" margin={{ right: "medium" }}>
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
        </Box>

        <Box>
          <Box margin={{ bottom: "medium" }}>
            <h1>Hey, I'm Tania.</h1>
          </Box>

          <Box margin={{ bottom: "medium" }}>
            <p>I'm a software engineer in Chicago. I love building open-source projects and writing about what I learn. This website is my digital garden—a compendium of the things I've learned and created over the years.</p>
          </Box>



          <Box direction="row">
            <Box direction="row"  margin={{right:"small"}}>
              <Article/>
              <Box margin={{left:"xsmall"}}>more about me</Box>
            </Box>

            <Box direction="row">
              <Article />
              <Box margin={{left:"xsmall"}}>GitHub</Box>
            </Box>

          </Box>

        </Box >
      </Box>
    </Box >
  )
}

export default Header