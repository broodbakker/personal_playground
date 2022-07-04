import { useState } from 'react'
import { useLunr } from 'react-lunr'
import lunr from "lunr";
//data
//function
import { createStore, joinArray } from "../../util/functions"

import data from "../../content/searchData.json"

const index = lunr(function () {
  this.field('title', {
    boost: 10
  })
  this.field('subject', {
    boost: 5
  })
  this.field('tags', {
    boost: 5
  })
  this.field('content', {
    boost: 1
  })
  data.forEach(({ data: { title, tags,subject }, content, }) => {
    this.add({
      content,
      title,
      subject,
      id: title,
      tags:joinArray(tags)
    })
  })
});

export const useSearch = () => {
  const [query, setQuery] = useState("")
  const results = useLunr(query, index, createStore(data))

  return { setQuery, results, query }
}