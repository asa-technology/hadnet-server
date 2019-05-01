const router = require('express').Router();

// mock data
const { communityListings } = require('../database/mock-community-listings');

router.get('/', (req, res) => {
  console.log('Getting community data!');
  res.send(communityListings);
})

module.exports = router;