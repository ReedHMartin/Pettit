const User = require('./User');
const Animal = require('./Animal');
const Data = require('./Data');
const Breed = require('./Breed')

Animal.belongsTo(Breed, {
  foreignKey: 'animal_id'
})

Breed.hasMany(Animal, {
  foreignKey: 'breed_id',
  onDelete: 'CASCADE'
})

Animal.belongsToMany(User, {
  through: Data,
  foreignKey: 'animal_id'
});

User.belongsToMany(Animal, {
  through: Data,
  foreignKey: 'user_id',
});

module.exports = { 
  User, 
  Animal, 
  Data,
  Breed
};
