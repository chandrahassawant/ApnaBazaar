const userModel = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !password ) {
      return res.status(400).json({
        success: "false",
        message: "Required field missing",
      });
    }

    await userModel.createUser({
      firstName,
      lastName,
      email,
      phone,
      password,

    });

    // 3. response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  registerUser,
};