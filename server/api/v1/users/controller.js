const jwt = require('jsonwebtoken');
const logger = require('winston');

const config = require('./../../../config');
const User = require('./model');

exports.signup = (req, res, next) => {
  const {
    body,
  } = req;

  const user = new User(body);

  user.save()
    .then((created) => {
      const token = jwt.sign({
        id: created.id,
      }, config.jwt.secret, {
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
    })
    .catch((error) => {
      next(new Error(error));
    });
};

exports.profile = (req, res, next) => {
  const {
    decoded,
  } = req;
  const {
    id,
  } = decoded;
  if (id) {
    User.findById(id)
      .then((user) => {
        if (user) {
          res.json({
            success: true,
            item: user,
          });
        } else {
          const message = 'User not found';
          logger.info(message);
          res.json({
            success: false,
            message,
          });
        }
      })
      .catch((error) => {
        next(new Error(error));
      });
  } else {
    next(new Error('Error in token'));
  }
};
