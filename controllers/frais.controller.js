const fraisModel = require("../models/frais.model");

module.exports.fraisInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const frais = await fraisModel.findById(id);
    if (!frais) {
      return res.status(404).json({ message: "frais not found" });
    } else {
      return res.status(200).json({ frais });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

module.exports.getAllFrais = async (req, res) => {
  try {
    const frais = await fraisModel.find();
    return res.status(200).json({ frais });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

//add frais
module.exports.addFrais = async (req, res) => {
  try {
    const frais = await fraisModel.create({
      nomFrais: req.body.nomFrais,
      montant: req.body.montant,
      niveau: req.body.niveau,
      dateEcheance: req.body.dateEcheance,
      description: req.body.description,
    });
    return res.status(200).json({ frais });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

//update frais
module.exports.updateFrais = async (req, res) => {
  try {
    const { id } = req.params;

    const frais = await fraisModel.findByIdAndUpdate(id, req.body);
    if (!frais) {
      return res.status(404).json({ message: "frais not found" });
    }
    const updatefrais = await fraisModel.findById(id);
    res.status(200).json(updatefrais);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete frais
module.exports.deleteFrais = async (req, res) => {
  try {
    const { id } = req.params;
    const frais = await fraisModel.findByIdAndDelete(id);
    if (!frais) {
      return res.status(404).json({ message: "frais not found" });
    } else {
      return res.status(200).json({ message: "delete succefully!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};
