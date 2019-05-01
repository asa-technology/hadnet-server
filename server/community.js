const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('Getting community data!');
  res.send('Community data');
})

module.exports = router;