const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animalRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/user', userRoutes);
router.use('/animal', animalRoutes);
router.use('/rating', ratingRoutes);

module.exports = router;
