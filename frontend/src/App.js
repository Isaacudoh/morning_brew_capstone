import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import { Route, Routes} from "react-router-dom";
import Auth from "./components/Auth";
import React from "react";


function App() {
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
