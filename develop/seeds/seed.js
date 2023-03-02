const sequelize = require('../config/connection');
const { User, Rating, Animal } = require('../models');

// Import seed data
const userData = require('./userData.json');
const ratingData = require('./ratingData.json');
const animalData = require("./animalData.json");

// Define function to seed the database
const seedDatabase = async () => {
  // Sync all models to the database
  await sequelize.sync({ force: true });

  try {
    // Create animals with associated breed and user data
    await Animal.bulkCreate(animalData);
    // Create users
    await User.bulkCreate(userData);

    // Loop through each animal in the seed data and create it in the database
    for (const animal of animalData) {
      await Animal.create({
        ...animal
      });
    }
    
    // Loop through each rating in the seed data and create it in the database
    for (const rating of ratingData) {
      await Rating.create({
        ...rating,
      });
    }
  } catch (err) {
    console.log(err);
  }

  // Exit the process once the database is seeded
  process.exit(0);
}

// Call the seedDatabase function
seedDatabase();
