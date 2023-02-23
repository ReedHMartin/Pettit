const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Data extends Model {}

Data.init(
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
         model: 'User',
           key: 'id',
        },
    },
    animal_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Animal',
            key: 'id',
        },
    },
   },
   {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'data',
   }
 );

module.exports = Data;
