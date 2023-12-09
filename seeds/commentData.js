const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "yea sure!!!",
        user_id: 1,
        post_id: 2,
        createdAt: new Date() 
    },
    {
        comment_text: "yea sure!!!",
        user_id: 2,
        post_id: 3,
        createdAt: new Date() 
    },
    {
        comment_text: "yea sure!!!",
        user_id: 3,
        post_id: 5,
        createdAt: new Date() 
    },
    {
        comment_text: "yea sure!!!",
        user_id: 4,
        post_id: 1,
        createdAt: new Date() 
    },
    {
        comment_text: "yea sure!!!",
        user_id: 5,
        post_id: 4,
        createdAt: new Date() 
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
