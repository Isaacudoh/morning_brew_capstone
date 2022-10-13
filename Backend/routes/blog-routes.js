import express from "express";
import { getById, addBlog, editBlog, getAllBlogs } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/edit/:id", editBlog);
blogRouter.get("/:id", getById);

export default blogRouter;
