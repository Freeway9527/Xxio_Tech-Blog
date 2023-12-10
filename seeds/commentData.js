const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I believe so too! I belive that at the end of the journet, its the friends and family we made along the way that matters the most!",
        user_id: 1,
        post_id: 2,
       
    },
    {
        comment_text: "Yes, group projects are tough. It is hard to find a group that is willing to work together and communicate effectively.",
        user_id: 2,
        post_id: 3,
      
    },
    {
        comment_text: "I agree! Saitama is the strongest character in the anime universe!" ,
        user_id: 3,
        post_id: 5,
     
    },
    {
        comment_text: "Being a full stack developer is hard work. You have to know both the front end and the back end of a website",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "That depends on the person. I personally like Final Fantasy 7, but I know people who like Final Fantasy 10 more.",
        user_id: 5,
        post_id: 4,
      
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
