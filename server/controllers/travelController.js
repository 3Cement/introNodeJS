const Travels = require('../models/Travels');

exports.displayTravels =  (req, res) => {
    Travels.findAll()
        .then(travels => res.render('travels', {
            pageTitle: 'Upcoming Travels',
            travels
        }));
}