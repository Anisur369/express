const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.send('This is the admin home page');
});

adminRouter.get('/login', (req, res) => {
  res.send('This is the admin login page');
});

module.exports = adminRouter;
