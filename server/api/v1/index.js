const router = require('express').Router();

const usersRoutes = require('./users/routes');

router.use('/users', usersRoutes);

module.exports = router;
