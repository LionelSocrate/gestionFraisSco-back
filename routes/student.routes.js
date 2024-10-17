const router = require("express").Router();
const studentController = require("../controllers/student.controller");

router.post("/addStudent", studentController.addStudent);
router.get("/studentInfo/:id", studentController.studentInfo);
router.get("/getAllStudents", studentController.getAllStudents);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
