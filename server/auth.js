const router = require('express').Router();
const bodyParser = require('body-parser');

router.post('/login', bodyParser.JSON(), (req, res) => {
  console.log('User logged in!');
  console.log('User access token:', req.body);
  res.send('Logged in!');
})

module.exports = router;