const router = require('express').Router();

const controller = require('./../controllers/users');

router.route('/signup')
  .post(controller.signup);

module.exports = router;
