const User = require('../models/user');
const Whiskey = require('../models/whiskey');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognised credentials‍ 😱' });
      }

      req.session.userId = user.id;
      req.flash('info', `Welcome, ${user.username}!`);
      res.redirect('/');
    })
    .catch(() => {
      res.status(500).end();
    });
}

function deleteRoute(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

function showRoute(req, res) {
  User
    .findById(req.user.id)
    .populate('favourites')
    .exec()
    .then(user => {

      Whiskey
        .find({ createdBy: user.id })
        .populate('createdBy whiskeys.createdBy')
        .exec()
        .then(whiskeys => {
          res.render('sessions/profile', {user, whiskeys});
        });
    });
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute,
  show: showRoute
};
