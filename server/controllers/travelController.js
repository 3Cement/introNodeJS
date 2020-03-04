const Travels = require('../models/Travels');

exports.displayTravels =  (req, res) => {
    Travels.findAll()
        .then(travels => res.render('travels', {
            pageTitle: 'Upcoming Travels',
            travels
        }));
}

exports.displayTravel = (req, res) => {
    Travels.findByPk(req.params.id)
        .then(travel => res.render('travel', {
            travel
        }))
}