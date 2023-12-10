const { Post } = require("../models");

const postData = [
  {
    title: "What is a Full Stack Developer?",
    content:
    "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 1,
  },
  {
    title: "In One Piece, what do you guys think the 'One Piece treasure' is?",
    content:
      "I think that the One Piece treasure is actually the friends we made along the way.",
    user_id: 2,
  },
  {
    title: "Why group projects don't work?",
    content:
      "Students lack the ability to work together and communicate effectively. Students have different knowledge and skills, which leads to unequal contribution.",
    user_id: 3,
  },
  {
    title: "What Final Fantasy game is the best?",
    content:
      "I believe final fantasy 7 is the best because of the story and the characters",
    user_id: 4,
  },
  {
    title: "Who would win in a fight Superman or Saitama?",
    content:
      "Easily Saitama LOL, everything is ONE PUNCH. He is a joke/gag character to these overpower characters !!.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;