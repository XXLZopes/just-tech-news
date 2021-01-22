const User = require('./User');
const Post = require('./Post')

//create associations

//User can belong to many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Post can belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
