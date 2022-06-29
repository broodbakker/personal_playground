import React from 'react'
//styles
import styled from "styled-components"
import { Box, Text, Heading, Image } from "grommet"
import { Tag } from "../../shared/link"
//typescript
import { IPostData } from "../../../util/typescript"

const BoxCard = styled(Box)`
  gap:0.5rem;
`
const BoxImage = styled(Box)`
  aspect-ratio: 3 / 2;
  border-radius:0.25rem;
`

const TextItalic = styled(Text)`
 font-style: italic;
`

interface IHeader {
  data: any
}

const Header = ({ data }: IHeader) => {
  console.log(data)
  console.log(data.tags)
  return (
    <>
      <Box margin={{ bottom: "small" }} >
        <Text textAlign='center'>{`Geschreven door ${data.author} op `}
          <TextItalic weight="lighter"> {data.date}</TextItalic>
        </Text>
      </Box>

      <Box align="center">
        <BoxImage width={{ max: "medium" }} >
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
        </BoxImage>
      </Box>

      <Box margin={{ vertical: "medium" }} >
        <Heading level="1" size="small" textAlign='center'>{data.title}</Heading>
      </Box>

      <Box margin={{ bottom: "small" }} >
        <BoxCard direction="row" justify="center" margin={{ vertical: "small" }} fill="horizontal">
          {data.tags.map((tag, index) => <Tag key={index} >{tag}</Tag>)}
        </BoxCard>
      </Box>
    </ >
  )
}

export default Header