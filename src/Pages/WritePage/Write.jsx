import { useState } from "react";
import "./Write.css";
import { generateUniqueId, savePost } from "../../components/postService";

export default function Write() {

  const [newPost, setNewPost] = useState({
    id:"",
    title:"",
    category:"",
    image:"",
    author:"",
    date: new Date().toLocaleString(),
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost((prevPost) => ({
        ...prevPost,
        image: URL.createObjectURL(file), // Preview the image
      }));
    }
  };

const handleSubmit = (e)=>{
e.preventDefault();

 // Generate a unique ID for the new post
 const uniqueId = generateUniqueId();

 // Set the ID in the newPost object
 const completePost = { ...newPost, id: uniqueId };

 // Save the post using the service function
 savePost(completePost);

 //Reset the form after submission

 setNewPost({
  id: "",
  title: "",
  category: "",
  image: "",
  author: "",
  date: new Date().toLocaleString(),
});

};

  return (
    <div className="write">
      <img
        className="writeImg"
        src= {`${newPost.image}` || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
          id="fileInput" 
          type="file" 
          name="image" 
          onChange={handleFileChange}
          style={{ display: "none" }} />
          <input
            className="writeInput" 
            name="title" 
            value={newPost.title} 
            onChange={handleChange}
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput writeText"
            placeholder="Mention Category..."
            type="text" 
            name="category" 
            value={newPost.category}
            onChange={handleChange}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}