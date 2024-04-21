import { useState } from "react";
import AddBlogx from "./components/AddBlog";
import { blogType } from "./types/types";
import Blogs from "./components/Blogs";



const blogsData = [
  {
    id: '1',
    title: 'Blog title 1',
    desc: 'this is description one part',
  },
  {
    id: '2',
    title: 'Blog title 2',
    desc: 'this is description part two',
  },
];



function App() {
  const [blogs, setBlogs] = useState(blogsData);

  const handleDeleteBlog = (id: string) => {
    const filterTodos = blogs.filter(blog => blog.id !== id);
    setBlogs(filterTodos);
  };

  const handleAddNewTodo = (newTodo: blogType) => {
    console.log(newTodo);
    setBlogs(prevState => [...prevState, newTodo]);
  };

  return (
    <>
      <AddBlogx handleAddNewBlog={handleAddNewTodo} />
      <Blogs blogs={blogs}
        handleDeleteBlog={handleDeleteBlog} />
    </>
  );
}

export default App;
