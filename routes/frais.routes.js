const router = require("express").Router();
const fraisController = require("../controllers/frais.controller");

router.post("/addFrais", fraisController.addFrais);
router.get("/fraisInfo/:id", fraisController.fraisInfo);
router.get("/getAllFrais", fraisController.getAllFrais);
router.put("/updateFrais/:id", fraisController.updateFrais);
router.delete("/deleteFrais/:id", fraisController.deleteFrais);

module.exports = router;
