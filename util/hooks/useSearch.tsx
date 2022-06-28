import { useEffect, useState } from 'react'
import { useLunr } from 'react-lunr'
import lunr from "lunr";
//constants
//function
import data from "../../content/searchData.json"

const index = lunr(function () {
  this.field("title");
  this.field("body");
  this.field("subject");
  this.field("tags")
  this.field("content")
  this.field("id");
  data.forEach(({ data: { title }, content, }) => {
    this.add({
      content,
      title,
      id: title
    })
  })
});

const createStore = (posts) => posts.reduce((acc, post) => {
  console.log(post, "post")
  let { data: { title } } = post;
  return { ...acc, [title]: { title } };
}, {});



export const useSearch = () => {
  const [query, setQuery] = useState(null)
  const results = useLunr(query, index, createStore(data))


  // const posts = await getFilesAmount(POSTS_PATH, 6)


  return { setQuery, results, }
}