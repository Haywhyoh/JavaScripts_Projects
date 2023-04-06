const user = require('../user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwsSecret = 'adkvansduini134fqnn394fkoirevnsnfsoinfsonfosnfnsfnsfnsnfossfvsfwqervwsdf';

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  if (password.length < 6) {
    return res.status(400).json({
      error: 'Password too short'
    });
  }
  try {
    await user.create({
      username,
      password: hashed
    }).then(user => {
      const maxTime = 3 * 60 * 60;
      const token = jwt.sign({ id: user._id, username, role: user.role },
        jwsSecret,
        {
          expiresIn: maxTime
        });
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: maxTime * 1000 // in ms
      });
      res.status(200).json({
        userId: user._id,
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

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(403).json({
      error: 'Username and Password missed'
    });
  }

  try {
    const userDetails = await user.findOne({ username });
    if (!userDetails) {
      res.status(401).json({
        message: 'Login not successful',
        error: 'User not Found'
      });
    } else {
      bcrypt.compare(password, userDetails.password).then(
        result => {
          if (result) {
            const maxTime = 3 * 60 * 60;
            const token = jwt.sign({
              id: userDetails.id,
              username,
              role: userDetails.role
            }, jwsSecret, {
              expiresIn: maxTime
            });
            res.cookie('jwt', token,
              {
                httpOnly: true,
                maxAge: maxTime * 10000
              }
            );

            res.status(200).json({
              message: 'User found',
              id: userDetails.id
            });
          } else {
            res.status(400).json({
              message: 'Login unsuccessful'
            });
          }
        });
    }
  } catch (err) {
    res.status(400).json({
      message: 'An error occured',
      error: err.message
    });
  }
};

exports.update = async (req, res, next) => {
  const { id, role } = req.body;

  if (id || role) {
    if (role === 'admin') {
      await user.findById(id).then((User) => {
        if (User.role !== 'admin') {
          User.role = role;
          User.save().then(
            res.status(200).json({
              User
            })
          );
        } else {
          res.status(201).json({
            message: 'User already an admin'
          });
        }
      }

      ).catch((err) => {
        res.status(400).json({ message: 'An error occurred', error: err.message });
      });
    }
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    res.status(403).json({
      message: 'id is missen'
    });
  }
  user.findById(id).then(User => User.deleteOne()).then(
    User => res.status(201).json({
      message: 'User removed sucesfully',
      User
    })
  )
    .catch(err => {
      res.status(400).json({
        error: err.message,
        message: 'An eror occured'
      });
    });
};
