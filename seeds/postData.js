const { Post } = require("../models");

const postData = [
  {
    title: "What is a Full Stack Developer?",
    content:
    "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 1,
  },
  {
    title: "What is a Full Stack Developer?",
    content:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 2,
  },
  {
    title: "What is a Full Stack Developer?",
    content:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 3,
  },
  {
    title: "What is a Full Stack Developer?",
    content:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 4,
  },
  {
    title: "What is a Full Stack Developer?",
    content:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    user_id: 5,
  },
  

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;