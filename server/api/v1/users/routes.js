const router = require('express').Router();

const {
  auth,
  authFailed,
} = require('./../auth');
const controller = require('./controller');

router.route('/signup')
  .post(controller.signup);

router.route('/signin')
  .post(controller.signin, authFailed);

router.route('/profile')
  .get(auth, controller.profile);

module.exports = router;
