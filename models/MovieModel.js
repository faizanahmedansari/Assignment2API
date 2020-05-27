const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: String,
  image: String,
  summary: String
});

module.exports = mongoose.model('movie', MovieSchema);