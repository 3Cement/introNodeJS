const express = require('express');


// create the new server
const app = express();

// listen for the home page
app.use('/', (req, res) => {
    res.send('Index');
});

// run the application
app.listen(3000);
