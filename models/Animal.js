// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Animal model by extending Sequelize's Model class
class Animal extends Model {}

// Initialize the Animal model's data schema
Animal.init(
  {
    // Define the "id" column for the Animal table
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define the "api_id" column for the Animal table
    api_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Define the "url" column for the Animal table
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true // Ensure that the value is a valid URL
      }
    },
    // Define the "species" column for the Animal table
    species: {
      type: DataTypes.STRING,
    },
    // Define the "age" column for the Animal table
    age: {
      type: DataTypes.STRING
    },
    // Define the "gender" column for the Animal table
    gender: {
      type: DataTypes.STRING
    },
    // Define the "size" column for the Animal table
    size: {
      type: DataTypes.STRING
    },      
    // Define the "name" column for the Animal table
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the "description" column for the Animal table
    description: {
      type: DataTypes.STRING,
    },
    // Define the "status" column for the Animal table
    status: {
      type: DataTypes.STRING
    },
    // Define the "picture" column for the Animal table
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true // Ensure that the value is a valid URL
      }
    },
  },
  {
    sequelize, // Pass in the imported sequelize instance
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Don't pluralize the table name
    underscored: true, // Use snake_case for column names
    modelName: "animal", // Set the model name
  }
);

// Export the Animal model
module.exports = Animal;
