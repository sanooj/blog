import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    imageDescription: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    categories: { type: [String], required: true },
  },
  {
    timestamps: true,
  },
);

export const Blog = mongoose.model("Blog", blogSchema);
