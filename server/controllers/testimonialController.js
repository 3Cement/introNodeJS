const Testimonials = require('../models/Testimonials');

exports.displayTestimonials = (req, res) => {
    Testimonials.findAll()
        .then(testimonials => res.render('testimonials', {
            pageTitle: 'Testimonials',
            testimonials 
        }));
}

exports.addTestimonial = (req, res) => {
    let {name, email, message} = req.body;

    // validate the form
    let errors = [];

    if(!name) {
        errors.push({'message': 'Add Your Name'})
    }

    if(!email) {
        errors.push({'message': 'Add Your Email'})
    }

    if(!message) {
        errors.push({'message': 'Add Your Testimonial'})
    }

    console.log(errors);
    // check if there're some errors
    if(errors.length > 0) {
        // we have some errors, display the warning to the view

        Testimonials.findAll()
        .then(testimonials => res.render('testimonials', {
            pageTitle: 'Testimonials',
            errors ,
            name,
            email,
            message,
            testimonials
        }));
    } else {
        // save to the database
        Testimonials.create({
            name,
            email,
            message
        })
        .then(() => res.redirect('/testimonials'))
        .catch(error => console.log(error))
    }


    // save to the database
}