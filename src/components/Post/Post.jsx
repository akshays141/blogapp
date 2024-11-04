import { Link } from "react-router-dom";
import "./Post.css";
import data_posts from '../Assets/data_posts'

export default function Post({searchQuery}) {
  return (
    <>
    {data_posts.filter((post)=>post.category.toLowerCase().includes(searchQuery)).map((post,index)=>{
     
      return <div className="post" key={index}>
      <img
        className="postImg"
        src={post.image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${post.id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.date}</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
      
      
    })
    
    }
    </>
  );
  
}