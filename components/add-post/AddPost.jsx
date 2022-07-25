import React, { useState } from "react";
import "./AddPost.css";

function AddPost({ uploadPost }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      social_image: image,
      description,
      id: Math.random * 1000234,
    };
    uploadPost(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>
        <span>Title:</span>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor='image'>
        <span>Thumbnail:</span>
        <input
          type='text'
          id='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor='description'>
        <span>Description</span>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type='submit'>Add Post</button>
    </form>
  );
}

export default AddPost;
