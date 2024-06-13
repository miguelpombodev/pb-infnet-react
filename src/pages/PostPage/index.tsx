import { useParams } from "react-router-dom"

function PostPage () {
  const params = useParams();

  return <h1>Post Page - {params.id}</h1>
}

export default PostPage