import { response } from "express";
import Blog from "../models/Blog";

// Getting all blog posts
export const getAllBlogs = async (req, res) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ Message: "No Blog found" });
  }
  return res.status(200).json({ blogs });
};

// Adding a blog
export const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await user.findById({ user });
  } catch (error) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unablle to find user by this ID" });
  }
  const blog = new Blog({ title, description, image, user });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ blog });
};

// Editing a blog
export const editBlog = async (req, res) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title: title,
      description: description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to update blog" });
  }
  return res.status(200).json({ blog });
};

// Getting a blog by its id
export const getById = async (req, res) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ blog });
};

// Delete a blog by its ID.
export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "Unable to delete blog" });
  }
  return res.status(200).json({ message: "successfully deleted" });
};

export const getByUserId = async (req, res) => {
  const userId = req.params.Id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (error) {
    return console.log(error);
  }
  if(!userBlogs) {
    return res.status(404).json({message: "No blog found"});
  }
  return res.status(200).json({blogs: userBlogs});
};
