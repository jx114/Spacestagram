import mongoose from 'mongoose';

const { Schema } = mongoose;

const APODSchema = new Schema(
  {
    title: String,
    date: String,
    liked: Boolean,
    url: String,
    hdurl: String,
    explanation: String,
    copyright: String,
    media_type: String,
    service_version: String,
  },
);

export default mongoose.model('APOD', APODSchema);
