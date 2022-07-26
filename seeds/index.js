const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedZipcodes = require('./zipcode-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedZipcodes();
    console.log('\n----- ZIPCODES SEEDED -----\n');
  
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    process.exit(0);
};

seedAll();