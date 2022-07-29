const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const regionalRoutes = require('./regional-routes');

router.use('/api', apiRoutes);
router.use('/regional', regionalRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;