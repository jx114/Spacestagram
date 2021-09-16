import fetch from 'node-fetch';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3017;
const url = 'mongodb://localhost/spacestagram';
// const apiKey = process.env.REACT_APP_NASA_API_KEY;
const apiKey = 'X5YJg98pmuUMEC5tAn385uwvfDX50lID0eqIkubk';
const dirname = '/Users/jacky/Desktop/Workspace/shopify/spacestagram/server';
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
app.use(express.static(path.join(dirname, '../build')));

// Routes
app.get('/', (req, res) => {
  res.send(';-; not rendering!');
});

const date = new Date();
date.setDate(date.getDate() - 7);
console.log('DATE DATE DATE', typeof date);
const strDate = JSON.stringify(date);
const startDate = strDate.slice(1, 11);
console.log('START START START', startDate);

// console.log('SLICE SLICE SLICE', date);

const getAPODS = async () => {
  console.log('APIKEY', apiKey);
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`)
    .then((response) => response.json())
    .then((data) => console.log('BUTT BUTT BUTT', data))
    .catch((err) => console.log('ERR ERR ERR', err));
};
getAPODS();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
