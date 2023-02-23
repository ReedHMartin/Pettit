const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Breed extends Model {}

Breed.init(
  {
   id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
   breed_name:{
    type: DataTypes.STRING,
    allowNull: false,
   }
   animal_id:{
    type: DataTypes.INTEGER,
    references: {
        model: 'Animal',
        key: 'id',
   }
  },
}
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'breed'
  },
);

module.exports = Breed;
