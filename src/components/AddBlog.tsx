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
};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setDesc(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBlog: Blog = { id: uuidv4().toString(), title, desc };
    props.handleAddNewBlog(newBlog);
    setTitle('');
    setDesc('');
  };



const AddBlog = () => {
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
            value={}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="text" name="" id="" />
        </div>
        <button>Add Blog</button>
      </form>
    </>
  );
}

export default AddBlog
