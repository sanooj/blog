import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    university: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: false },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export const Education = mongoose.model("education", educationSchema);
