import fetch from 'node-fetch';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/extensions
import APOD from './models/APOD.js';

// Utils
// eslint-disable-next-line import/extensions
import getStartDate from './utils/index.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3017;
const url = 'mongodb://localhost/spacestagram';
// const apiKey = process.env.REACT_APP_NASA_API_KEY;
const apiKey = 'X5YJg98pmuUMEC5tAn385uwvfDX50lID0eqIkubk';

// Database
mongoose
  .connect(url)
  .then(() => console.log('successfully connected to MongoDB!'));

const db = mongoose.connection;
db.once('connect', () => {
  console.log(`connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Serve
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.get('/', (req, res) => {
  res.send(';-; not rendering!');
});

const getAPODS = async () => {
  const startDate = getStartDate();
  console.log('APIKEY', apiKey);
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`)
    .then((response) => response.json())
    .then((data) => {
      const apods = data.reverse();
      apods.forEach(async (apod) => {
        await APOD.findOneAndUpdate(
          apod,
          apod,
          {
            new: true,
            upsert: true,
          },
        )
          .catch((err) => console.log('DATA ERR:', err));
      });
    })
    .catch((err) => console.log('ERR ERR ERR', err));
};
getAPODS();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
