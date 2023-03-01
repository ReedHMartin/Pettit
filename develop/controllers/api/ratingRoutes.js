const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", withAuth, (req, res) => {
    Rating.findAll()
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.get("/:id", withAuth, (req, res) => {
    Rating.findByPk(req.params.id)
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.post("/", withAuth, (req, res) => {
    const newRating = Rating.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    res.json(newRating)
})
   
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
  
  module.exports = router;
  