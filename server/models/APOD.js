const mongoose = require('mongoose');

const { Schema } = mongoose;

const APODSchema = new Schema(
  {
    title: String,
    date: String,
    liked: { type: Boolean, default: false },
    url: String,
    hdurl: String,
    explanation: String,
    copyright: String,
    media_type: String,
    service_version: String,
  },
);

module.exports = mongoose.model('APOD', APODSchema);
