
const sequelize = require('../config/connection');
const { User, Rating, Animal } = require('../models');

const userData = require('./userData.json');
const ratingData = require('./ratingData.json');
const animalData = require("./animalData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    // Create animals with associated breed and user data
    await Animal.bulkCreate(animalData);
    // Create users
    await User.bulkCreate(userData);


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
    

  for (const rating of ratingData) {
    await Rating.create({
      ...rating,
    });
  }
  } catch (err) {
    console.log(err);
  }


  process.exit(0);
}


seedDatabase();