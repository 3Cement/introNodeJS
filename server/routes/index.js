const express = require('express');
const router = express.Router();

// import the controllers
const homeController = require('../controllers/homeController')
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialController = require('../controllers/testimonialController');

module.exports = function() {
    router.get('/', homeController.homeInformation);
    router.get('/about', aboutController.aboutInformation)
    router.get('/travels', travelController.displayTravels);
    router.get('/travels/:id', travelController.displayTravel);
    router.get('/testimonials', testimonialController.displayTestimonials);
    // handles form submission with POST
    router.post('/testimonials', testimonialController.addTestimonial);

    return router;
}