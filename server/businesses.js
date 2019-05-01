const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('Grabbing all businesses');
  res.send('All business data');
})

module.exports = router;