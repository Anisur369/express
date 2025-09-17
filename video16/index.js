const express = require('express');
const ejs = require('ejs');
const { join } = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendStatus(501);
});


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});