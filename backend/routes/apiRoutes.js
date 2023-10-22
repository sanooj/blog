import express from "express";
import { signup, signin, verifyToken, refreshToken, getUser } from "./controller/userController.js";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getBlogById,
} from "./controller/blogController.js";

const router = express.Router();

/**
 * Post API requests
 */

// signup API
router.post("/signup", signup);

// signin API
router.post("/signin", signin);

// create API Data
router.post("/create-blogs", verifyToken, createBlog);

// update API Data
router.put("/blogs/:id", verifyToken, updateBlog);

// delete API Data
router.delete("/blogs/:id", verifyToken, deleteBlog);

/**
 * get API Data
 */

// refresh Token and get user API
router.post("/refresh-token", refreshToken, verifyToken, getUser);

// get complete blog list
router.get("/user", verifyToken, getUser);

// get complete blog list
router.get("/blogs", verifyToken, getBlogs);

// get single blog by id
router.get("/blogs/:id", verifyToken, getBlogById);

export const apiRoutes = router;
