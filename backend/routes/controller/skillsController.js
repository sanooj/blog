import { Skills } from "../../models/skillsModel.js";

// Get skills API
const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find({ isAdmin: true });
    if (!skills.length) {
      return res.status(404).send({ message: "Skills not found" });
    }
    return res.status(200).send({ message: "Skills fetched Successfully", data: skills });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Create and update skills API
const createSkills = async (req, res) => {
  const { id, isAdmin } = req.payload;

  try {
    req.body.userId = id;
    req.body.isAdmin = isAdmin;
    const skills = await Skills.create(req.body);
    return res.status(200).send({ message: "Skills created successfully", data: skills });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const updateSkills = async (req, res) => {
  const { id } = req.params;

  try {
    const skills = await Skills.findById(id);
    if (!skills) {
      res.status(404).send({ message: "Skills not found" });
      return;
    }

    skills.skill = req.body.skill || skills.title;
    skills.percentage = req.body.percentage || skills.percentage;

    const updatedSkills = await skills.save();
    return res.status(200).send({ message: "Skills updated successfully", data: updatedSkills });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Delete skills API
const deleteSkills = async (req, res) => {
  const { id } = req.payload;
  try {
    await Skills.deleteOne({ userId: id });
    return res.status(200).send({ message: "Skills deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export { getSkills, createSkills, updateSkills, deleteSkills };
