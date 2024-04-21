import { blogTypeprops } from "../types/types";




const Blog = (props: blogTypeprops) => {
  const { id, title, desc } = props.blog;
  return (
    <>
      <article>
        <h3>{title}</h3>
        <h3>{desc}</h3>
        <button
          onClick={() => {
            props.handleDeleteBlog(id);
          }}
        >
          Delete
        </button>  
      </article>
    </>
  );
};

export default Blog;
