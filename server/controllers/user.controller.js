const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJwt } = require("../utility/generateJwt");
const SendEmail = require("../utility/notification/sendEmail");
const randomize = require("randomatic");
const Post = require("../models/post.model");

// REGISTER
exports.register = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.email) throw new Error("Cannot register without an email");
    if (!req.body.username)
      throw new Error("Cannot register without a username");
    if (!req.body.password)
      throw new Error("Cannot register without a password");

    if (req.body.password.length < 6)
      throw new Error("Password must be at least 6 characters long");

    // generate hashed password
    const hash = await User.hashPassword(req.body.password);
    req.body.password = hash;

    // create new user
    const newUser = new User(req.body);

    console.log(newUser);

    const { error, token } = await generateJwt(newUser.username, newUser._id);
    if (error)
      throw new Error("Couldn't create access token. Please try again later");

    newUser.accessToken = token;

    // save new user
    await newUser.save();

    res.status(200).send({
      success: true,
      message: "Registration Success",
      accessToken: token,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send({ error: true, message: err.message });
      return;
    }
    res.status(500).send({
      error: true,
      message: err.message,
    });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please make a valid request");

    const user = await User.findOne({ email: email });
    if (!user) throw new Error("User not found");

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) throw new Error("Invalid credentials");

    const { error, token } = await generateJwt(user.username, user._id);
    if (error)
      throw new Error("Couldn't create access token. Please try again later.");

    user.accessToken = token;

    await user.save();

    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      accessToken: token,
      user: user._id,
    });
  } catch (err) {
    res.status(500).send({
      error: true,
      message: err.message,
    });
  }
};
