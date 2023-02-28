const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    api_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
	isUrl: true
      }
    },
    species: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING
    },
    geneder: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },      
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
	isUrl: true
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "animal",
  }
);

module.exports = Animal;
