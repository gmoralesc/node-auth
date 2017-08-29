const router = require('express').Router();

const auth = require('./../auth');
const controller = require('./../controllers/users');

router.route('/signup')
  .post(controller.signup);

router.route('/protected')
  .get(auth, controller.protected);

module.exports = router;
