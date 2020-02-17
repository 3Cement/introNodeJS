const express = require('express');
const routes = require('./routes');

// create the new server
const app = express();

// listen for the home page
app.use('/', routes() );

// run the application
app.listen(3000);
