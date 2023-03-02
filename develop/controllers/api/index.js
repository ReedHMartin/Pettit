// Importing express and the other routers
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animalRoutes');
const ratingRoutes = require('./ratingRoutes');

// Using the userRoutes, animalRoutes, and ratingRoutes
router.use('/user', userRoutes);
router.use('/animal', animalRoutes);
router.use('/rating', ratingRoutes);

// Exporting the router for use in other files
module.exports = router;
