const Whiskey = require('../models/whiskey');

//INDEX
function whiskeysIndex(req,res) {
  Whiskey
    .find(req.query)
    .exec()
    .then((whiskeys) => {
      res.render('whiskeys/index', {whiskeys});
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

module.exports = {
  index: whiskeysIndex
};
