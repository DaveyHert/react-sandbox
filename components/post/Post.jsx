import "./Post.css";

function Post({ post, deletePost }) {
  return (
    <article>
      <img src={post.social_image} alt='' />
      <h3 className='title'>{post.title}</h3>
      <p className='info'>{post.description}</p>
      <a href={post.url}>Read</a>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </article>
  );
}

export default Post;
