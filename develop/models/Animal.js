const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
	isUrl: true
      }
    },
    species: {
      type: DataTypes.STRONG,
    },
    age: {
      type: DataTypes.INTEGER
    },
    geneder: {
      type: DAtaTypes.STRING
    },
    size: {
      type: DAtaTypes.STRING
    },      
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
            type: DAtaTypes.STRING
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
