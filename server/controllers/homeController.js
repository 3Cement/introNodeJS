const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

exports.homeInformation = (req, res) => {

    const promises = [];

    promises.push( Travels.findAll({limit: 3}) );
    promises.push( Testimonials.findAll({limit: 3}) )

    // pass to the promise
    const [travels, testimonials] = Promise.all(promises);

    result.then('index', {
        pageTitle : 'Home',
        className: 'home',
        travels,
        testimonials
    })
}