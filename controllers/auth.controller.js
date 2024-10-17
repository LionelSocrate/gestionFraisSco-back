const userModel = require("../models/user.model");

const ObjectID = require("mongoose").Types.ObjectID;
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60 * 1000;
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//SIGNUP
module.exports.signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    hassPassword = await bcrypt.hash(req.body.password, salt);
    const user = await userModel.create({
      email: req.body.email,
      password: hassPassword,
    });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
