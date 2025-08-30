const express = require('express');
// const adminRouter = require('./adminRouter');
// const publicRouter = require('./publicRouter');

const app = express();

// app.use('/', publicRouter);
// app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  throw new Error('Something went wrong');
});


app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
