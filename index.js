const express = require('express');

const app = express();
const admin = express();

admin.get('/', (req, res) => {
  res.send('Welcome to the admin panel!');
});

app.param('id', (req, res, next, id) => {
  console.log(`User ID: ${id}`);
  const user= {
    userid:id,
    name: 'Bangladesh'
  }
  req.userDetails = user;
  next();
});

app.all('/user/:id', (req, res) => {
  res.send(`Welcome to the application home page, ${req.userDetails.name}!`);
});

app.use('/admin', admin);

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/');
});
  