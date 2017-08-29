const config = require('./../../../config');

exports.signup = (req, res, next) => {
  const body = req.body;
  res.json(body);
};
