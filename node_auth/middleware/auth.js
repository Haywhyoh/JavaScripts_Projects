const jwt = require('jsonwebtoken');

const jwsSecret = 'adkvansduini134fqnn394fkoirevnsnfsoinfsonfosnfnsfnsfnsnfossfvsfwqervwsdf';

exports.adminAuth = (req, res, next) => {
  const token = req.cookie.jwt;
  if (token) {
    jwt.verify(token, jwsSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not Authorized' });
      } else {
        if (decodedToken.role !== 'admin') {
          return res.status(401).json({ message: 'Not an admin' });
        } else {
          next();
        }
      }
    });
  } else {
    return res.status(401).json({ message: 'Not Authorized as token not found' });
  }
};

exports.userAuth = (req, res, next) => {
  const token = req.cookie.jwt;

  if (token) {
    jwt.verify(token, jwsSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not Authorized' });
      } else {
        if (decodedToken.role !== 'Basic') {
          return res.status(401).json({ message: 'Not an admin' });
        } else {
          next();
        }
      }
    });
  } else {
    return res.status(401).json({ message: 'Not Authorized as token not found' });
  }
};
