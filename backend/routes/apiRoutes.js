import express from "express";
import {
  signup,
  signin,
  verifyToken,
  refreshToken,
  getUser,
  signOut,
} from "./controller/userController.js";

import {
  createProfile,
  updateProfile,
  deleteProfile,
  getProfile,
} from "./controller/profileController.js";

import {
  getEducations,
  deleteEducation,
  createEducation,
  updateEducation,
} from "./controller/educationController.js";

import {
  getExperiences,
  deleteExperience,
  createExperience,
  updateExperience,
} from "./controller/experienceController.js";

import {
  getSkills,
  deleteSkills,
  createSkills,
  updateSkills,
} from "./controller/skillsController.js";
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

// signin API
router.post("/signout", signOut);

// Create profile API
router.post("/create-profile", verifyToken, createProfile);

// Update profile API
router.put("/update-profile/:id", verifyToken, updateProfile);

// Delete profile API
router.delete("/delete-profile/:id", verifyToken, deleteProfile);

// create API Data
router.post("/create-blog", verifyToken, createBlog);

// update API Data
router.put("/update-blog/:id", verifyToken, updateBlog);

// delete API Data
router.delete("/delete-blog/:id", verifyToken, deleteBlog);

// create education API
router.post("/create-education", verifyToken, createEducation);

// update education API
router.put("/update-education/:id", verifyToken, updateEducation);

// delete education API
router.delete("/delete-education/:id", verifyToken, deleteEducation);

// create experience API
router.post("/create-experience", verifyToken, createExperience);

// update experience API
router.put("/update-experience/:id", verifyToken, updateExperience);

// delete experience API
router.delete("/delete-experience/:id", verifyToken, deleteExperience);

// create skills API
router.post("/create-skill", verifyToken, createSkills);

// update skills API
router.put("/update-skill/:id", verifyToken, updateSkills);

// delete skills API
router.delete("/delete-skill/:id", verifyToken, deleteSkills);

/**
 * get API Data
 */

// refresh Token and get user API
router.post("/refresh-token", refreshToken, verifyToken, getUser);

// get complete blog list
router.get("/user", verifyToken, getUser);

// get complete blog list
router.get("/blogs", getBlogs);

// get single blog by id
router.get("/blogs/:id", getBlogById);

// get Profile
router.get("/profile", getProfile);

// get Education
router.get("/education", getEducations);

// get Experience
router.get("/experience", getExperiences);

// get all skills
router.get("/skills", getSkills);

export const apiRoutes = router;
