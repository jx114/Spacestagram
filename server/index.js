const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3017;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.send(';-; not rendering!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}, dirname: ${__dirname}`);
});
