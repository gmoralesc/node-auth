const jwt = require('jsonwebtoken');

const config = require('./../../../config');

exports.signup = (req, res, next) => {
  const {
    body,
  } = req;

  const created = body;
  delete created.password;

  const token = jwt.sign(created, config.jwt.secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  res.json({
    success: true,
    item: created,
    meta: {
      token,
    },
  });
};

exports.profile = (req, res, next) => {
  const {
    decoded,
  } = req;
  res.json({
    success: true,
    item: decoded,
  });
};
