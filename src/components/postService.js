// postService.js

import data_posts from "./Assets/data_posts";


// Function to generate a unique ID
export const generateUniqueId = () => {
  let id;
  do {
    id = Math.random().toString(36).substring(2, 9);
  } while (data_posts.find((post) => post.id === id)); // Ensure the ID is unique
  return id;
};

// Function to save the new post
export const savePost = (post) => {
  data_posts.push(post); // Add the new post to the posts array
  console.log("New post saved:", post); // Log to the console for now
  // In a real application, you would save this to a database or localStorage
};

export const getPosts = () => {
  return data_posts; // Function to retrieve all posts
};
