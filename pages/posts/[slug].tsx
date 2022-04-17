//constant
import { POSTS_CONTENT_PATH } from "../../public/constants"
//function
import { importMdFiles } from "../../util/functions/posts"

export default function Post({ }) {
  return (
    <div>hello</div>
  )
}


// export async function getStaticPaths() {
//   const paths = importMdFiles(POSTS_CONTENT_PATH)

//   return {
//     paths,
//     fallback: false
//   };

// }


// export async function getStaticProps({ params }) {

//   return {
//     props: {
//       product: 4
//     },
//   }
// }
