import { useEffect, useState } from 'react'
import { useLunr } from 'react-lunr'
import lunr from "lunr";
//constants
import { PROJECTS_PATH, POSTS_PATH } from "../constants"
//function
import { getFilesForSearchIndex } from "../functions/files"

const index = lunr(function () {
  this.field("title");
  this.field("body");
  this.field("author");
  this.add({
    title: "harry potter",
    body: "order of the pheonix",
    author: "j k rowling",
    id: "1"
  }),
    this.add({
      title: "lord of the ringst",
      body: "about a ring frodo ",
      author: "j r r martin",
      id: "2"
    });
  this.add({
    title: "Twelfth-Night",
    body: "If music be the food of love, play on: Give me excess of it…",
    author: "William Shakespeare",
    id: "3"
  });
});

const store = {
  1: { title: 'Document 1', link: "/" },
  2: { title: 'Document 2', link: "/" },
  3: { title: 'Document 3', link: "/" },
}

export const useSearch = () => {
  const [query, setQuery] = useState(null)
  const results = useLunr(query, index, store)
  const [t, setT] = useState()

  console.log(getFilesForSearchIndex(PROJECTS_PATH))


  useEffect(() => {
    const fetchBookList = async () => {
      const t = await getFilesForSearchIndex(PROJECTS_PATH)

    }

  }, [])

  // const posts = await getFilesAmount(POSTS_PATH, 6)


  return { setQuery, results, t }
}