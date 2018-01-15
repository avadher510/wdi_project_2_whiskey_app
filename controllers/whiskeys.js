const Whiskey = require('../models/whiskey');

//INDEX
function whiskeysIndex(req,res) {
  Whiskey
    .find(req.query)
    .populate('createdBy')
    .exec()
    .then((whiskeys) => {
      res.render('whiskeys/index', {whiskeys});
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function whiskeysNew(req, res) {
  res.render('whiskeys/new');
}

function whiskeysShow(req,res) {
  Whiskey
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((whiskey) => {
      if(!whiskey) return res.status(404).end();
      res.render('whiskeys/show', {whiskey});
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

function whiskeysCreate (req, res) {

  req.body.createdBy = req.user;

  Whiskey
    .create(req.body)
    .then(() => {
      res.redirect('/whiskeys');
    })
    .catch((err) =>{
      res.status(500).render('error', {err});
    });
}

function whiskeysEdit(req,res) {
  Whiskey
    .findById(req.params.id)
    .exec()
    .then((whiskey) => {
      if(!whiskey) return res.status(404).end();
      res.render('whiskeys/edit', {whiskey});
    })
    .catch((err) =>{
      res.status(500).render('error', {err});
    });
}

function whiskeysUpdate(req, res) {
  Whiskey
    .findById(req.params.id)
    .exec()
    .then((whiskey) => {
      if(!whiskey) return res.status(404).send('Not found');

      whiskey = Object.assign(whiskey, req.body);

      return whiskey.save();
    })
    .then((whiskey) => {
      res.redirect(`/whiskeys/${whiskey.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function whiskeysDelete(req, res) {
  Whiskey
    .findById(req.params.id)
    .exec()
    .then((whiskey) => {
      if(!whiskey) return res.status(404).send('Not found');

      return whiskey.remove();
    })
    .then(() => {
      res.redirect('/whiskeys');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  index: whiskeysIndex,
  new: whiskeysNew,
  show: whiskeysShow,
  create: whiskeysCreate,
  edit: whiskeysEdit,
  update: whiskeysUpdate,
  delete: whiskeysDelete
};
