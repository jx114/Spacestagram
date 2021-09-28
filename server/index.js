/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const controllers = require('./controllers/APOD');
const router = require('./routes/api/index');

const { getAPODS } = controllers;

const app = express();
const port = 3017;
console.log('ENV VARIABLE', process.env.CONNECTIONSTRING);
const url = process.env.CONNECTIONSTRING || 'mongodb://localhost/spacestagram';

// Database
/// / import and clean
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
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api', router);

// API
/// /  Retrieves data from NASA Api on every server start up and saves to db
getAPODS();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
