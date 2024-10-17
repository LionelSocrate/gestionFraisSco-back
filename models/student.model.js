const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  numMatr: {
    type: String,
    unique: true,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenoms: {
    type: String,
    required: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
});

module.exports =
  mongoose.models.students || mongoose.model("students", studentSchema);
