import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({searchQuery}) {
  return (
    <div className="posts">
      <Post searchQuery={searchQuery}/>
    </div>
  );
}