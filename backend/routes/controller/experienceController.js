import { Experience } from "../../models/experienceModel.js";

// Get experiences API
const getExperiences = async (req, res) => {
  try {
    const experience = await Experience.find({ isAdmin: true });
    if (!experience.length) {
      res.status(404).send({ message: "Experience not found" });
      return;
    }
    res.status(200).send({ message: "Experience fetched Successfully", data: experience });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Create experience API
const createExperience = async (req, res) => {
  const { id, isAdmin } = req.payload;
  try {
    req.body.userId = id;
    req.body.isAdmin = isAdmin;
    const experience = await Experience.create(req.body);
    return res.status(200).send({ message: "Experience created successfully", data: experience });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Update experience API
const updateExperience = async (req, res) => {
  const { id } = req.params;

  const experience = await Experience.findById(id);
  try {
    if (!experience) {
      return res.status(404).send({ message: "Experience not found" });
    }

    experience.company = req.body.company || experience.company;
    experience.designation = req.body.designation || experience.designation;
    experience.location = req.body.location || experience.location;
    experience.startDate = req.body.startDate || experience.startDate;
    experience.endDate = req.body.endDate || experience.endDate;
    experience.description = req.body.description || experience.description;

    const updatedExperience = await experience.save();
    return res
      .status(200)
      .send({ message: "Experience updated successfully", data: updatedExperience });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Delete experience API
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      res.status(404).send({ message: "Experience not found" });
      return;
    }
    res.status(200).send({ message: "Experience deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getExperiences, createExperience, updateExperience, deleteExperience };
