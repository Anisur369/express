const express = require('express');
const cookieParser = require('cookie-parser');
const handle = require('./handle.js');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get('/user/:id', (req, res) => {
  // console.log(req.body);
  // console.log(req.cookies);
  console.log(req.secure);  
  res.send('Welcome to the user panel!');
});
app.get('/', handle);

app.post('/user/:id', (req, res) => {
  console.log(req.cookies);
  res.send('User created successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/');
});
  


//npm i cookie-parser