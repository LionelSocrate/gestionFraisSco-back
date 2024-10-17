const router = require("express").Router();
const paiementController = require("../controllers/paiement.controller");

router.post("/addpaiement", paiementController.addPaiement);
router.get("/paiementInfo/:id", paiementController.paiementInfo);
router.get("/getAllpaiements", paiementController.getAllPaiements);
router.put("/updatepaiement/:id", paiementController.updatePaiement);
router.delete("/deletepaiement/:id", paiementController.deletePaiement);

module.exports = router;
