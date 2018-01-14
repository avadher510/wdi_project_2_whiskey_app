const router = require('express').Router();
const whiskeys = require('../controllers/whiskeys');
// const statics = require('../controllers/statics');
// const registrations = require('../controllers/registrations');
// const sessions = require('../controllers/sessions');

//Home Route
router.get('/', (req, res) => res.render('statics/index'));

//Index and Create
router.route('/whiskeys')
  .get(whiskeys.index)
  .post(whiskeys.create);

//New
router.route('/whiskeys/new')
  .get(whiskeys.new);

//Show, Update and Delete
router.route('/whiskeys/:id')
  .get(whiskeys.show)
  .put(whiskeys.update)
  .delete(whiskeys.delete);

//Edit
router.route('/whiskeys/:id/edit')
  .get(whiskeys.edit);

module.exports = router;
