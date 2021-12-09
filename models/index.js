const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');
// create associations
User.hasMany(Post, { //user owns post
    foreignKey: 'user_id'
});
Post.belongsTo(User, { //post is owned by user
    foreignKey: 'user_id',
});

User.belongsToMany(Post, { //when query post, we can see how many votes a user creates
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
Post.belongsToMany(User, { //when query user, we can see all of the posts they've voted on
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };