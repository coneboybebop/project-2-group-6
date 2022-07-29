const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const zipcodes = require('zipcodes');

class Zipcode extends Model {}

Zipcode.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'zipcode'
    }
);

module.exports = Zipcode;