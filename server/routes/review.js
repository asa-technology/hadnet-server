const router = require('express').Router();

const { reviews } = require('../../database/mock-reviews');

router.get('/business/:id', (req, res) => {
  const businessId = req.params.id;

    /****************TODO****************
   * get reviews for specific business
   */
  console.log(`Grabbing all reviews for business id: ${businessId}`)
  const businessReviews = reviews.filter((review) => {
    return review.id_business === businessId;
  });
  res.send(businessReviews);
});

router.get('/user/:id', (req,res) => {
  const userId = req.params.id;

    /****************TODO****************
   * get reviews for specific user
   */
  console.log(`Grabbing all reviews for user id: ${userId}`);
  const userReviews = reviews.filter((review) => {
    return review.id_business === userId;
  })
  res.send(userReviews);
})

router.post('/', (req, res) => {
  const review = req.body;

  /****************TODO****************
   * add review to specified business
   */

})