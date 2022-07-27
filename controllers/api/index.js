const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const zipcodeRoutes = require('./zipcode-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/zipcodes', zipcodeRoutes);

module.exports = router;