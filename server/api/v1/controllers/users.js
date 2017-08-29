const jwt = require('jsonwebtoken');
const config = require('./../../../config');

exports.signup = (req, res, next) => {
  const body = req.body;
  
  // Create the token with expiration date in 1 hour
  const token = jwt.sign(
    { email: body.email },
    config.jwt.secret,
    { algorithm: 'HS256', expiresIn: '1h' },
  );

  const response = Object.assign(body, { token });

  res.json({
    "success": true,
    "data": response   
  });
};
