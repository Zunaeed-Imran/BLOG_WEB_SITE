
import { blogTypeprops } from "../types/types";
import Blog from "./Blog";


const Blogs = (props: blogTypeprops) => {
  return (
    <>
      {props.blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          handleDeleteBlog={props.handleDeleteBlog}
        />
      ))}
    </>
  );
};

export default Blogs
