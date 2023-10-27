import { Education } from "../../models/educationModel.js";

const getEducations = async (req, res) => {
  try {
    const education = await Education.find({ isAdmin: true });

    if (!education.length) {
      return res.status(404).send({ message: "Education not found" });
    }
    res.status(200).send({ message: "Education fetched Successfully", data: education });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Create and update education API
const createEducation = async (req, res) => {
  const { id, isAdmin } = req.payload;

  try {
    const educationData = {
      userId: id,
      isAdmin: isAdmin,
      ...req.body,
    };
    const createdEducation = await Education.create(educationData);
    return res
      .status(200)
      .send({ message: "Education created successfully", data: createdEducation });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const updateEducation = async (req, res) => {
  const { id } = req.params;

  try {
    const education = await Education.findById(id);
    if (!education) {
      return res.status(404).send({ message: "Education not found" });
    }

    education.university = req.body.university || education.university;
    education.degree = req.body.degree || education.degree;
    education.fieldOfStudy = req.body.fieldOfStudy || education.fieldOfStudy;
    education.startDate = req.body.startDate || education.startDate;
    education.endDate = req.body.endDate || education.endDate;
    education.description = req.body.description || education.description;

    const updatedEducation = await education.save();
    return res
      .status(200)
      .send({ message: "Education updated successfully", data: updatedEducation });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Delete education API
const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const education = await Education.findByIdAndDelete(id);
    if (!education) {
      res.status(404).send({ message: "Education not found" });
      return;
    }
    res.status(200).send({ message: "Education deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getEducations, createEducation, updateEducation, deleteEducation };
