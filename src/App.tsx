import { useState } from "react"
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";

const blogData = 
  {
  title: "1st blog",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum veritatis perspiciatis consectetur porro voluptatibus"
  }



function App() {

  const [blogs, setBlog] = useState(blogData);

  const handleDeleteBlog = (id: string) => {
    const filterBlog = blogs.filter(blog => blog.id !== id);
    setBlog(filterBlog);
  };

  const handleAddNewBlog = (newBlog: blogType) => {
    setBlog((prevState) => [...prevState, newBlog]);
  };

  return (
    <>
      <AddBlog />
      
      <Blogs/>
    </>
  )
}

export default App
