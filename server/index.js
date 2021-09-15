const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3017;
const url = 'mongodb://localhost/spacestagram';

const { nasaApiKey } = require('../info.ts');

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

// app.get('/nasaAPOD', (req, res) => {

// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}, dirname: ${__dirname}`);
});
