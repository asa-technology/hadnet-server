const router = require('express').Router();

// mock data
const { businesses } = require('../database/mock-business-data');

router.get('/', (req, res) => {
  console.log('Grabbing all businesses');
  res.send(businesses);
})

module.exports = router;