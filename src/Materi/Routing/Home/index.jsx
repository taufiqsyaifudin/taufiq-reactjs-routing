import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="main">
      <h2>Home Page</h2>
      <ul>
        <li><Link to="post/1">satu</Link></li>
        <li><Link to="post/2">dua</Link></li>
        <li><Link to="post/3">tiga</Link></li>
      </ul>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium. Nostrum eligendi quae molestiae at necessitatibus reprehenderit ut ea, consequatur quam magnam nam doloremque fugit magni suscipit beatae voluptatibus fugiat.</p>
    </div>
  )
}

export default Home;