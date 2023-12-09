const { User } = require('../models');

const userData = [{
    username: 'testuser1',
    password: 'password1234'

},
{
    username: 'testuser2',
    password: 'password1234'
},
{
    username: 'testuser3',
    password: 'password1234'
},
{
    username: 'testuser4',
    password: 'password1234'
},
{
    username: 'testuser5',
    password: 'password1234'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;