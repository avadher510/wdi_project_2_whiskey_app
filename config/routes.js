const router = require('express').Router();
const whiskeys = require('../controllers/whiskeys');
// const statics = require('../controllers/statics');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in');
      res.redirect('/login');
    });
  }
  next();
}

//Home Route
router.get('/', (req, res) => res.render('statics/index'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new) // Render the login form
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

//Index and Create
router.route('/whiskeys')
  .get(whiskeys.index)
  .post(secureRoute, whiskeys.create);

//New
router.route('/whiskeys/new')
  .get(secureRoute, whiskeys.new);

//Show, Update and Delete
router.route('/whiskeys/:id')
  .get(whiskeys.show)
  .put(secureRoute, whiskeys.update)
  .delete(secureRoute, whiskeys.delete);

router.route('/whiskeys/:id/comments')
  .post(whiskeys.createComment);

router.route('/whiskeys/:id/comments/:commentId')
  .delete(secureRoute, whiskeys.deleteComment);

//Edit
router.route('/whiskeys/:id/edit')
  .get(secureRoute, whiskeys.edit);

router.route('/profile')
  .get(secureRoute, sessions.show);

router.all('*', (req, res) => res.notFound());

module.exports = router;
