const user = require('../user');
exports.register = async (req, res, next) => {

  const { username, password } = req.body;

  // if (password.length < 6) {
  //   return res.status(400).json({
  //     error: "Password too short"
  //   })
  // }
  try {
    await user.create({
      username,
      password
    }).then(user => {
      res.status(200).json({
        user,
        message: "User created",
      })
    })
  } catch(err) {
    res.status(401).json({
      error: err.message,
      message: "User not created"
    })
  }
}