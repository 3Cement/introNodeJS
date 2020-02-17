const express = require('express');
const router = express.Router();

module.exports = function() {
    // homepage url
    router.get('/', (req, res) => {
        res.render('index');
    });

    // about us
    router.get('/about', (req, res) => {
        res.render('about');
    });

    return router;
}