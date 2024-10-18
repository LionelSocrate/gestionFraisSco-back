const bcrypt = require('bcrypt');
const maxAge = 1000000;
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user.model');
const { isEmpty } = require('../lib/allFunctions');

require('dotenv').config({ path: '.env' });
const key = process.env.TOKEN_SECRET;
const createToken = (infos) => jwt.sign({ infos }, key, { expiresIn: maxAge });

module.exports.signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hassPassword = await bcrypt.hash(req.body.password, salt);
    const user = await UserModel.create({
      email: req.body.email,
      password: hassPassword,
    });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ error: true });
    }

    if (user.isAdmin) {
      if (password === 'admin@enipay-pass;24') {
        const token = createToken({ id: user._id });
        return res.status(200).json({ user: user._id, token });
      } else {
        return res.json({ error: true });
      }
    } else {
      if (password === 'user@enipay-pass;24') {
        const token = createToken({ id: user._id });
        return res.status(200).json({ user: user._id, token });
      } else {
        return res.json({ error: true });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.validateToken = async (req, res) => {
  const { token } = req.params;
  try {
    const verify = jwt.verify(token, key);
    if (isEmpty(verify?.infos)) {
      return res.json({ error: true });
    }
    const user = await UserModel.findById(verify.infos.id);
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};
