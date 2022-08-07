const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const regionalRoutes = require('./regional-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/regional', regionalRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;