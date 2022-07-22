const { Zipcode } = require('../models');

const zipcodeData = [
    {
        zipcode: 38320
    },
    {
        zipcode: 37128
    },
    {
        zipcode: 37415
    },
];

const seedZipcodes = () => Zipcode.bulkCreate(zipcodeData);

module.exports = seedZipcodes;