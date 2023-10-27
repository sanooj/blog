import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export const Experience = mongoose.model("experience", experienceSchema);
