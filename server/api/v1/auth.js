const jwt = require('jsonwebtoken');
const logger = require('winston');

const config = require('./../../config');

module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        const message = 'Unauthorized';
        logger.warn(message);
        res.status(401);
        res.json({
          success: false,
          message,
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    const message = 'Forbidden';
    logger.warn(message);
    res.status(403);
    res.json({
      success: false,
      message,
    });
  }
};
