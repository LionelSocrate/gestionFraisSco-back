const studentModel = require("../models/student.model");

module.exports.studentInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findById(id);
    if (!student) {
      return res.status(404).json({ message: "student not found" });
    } else {
      return res.status(200).json({ student });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

module.exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.status(200).json({ students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

//add student
module.exports.addStudent = async (req, res) => {
  try {
    const student = await studentModel.create({
      numMatr: req.body.numMatr,
      nom: req.body.nom,
      prenoms: req.body.prenoms,
      niveau: req.body.niveau,
      email: req.body.email,
    });
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

//update student
module.exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findByIdAndUpdate(id, req.body);
    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }
    const updateStudent = await studentModel.findById(id);
    res.status(200).json(updateStudent);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

//delete student
module.exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "student not found" });
    } else {
      return res.status(200).json({ message: "delete succefully!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};
