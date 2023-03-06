// Require the express router module and models for Animal, Rating and User
const router = require('express').Router();
const { Animal, Rating, User } = require('../models');

// Import the authentication middleware
const withAuth = require('../utils/auth');

// Homepage route
router.get('/', async (req, res) => {
  try {
    // Get all animals and JOIN with user data
    const animalData = await Animal.findAll({
      include: [
        { model: Rating } // Include the Rating model
      ],
    }).catch((err) => res.json(err)); // Catch and handle any errors
    
    // Serialize data so the template can read it
    const animals = animalData.map((animal) => animal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      animals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    // Handle server error
    res.status(500).json(err);
  }
});

// Route for individual animal page
router.get('/animal/:id',withAuth, async (req, res) => {
  try {
    // Find a single animal by its ID
    const animalData = await Animal.findByPk(req.params.id, {
      include: [
        {
          model: Rating, // Include the Rating model
        },
      ],
    });

    // Convert the data to plain JS object
    const animal = animalData.get({ plain: true });
    
    // Render the animal page with animal data and session flag
    res.render('animal', {
      ...animal,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    // Handle server error
    res.status(500).json(err);
  }
});

// Profile page route with authentication middleware
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID and include the Animal model
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }, // Exclude the password attribute
      include: [{ model: Animal }], // Include the Animal model
    });

    // Convert the data to plain JS object
    const user = userData.get({ plain: true });

    // Render the profile page with user data and session flag
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    // Handle server error
    res.status(500).json(err);
  }
});

// Login page route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Render the login page
  res.render('login');
});

// Export the router
module.exports = router;
