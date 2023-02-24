const User = require('./User');
const Animal = require('./Animal');
const Data = require('./Data');
const Breed = require('./Breed')

Breed.belongsTo(Animal, {
  foreignKey: 'animal_id'
})

Animal.hasOne(Breed, {
  foreignKey: 'animal_id',
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
