import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/extensions
import controllers from './controllers/APOD.js';

const { getAPODS } = controllers;
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3017;
const url = 'mongodb://localhost/spacestagram';

// Database
// import and clean
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

getAPODS();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
