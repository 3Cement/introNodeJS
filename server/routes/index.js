const express = require('express');
const router = express.Router();

// import the models
const Travels = require('../models/Travels');

module.exports = function() {
    // homepage url
    router.get('/', (req, res) => {
        res.render('index', {
            pageTitle : 'Home'
        });
    });

    // about us
    router.get('/about', (req, res) => {
        res.render('about', {
            pageTitle: 'About Us'
        });
    });

    router.get('/travels', (req, res) => {

        Travels.findAll()
            .then(travels => res.render('travels', {
                pageTitle: 'Upcoming Travels',
                travels
            }));
    });

    return router;
}