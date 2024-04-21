import { blogTypeprops } from "../types/types";




const Blog = (props: blogTypeprops) => {
  const { id, title, desc } = props.blog;
  return (
    <>
      <article className="bg-indigo-200 text-center p-4 hover:bg-slate-300">
        <h3 className="text-xl p-1">{title}</h3>
        <h3 className="p-2">{desc}</h3>
        <button
          onClick={() => {
            props.handleDeleteBlog(id);
          }}
        className="bg-red-500 p-1 rounded hover:bg-red-600">
          Delete
        </button>
      </article>
    </>
  );
};

export default Blog;
