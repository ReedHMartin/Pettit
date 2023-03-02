// Importing necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Creating Rating class that extends Model
class Rating extends Model {}

// Initializing Rating model with necessary properties
Rating.init(
 {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
     },
     comment:{
        type: DataTypes.STRING,
     },
     rating: {
        type: DataTypes.INTEGER,
     },
     user_id:{
       type: DataTypes.INTEGER,
        references: {
         model: 'user',
           key: 'id',
        },
    },
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'animal',
            key: 'id',
        },
    },
   },
   {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: "rating",
   }
 );

// Exporting Rating model
module.exports = Rating;
