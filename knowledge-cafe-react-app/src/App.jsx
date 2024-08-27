import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmarks] = useState([])

  const handleAddToBookmark = (blog) =>{
    console.log(`Add book mark`);
  }
  return (
    <div className="max-w-screen-xl	 mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
