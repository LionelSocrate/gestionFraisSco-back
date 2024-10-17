const userModel = require("../models/user.model");

//add user
module.exports.addUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userModel.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

//get All Users
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//update user
module.exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const updateUser = await userModel.findById(id).select("-password");
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delele user
module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
