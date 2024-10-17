const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/addUser", userController.addUser);
router.get("/getAllUsers", userController.getAllUsers);

module.exports = router;
