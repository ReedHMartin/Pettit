// Importing required models
const User = require("./User");
const Animal = require("./Animal");
const Rating = require("./Rating");

// Relationship between Rating and Animal models (Rating belongs to Animal)
Rating.belongsTo(Animal, {
  foreginKey:"animal_id"
});

// Relationship between Animal and Rating models (Animal has many Ratings)
Animal.hasMany(Rating, {
  foreignKey:"animal_id"
});

// Relationship between User and Rating models (User has many Ratings)
User.hasMany(Rating, {
  foreignKey: "user_id"
})

// Relationship between Rating and User models (Rating belongs to User)
Rating.belongsTo(User, {
  foreignKey: "user_id"
})

// Relationship between Animal and User models (Animal belongs to many Users)
Animal.belongsToMany(User, {
  through: {
    model:Rating,
    unique: true
  },
  as:"user_animals"
});

// Relationship between User and Animal models (User belongs to many Animals)
User.belongsToMany(Animal, {
  through: {
    model:Rating,
    unique: true
  },
  as:"animal_users"
});

// Exporting all the models
module.exports = { 
  User, 
  Animal, 
  Rating
};
