const express = require('express');

const app = express();
const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log("req.url:==", req.url);
  console.log("req.baseUrl:==", req.baseUrl);
  console.log("req.originalURL:==", req.originalUrl);
  console.log("req.path:==", req.path);
  console.log("req.hostname:==", req.hostname);
  console.log("req.ip:==", req.ip);
  console.log("req.method:==", req.method);
  console.log("req.protocol:==", req.protocol);
  console.log("req.query:==", req.query);
  console.log("req.body:==", req.body);
  console.log("req.params.id:==", req.params.id);
  console.log("req.params:==", req.params);
  res.send('Welcome to the admin dashboard!');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log("req.url:==", req.url);
  console.log("req.baseUrl:==", req.baseUrl);
  console.log("req.originalURL:==", req.originalUrl);
  console.log("req.path:==", req.path);
  console.log("req.hostname:==", req.hostname);
  console.log("req.ip:==", req.ip);
  console.log("req.method:==", req.method);
  console.log("req.protocol:==", req.protocol);
  console.log("req.query:==", req.query);
  console.log("req.body:==", req.body);
  console.log("req.params.id:==", req.params.id);
  console.log("req.params:==", req.params);
  res.send('Welcome to the user panel!');
});


app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/');
});
  