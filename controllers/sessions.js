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
  Whiskey
    .find(req.params.id)
    .populate('createdBy whiskeys.createdBy')
    .exec()
    .then((whiskeys) => {
      if(!whiskeys) return res.status(404).end();
      res.render('sessions/profile', {whiskeys});
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute,
  show: showRoute
};
