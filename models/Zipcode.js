const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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