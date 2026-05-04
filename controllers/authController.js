const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    // save user to database
    await user.save();

    // send response
    res.status(201).json({ message: "User created" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};