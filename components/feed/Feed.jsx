import Post from "../post/Post";
import "./Feed.css";
import styled from "styled-components";

function Feed({ posts, delPost }) {
  return (
    <FeedWrapper>
      {posts.map((article) => (
        <Post
          post={article}
          key={article.id}
          deletePost={(id) => delPost(id)}
        />
      ))}
    </FeedWrapper>
  );
}

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  margin: 10px auto;
`;

export default Feed;
