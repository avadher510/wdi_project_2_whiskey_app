const Whiskey = require('../models/whiskey');
const User = require('../models/user');

//INDEX
function whiskeysIndex(req,res) {
  if(req.query.brand) {
    req.query = { brand: new RegExp(req.query.brand, 'i')};
  }

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

function whiskeysShow(req,res,next) {
  Whiskey
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((whiskey) => {
      if(!whiskey) res.notFound();
      res.render('whiskeys/show', {whiskey});
    })
    .catch(next);
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

function createComment(req,res,next) {
  req.body.createdBy = req.user;

  Whiskey
    .findById(req.params.id)
    .exec()
    .then((whiskey) => {
      if(!whiskey) res.notFound();

      whiskey.comments.push(req.body);
      return whiskey.save();
    })
    .then((whiskey) => {
      res.redirect(`/whiskeys/${whiskey.id}`);
    })
    .catch(next);
}

function deleteComment(req,res,next) {
  Whiskey
    .findById(req.params.id)
    .exec()
    .then((whiskey) => {
      if(!whiskey) return res.notFound();

      const comment = whiskey.comments.id(req.params.commentId);
      comment.remove();
      return whiskey.save();
    })
    .then((whiskey) => {
      res.redirect(`/whiskeys/${whiskey.id}`);
    })
    .catch(next);
}

function favouritesCreate(req,res,next) {
  console.log(req.params.userId);
  User
    .findById(req.params.userId)
    .exec()
    .then((user) => {
      console.log(user);
      if(!user) res.notFound();

      user.favourites.push(req.params.whiskeyId);

      return user.save();
    })
    .then(() => {
      res.redirect('/whiskeys');
    })
    .catch(next);
}


module.exports = {
  index: whiskeysIndex,
  new: whiskeysNew,
  show: whiskeysShow,
  create: whiskeysCreate,
  edit: whiskeysEdit,
  update: whiskeysUpdate,
  delete: whiskeysDelete,
  createComment: createComment,
  deleteComment: deleteComment,
  favouritesCreate: favouritesCreate
};
