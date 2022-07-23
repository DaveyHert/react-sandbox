import Header from "./components/Header";
import Feed from "./components/Feed";
import "./App.css";

export default function App() {
  const title = "React App";
  return (
    <>
      <Header title={title} />
      <Feed />
    </>
  );
}
