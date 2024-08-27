import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const existingBookmark = bookmarks.find(
      (bookmark) => bookmark.id === blog.id
    );
    if (!existingBookmark) {
      setBookmarks([...bookmarks, blog]);
    }
  };
  return (
    <div className="max-w-screen-xl	 mx-auto">
      <Header></Header>
      <div className="md:flex mt-8">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
