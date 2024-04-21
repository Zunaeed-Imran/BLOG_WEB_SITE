


export type blogType = {
  id: string;
  title: string;
  desc: string;
};

export type blogTypeprops = {
  blog: blogType;
  handleDeleteBlog: Function;
};

export type blogsTypeprops = {
  blogs: blogType[];
  handleDeleteBlog: Function;
};
