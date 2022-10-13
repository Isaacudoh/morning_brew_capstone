import express from "express";
import {
  getById,
  addBlog,
  editBlog,
  getAllBlogs,
  deleteBlog,
} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/edit/:id", editBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
