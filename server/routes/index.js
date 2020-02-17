const express = require('express');
const router = express.Router();

module.exports = function() {
    // homepage url
    router.get('/', (req, res) => {
        res.send('Index');
    });

    // about us
    router.get('/about', (req, res) => {
        res.send('About Us');
    });

    return router;
}