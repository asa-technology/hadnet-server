const router = require('express').Router();
const { db } = require('../../database/index');

router.post('/login', (req, res) => {
  console.log('User logged in!');
  res.send('Logged in!');
})

module.exports = router;