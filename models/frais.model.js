const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fraisSchema = new Schema({
  nomFrais: {
    type: String,
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  dateEcheance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.frais || mongoose.model("frais", fraisSchema);
