const handle = (req, res) => {
  req.app.get('/gest',(req,res) => {
    console.log('i am a gest');
    res.send('This is /gest page');
  });
  res.send('This is handle page');
};

module.exports = handle;
