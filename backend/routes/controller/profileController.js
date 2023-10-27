import { Profile } from "../../models/profileModel.js";

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({});
    if (!profile) {
      res.status(404).send({ message: "Profile not found" });
      return;
    }
    res.status(200).send({ message: "Profile fetched Successfully", data: profile });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createProfile = async (req, res) => {
  const { id, isAdmin } = req.payload;

  const existingProfile = await Profile.find({ userId: id });

  if (existingProfile.length) {
    return res.status(400).send({ message: "Profile already exists" });
  }
  try {
    req.body.userId = id;
    req.body.isAdmin = isAdmin;
    const profile = await Profile.create(req.body);
    return res.status(200).send({ message: "Profile created Successfully", data: profile });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const updateProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }
    const updatedProfile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send({ message: "Profile updated Successfully", data: updatedProfile });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) {
      res.status(404).send({ message: "Profile not found" });
      return;
    }
    res.status(200).send({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getProfile, createProfile, updateProfile, deleteProfile };
