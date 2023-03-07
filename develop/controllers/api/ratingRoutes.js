  // Import dependencies
const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all ratings
router.get("/",withAuth, (req, res) => {
    Rating.findAll()
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

// Route to get rating by id
router.get("/:id", withAuth, (req, res) => {
    Rating.findByPk(req.params.id)
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
});

// Route to create new rating
router.post("/",withAuth, async (req, res) => {
    const newRating = await Rating.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    res.json(newRating)
})

// Route to delete rating by id
router.delete("/:id", withAuth, (req, res) => {
    Rating.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedRating) => {
        res.json(deletedRating);
      })
      .catch((err) => res.json(err));
});

// Export router
module.exports = router;
