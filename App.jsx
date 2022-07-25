import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Modal from "./components/modal/Modal";
import "./App.css";
import { useState } from "react";
import AddPost from "./components/add-post/AddPost";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState("");
  //  fetch data
  const [articles, setArticles] = useFetchData(url);
  // delete post
  const handleDelete = (id) => {
    setArticles((prevArticles) => {
      return prevArticles.filter((article) => article.id !== id);
    });
  };
  // add post
  const handleUpload = (newPost) => {
    setArticles((prevArticles) => {
      return [newPost, ...prevArticles];
    });
    setOpenModal(false);
  };

  const handleModal = (e) => {
    if (e.target.className !== "modal-wrapper") return;
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && (
        <Modal toggleModal={handleModal}>
          <AddPost uploadPost={handleUpload} />
        </Modal>
      )}

      <Header />
      <button onClick={() => setUrl("https://dev.to/api/articles/latest")}>
        Fetch Data
      </button>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Feed posts={articles} delPost={handleDelete} />
    </>
  );
}
