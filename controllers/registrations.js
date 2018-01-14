const User = require('../models/user');

function newRoute(req,res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login.`);
      return res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', {message: 'Passwords do not match 🧟‍'});
      }
      res.status(500).send(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
