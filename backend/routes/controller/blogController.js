import { Blog } from "../../models/blogModel.js";

// create API Data
const createBlog = async (req, res) => {
  const { id } = req.payload;
  try {
    const blog = new Blog({
      userId: id,
      title: req.body.title,
      image: req.body.image,
      imageDescription: req.body.imageDescription,
      summary: req.body.summary,
      content: req.body.content,
      categories: req.body.categories,
    });
    const createdBlog = await Blog.create(blog);
    res.status(201).send({ message: "Blog created Successfully", data: createdBlog });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// update API Data
const updateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(404).send({ message: "Blog not found" });
      return;
    }

    blog.title = req.body.title || blog.title;
    blog.image = req.body.image || blog.image;
    blog.imageDescription = req.body.imageDescription || blog.imageDescription;
    blog.summary = req.body.summary || blog.summary;
    blog.content = req.body.content || blog.content;
    blog.categories = req.body.categories || blog.categories;

    const updatedBlog = await blog.save();
    res.status(200).send({ message: "Blog updated Successfully", data: updatedBlog });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete API Data
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404).send({ message: "Blog not found" });
      return;
    }
    res.status(200).send({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get complete blog list
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json({
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get single blog by id
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
