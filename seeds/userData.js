const { User } = require("../models");

const userData = [
  {
    username: "AppleSeed",
    password: "password1234",
  },
  {
    username: "OrangeSeed",
    password: "password1234",
  },
  {
    username: "PinappleSeed",
    password: "password1234",
  },
  {
    username: "PearSeed",
    password: "password1234",
  },
  {
    username: "BananaSeed",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
