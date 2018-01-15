const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const whiskeySchema = new mongoose.Schema({
  image: {type: String},
  origin: {type: String},
  type: {type: String},
  brand: {type: String},
  variant: {type: String},
  age: {type: Number},
  notes: {type: Array},
  abv: {type: Number},
  price: {type: Number},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  comments: [commentSchema]
});

whiskeySchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Whiskey', whiskeySchema);
