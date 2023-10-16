const User = require('../Models/userModel');

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ status: true, message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Search for a user in the database with the given username and password
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({
        status: true,
        username: user.username,
        message: 'User logged in successfully',
        jwt_token: user.id,
      });
    } else {
      res.status(400).json({ status: false, message: 'Invalid Username and password' });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
};

  

module.exports = {
  createUser,
  loginUser,
};
