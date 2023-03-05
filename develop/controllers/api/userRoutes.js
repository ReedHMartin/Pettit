// Import required modules and models
const router = require('express').Router();
const { User, Rating } = require('../../models');
const withAuth = require('../../utils/auth');

// Endpoint to retrieve a specific user and their associated ratings
router.get("/:id",withAuth, (req, res) => {
  User.findByPk(req.params.id, {
    include: [Rating],
  })
    .then((userData) => {
      res.status(200).json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Endpoint to create a new user
router.post('/',withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Save the user's session information and send a response with the user data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Endpoint to log in a user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // Check if the user exists
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the password is valid
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Save the user's session information and send a response with the user data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Endpoint to log out a user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Destroy the user's session and send a response with a 204 status code
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Endpoint to delete a specific user
router.delete("/:id",withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

// Export the router
module.exports = router;
