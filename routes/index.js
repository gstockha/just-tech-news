const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => { //reject if bad request
  res.status(404).end();
});

module.exports = router;