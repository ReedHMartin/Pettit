const router = require('express').Router();
const { Animal } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
  Animal.findAll()
    .then((userData) => {
      res.status(200).json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  Animal.findByPk(req.params.id, 
    {include: [Rating],}
  )
    .then((userData) => {
      res.status(200).json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  Animal.create(req.body)
    .then((newAnimal) => {
      res.status(200).json(newAnimal);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Animal.update(req.body, {
    where: {
      id: req.params.id
    }}
  )
    .then((newAnimal) => {
      res.status(200).json(newAnimal);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
