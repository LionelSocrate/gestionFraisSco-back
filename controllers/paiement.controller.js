const paiementModel = require("../models/paiement.model");

module.exports.paiementInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const paiement = await paiementModel.findById(id);
    if (!paiement) {
      return res.status(404).json({ message: "paiement not found" });
    } else {
      return res.status(200).json({ paiement });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

module.exports.getAllPaiements = async (req, res) => {
  try {
    const paiements = await paiementModel.find();
    return res.status(200).json({ paiements });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

//add paiement
module.exports.addPaiement = async (req, res) => {
  try {
    const paiement = await paiementModel.create({
      numMatr: req.body.numMatr,
      frais: req.body.frais,
      mode: req.body.mode,
      montant: req.body.montant,
    });
    return res.status(200).json({ paiement });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

//update paiement
module.exports.updatePaiement = async (req, res) => {
  try {
    const { id } = req.params;

    const paiement = await paiementModel.findByIdAndUpdate(id, req.body);
    if (!paiement) {
      return res.status(404).json({ message: "paiement not found" });
    }
    const updatepaiement = await paiementModel.findById(id);
    res.status(200).json(updatepaiement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete paiement
module.exports.deletePaiement = async (req, res) => {
  try {
    const { id } = req.params;
    const paiement = await paiementModel.findByIdAndDelete(id);
    if (!paiement) {
      return res.status(404).json({ message: "paiement not found" });
    } else {
      return res.status(200).json({ message: "delete succefully!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};
