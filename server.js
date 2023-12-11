const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); 
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import Sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create instance of express
const app = express();

// Define port
const PORT = process.env.PORT || 10000; //change to 3001 for local testing

// Create Instance of Handlebars
const hbs = exphbs.create({ helpers }); //add back helpers 

//Create Session
const sess = {
    secret: 'Super Duper Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Set up middleware
app.use(session(sess));

// Set up handlebars as template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(require('./controllers/api/index'));


// Set up routes
app.use(routes);


//Sync models with database and start server

//sequelize.sync({ force: false }).then(() => {
   //app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
//});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Now listening on port ${PORT}`);
});