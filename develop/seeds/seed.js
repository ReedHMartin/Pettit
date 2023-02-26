const sequelize = require('../config/connection');
const { User, Rating, Animal } = require('../models');

const userData = require('./userData.json');
const ratingData = require('./ratingData.json');
const animalData = require("./animalData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const animal of animalData) {
    await Animal.create({
      ...animal
    });
  }

  for (const rating of ratingData) {
    await Rating.create({
      ...rating,
    });
  }

  process.exit(0);
};

seedDatabase();
