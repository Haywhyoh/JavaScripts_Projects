const db = require('../utils/db');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const bcryptSalt = bcrypt.genSaltSync(10);
class userController {
    static async postNew(req, res) {
      const username = req.body ? req.body.username : null;
      const password = req.body ? req.body.password : null;

      if (!username) {
        res.status(400).json({error :"Missing Username"});
        return
      }

      if (!password) {
        res.status(400).json({error :"Missing Password"});
        return
      }

      const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
      const newUser = await User.create({
        username: username,
        password: hashedPassword,
      });

      res.status(201).json({ username, id: newUser._id });
    }

    static async getUser(req, res) {
      const { user } = req;
      res.status(200).json({ username: user.username });
    }
}

module.exports = userController