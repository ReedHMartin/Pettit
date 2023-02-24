const sequelize = require("../config/connection");
const { User, Animal, Breed, Data } = require("../models");

const animalData = require("./animalData.json");
const userData = require("./userData.json");
const breedData = require("./breedData.json");
const dataData = require("./dataData.json");

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
// faux code starts here
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    // Create animals with associated breed and user data
    await Animal.bulkCreate(animalData);
    // Create users
    await User.bulkCreate(userData);

    // Create breeds
    await Breed.bulkCreate(breedData);

    // Create data associated with animals
    await Data.bulkCreate(dataData);

    console.log("Database seeded successfully!");
  } catch (err) {
    console.log("Error seeding database", err);
  }

  process.exit(0);
};

seedDatabase();

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
