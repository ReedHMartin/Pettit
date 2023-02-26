const User = require("./User");
const Animal = require("./Animal");
const Rating = require("./Data");


Rating.belongsTo(Animal, {
  foreginKey:"animal_id"
});

Animal.hasMany(Rating, {
  foreignKey:"animal_id"
});

User.hasMany(Rating, {
  foreignKey: "user_id",
});

Rating.blongsTo(User,{
  foriiegnKey: "user_id"
});

Animal.belongsToMany(Users, {
  through: {
    model:Rating,
    unique: true
  }
  as:"user_animals"
});

Users.belongsToMany(Animals, {
  through: {
    model:Rating,
    unique: true
  }
  as:"animal_users"
});
  


module.exports = { 
  User, 
  Animal, 
  Rating
};
