import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true },
    image: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    stackoverflow: { type: String, required: false },
    dateOfBirth: { type: String, required: true },
    currentCity: { type: String, required: true },
    phone: { type: String, required: true },
    skype: { type: String, required: false },
    cv: { type: String, required: true },
    about: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Profile = mongoose.model("Profile", profileSchema);
