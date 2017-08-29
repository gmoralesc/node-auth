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

exports.get = (req, res, next) => {
  const userId = req.decoded._id;
  if (userId) {
    User.findById(userId)
      .select('-password')
      .then((user) => {
        if (user) {
          res.json({
            success: true,
            data: user
          });
        } else {
          next(new Error('User not found'));
        }
      })
      .catch((error) => {
        next(new Error(error));
      });
  } else {
    next(new Error('Error in token'));
  }
};
