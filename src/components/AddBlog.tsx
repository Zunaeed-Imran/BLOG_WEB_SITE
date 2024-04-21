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
      <h2>Add Blogs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="description"
            value={desc}
            onChange={handleChange} />
        </div>
        <button>Add Blog</button>
      </form>
    </>
  );
}

export default AddBlogx;
