import { useState } from "react";

export default function useFetchData(url) {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>useFetchData</div>;
}
