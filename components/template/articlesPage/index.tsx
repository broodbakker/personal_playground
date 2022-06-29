import { useEffect } from "react"
import Header from "./header"
//components
import BasicTable, { LatestSearchTable } from "../../basicTable/basicTable"
//style
import { MaxWidth } from '../../shared/styledComponents'
import styled from "styled-components"
import { Box, Heading } from "grommet"
//hooks
import { useSearch } from "../../../util/hooks/useSearch"

const Container = styled(MaxWidth)`
  padding-right:0.5rem;
  padding-left:0.5rem;
`

const ArticlesPage = ({ posts }) => {
  const { setQuery, results, query } = useSearch()

  const handleChange = (e) => setQuery(e.target.value)

  useEffect(() => {
  }, [results])

  return (
    <Container alignSelf="center" height={{ min: "100vh" }} >
      <Box margin={{ vertical: "xlarge" }}>
        <Header handleSearch={handleChange} value={query} />
      </Box>
      <Box margin={{ bottom: "medium" }}>
        {results.length === 0 && query === "" && <BasicTable title="Laatste artikelen" posts={posts} path="./artikelen" />
        }
        {results.length > 0 &&
          <LatestSearchTable title="Laatste artikelen" posts={results} path="./artikelen" />
        }
        {results.length == 0 && query !== "" &&
          <Box margin={{ bottom: "medium" }} >
            <Heading color="fontColor1" level="2" size="xsmall">Helaas, geen zoekresultaten gevonden</Heading>
          </Box>
        }
      </Box>
    </Container >
  )
}



export default ArticlesPage