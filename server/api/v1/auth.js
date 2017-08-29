const config = require('./../../config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided',
    });
  }
};
