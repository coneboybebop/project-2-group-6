const { User } = require('../models');

const userData = [
    {
        username: 'Joe1',
        email: 'joe@fake.com',
        password: 'pass123'
    },
    {
        username: 'Malcome1',
        email: 'malcome@fake.com',
        password: 'pass123'
    },
    {
        username: 'Wesley1',
        email: 'wesley@fake.com',
        password: 'pass123'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;