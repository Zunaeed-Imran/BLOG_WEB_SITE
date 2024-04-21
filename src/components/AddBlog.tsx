import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type Blog = {
  id: string;
  title: string;
  desc: string;
};

type Props = {
  handleAddNewBlog: (newBlog: Blog) => void;
};

const AddBlogx = (props: Props) => {


  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setDesc(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBlog: Blog = { id: uuidv4().toString(), title, desc};
    props.handleAddNewBlog(newBlog);
    setTitle('');
    setDesc('');
  };


  return (
    <>
      <div className="bg-indigo-400 p-10 text-center">
        <h2 className="font-bold text-xl">Add Blogs</h2>
        <form onSubmit={handleSubmit} className="p-1 bg-violet-400 rounded-md">
          <div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="desc"
              id="desc"
              placeholder="Description"
              value={desc}
              onChange={handleChange}
            />
          </div>
          <button className="bg-amber-400 rounded p-1">Add Blog</button>
        </form>
      </div>
    </>
  );
}

export default AddBlogx;
