const _ = require('lodash');
const jwt = require('jsonwebtoken');

const config = require('./../../../config');
const User = require('./../schemas/users');

exports.signup = (req, res, next) => {
  const body = req.body;
  
  const user = new User(body);
  
  user
    .save()
    .then((added) => {
      const token = jwt.sign(
        { _id: added._id },
        config.jwt.secret,
        { algorithm: 'HS256', expiresIn: '1h' },
      );

      const payload = {
        success: true,
        data: {
          token
        }
      };

      // Remove sensitive information
      const response = added.toObject();
      delete response.password;

      _.merge(response, payload.data);
      res.json(response);
    })
    .catch((error) => {
      next(new Error(error));
    });
};

exports.protected = (req, res, next) => {
  res.json({
    "success": true,
    "message": "You got access to a protected route"
  });
};
