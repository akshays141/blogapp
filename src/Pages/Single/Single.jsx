
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./Single.css";

export default function Single() {

  const {id} = useParams();
  
  return (
    <div className="single">
      <SinglePost id={id} />
      <Sidebar />
    </div>
  );
}