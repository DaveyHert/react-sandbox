import { useState, useEffect, useCallback } from "react";

export default function useFetchData(url) {
  const [articles, setArticles] = useState([]);

  const fetchData = useCallback(async () => {
    if (!url) return;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setArticles(data);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [articles, setArticles];
}
