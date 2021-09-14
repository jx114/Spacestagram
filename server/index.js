const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3017;
const path = require('path');

// Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.get('/', (req, res) => {
  res.send(';-; not rendering!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}, dirname: ${__dirname}`);
});
