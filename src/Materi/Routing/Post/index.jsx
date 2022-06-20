import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

const Post = () => {
  const history = useHistory();

  const { id } = useParams()
  return (
    <div className="main">
      <h4> Post ke-{id} </h4>
      <p> deskripsi </p>
      <button onClick={() => history.push('/')}>kembali</button>
    </div>
  )
}

export default Post;