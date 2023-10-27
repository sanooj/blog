import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    skill: { type: String, required: true },
    percentage: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export const Skills = mongoose.model("Skill", skillsSchema);
