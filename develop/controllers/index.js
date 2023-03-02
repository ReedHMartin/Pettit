// Require the Router module from the Express package
const router = require('express').Router();

// Require the API and homeRoutes modules
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Use the homeRoutes module for the root URL ('/') and the apiRoutes module for the '/api' URL
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export the router module
module.exports = router;