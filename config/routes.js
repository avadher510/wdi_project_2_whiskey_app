const router = require('express').Router();
const whiskeys = require('../controllers/whiskeys');
// const statics = require('../controllers/statics');
// const registrations = require('../controllers/registrations');
// const sessions = require('../controllers/sessions');

//Home Route
router.get('/', (req, res) => res.render('statics/index'));

router.route('/whiskeys')
  .get(whiskeys.index);

module.exports = router;
