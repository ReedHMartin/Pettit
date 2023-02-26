const User = require("./User");
const Animal = require("./Animal");
const Rating = require("./Rating");


Rating.belongsTo(Animal, {
  foreginKey:"animal_id"
});

Animal.hasMany(Rating, {
  foreignKey:"animal_id"
});

User.hasMany(Rating, {
  foreignKey: "user_id",
});

Rating.belongsTo(User,{
  foriiegnKey: "user_id"
});

Animal.belongsToMany(User, {
  through: {
    model:Rating,
    unique: true
  },
  as:"user_animals"
});

User.belongsToMany(Animal, {
  through: {
    model:Rating,
    unique: true
  },
  as:"animal_users"
});
  


module.exports = { 
  User, 
  Animal, 
  Rating
};
