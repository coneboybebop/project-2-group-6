const User = require('./User');
const Zipcode = require('./Zipcode');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsTo(Zipcode, {
    foreignKey: 'zip_id'
});

Zipcode.hasMany(Post, {
    foreignKey: 'zip_id'
});



module.exports = {User, Zipcode, Post};