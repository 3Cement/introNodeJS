const express = require('express');
const path = require('path');
const routes = require('./routes');

// import the Database connection
const db = require('./config/database');

// test the connect
db.authenticate()
    .then( () => console.log('Database connected') )
    .catch(error => console.log(error));

// import the configurations
const configs = require('./config');

// create the new server
const app = express();

// filter the current environment
const config = configs[app.get('env')];

// enable Pug
app.set('view engine', 'pug');

// add the views folder into the project
app.set('views', path.join(__dirname, './views') );

// load the public assets folder
app.use(express.static('public'));

// get the current year
app.use((req, res, next) => {
    const date = new Date();
    res.locals.currentYear = date.getFullYear();
    // console.log(res.locals);
    return next();
});

// pass the sitename to the views
app.locals.sitetitle = config.sitename;

// listen for the home page
app.use('/', routes() );

// run the application
app.listen(3000);
