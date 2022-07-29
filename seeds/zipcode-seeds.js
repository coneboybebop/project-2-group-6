const { Zipcode } = require('../models');
const zipcodes = require('zipcodes');

const zipcodeData = [
    {
        zipcode: 38320,
        city_name: zipcodes.lookup(38320).city
    },
    {
        zipcode: 37128,
        city_name: zipcodes.lookup(37128).city
    },
    {
        zipcode: 37415,
        city_name: zipcodes.lookup(37415).city
    },
];

const seedZipcodes = () => Zipcode.bulkCreate(zipcodeData);

module.exports = seedZipcodes;