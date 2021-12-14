const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => { //reject if bad request
  res.status(404).end();
});

module.exports = router;