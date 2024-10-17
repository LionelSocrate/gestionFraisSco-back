const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paiementSchema = new Schema({
  numMatr: {
    type: String,
    required: true,
  },
  frais: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports =
  mongoose.models.paiements || mongoose.model("paiements", paiementSchema);
