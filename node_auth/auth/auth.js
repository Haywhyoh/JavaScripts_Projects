const user = require('../user');

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      error: 'Password too short'
    });
  }
  try {
    await user.create({
      username,
      password
    }).then(user => {
      res.status(200).json({
        user,
        message: 'User created'
      });
    });
  } catch (err) {
    res.status(401).json({
      error: err.message,
      message: 'User not created'
    });
  }
};

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(403).json({
      error: 'Username and Password missed'
    });
  }

  try {
    const userDetails = await user.findOne({ username, password });

    if (!userDetails) {
      res.status(401).json({
        message: 'Login not successful',
        error: 'User not Found'
      });
    }

    res.status(200).json({
      message: 'User found',
      userDetails
    });
  } catch (err) {
    res.status(400).json({
      message: 'An error occured',
      error: err.message
    });
  }
};
