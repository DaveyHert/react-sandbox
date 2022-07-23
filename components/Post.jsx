import "./Post.css";

function Post({ post }) {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <article>
      <img src={post.social_image} alt='' />
      <h3 className='title'>{post.title}</h3>
      <p className='info'>{post.description}</p>
      <a href={post.url}>Read</a>
      <button onClick={handleClick}>Click Me</button>
    </article>
  );
}

export default Post;
