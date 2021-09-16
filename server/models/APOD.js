const mongoose = require('mongoose');

const { Schema } = mongoose;

const APODSchema = new Schema(
  {
    title: String,
    date: String,
    liked: Boolean,
    thumbnail: String,
    hdPicture: String,
    details: String,
    copyright: String,
    type: String,
  },
);

module.exports = mongoose.model('APOD', APODSchema);
