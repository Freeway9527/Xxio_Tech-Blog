const path = require('path');
const express = require('express');
//const session = require('express-session');
const exphbs = require('express-handlebars'); 
//const routes = require('./controllers');
//const helpers = require('./utils/helpers');

// Import Sequelize connection
//const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create instance of express
const app = express();

// Define port
const PORT = process.env.PORT || 3001;

// Create Instance of Handlebars
const hbs = exphbs.create({ }); // Add back helpers when ready

// Create Session
//const sess = {
    //secret: 'Secrets you must not tell',
    //cookie: {},
    //resave: false,
    //saveUninitialized: true,
    //store: new SequelizeStore({
        //db: sequelize,
    //}),
//};

// Set up middleware
//app.use(session(sess));
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/api/index')); //remove after testing
// Set up handlebars as template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up routes
//app.use(routes);

// Sync models with database and start server
//sequelize.sync({ force: false }).then(() => {
    //app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
//});

app.listen(PORT, () => {
    console.log(`Sever listening on port: http://localhost:${PORT}`);
});
