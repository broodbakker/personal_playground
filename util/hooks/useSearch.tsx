import { useState } from 'react'
import { useLunr } from 'react-lunr'
import lunr from "lunr";
//data
//function
import { createStore } from "../../util/functions"
import data from "../../content/searchData.json"

const index = lunr(function () {
  this.field('title', {
    boost: 50
  })
  this.field('subject', {
    boost: 50
  })
  this.field("content");
  data.forEach(({ data: { title }, content, }) => {
    this.add({
      content,
      title,
      id: title
    })
  })
});


export const useSearch = () => {
  const [query, setQuery] = useState("")
  const results = useLunr(query, index, createStore(data))

  return { setQuery, results, query }
}