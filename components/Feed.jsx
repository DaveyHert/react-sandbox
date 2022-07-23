import { useState, useEffect } from "react";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dev.to/api/articles/latest");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, [articles]);

  return (
    <div className='feed'>
      {articles.map((article) => (
        <Post post={article} key={article.id} />
      ))}
    </div>
  );
}

export default Feed;
