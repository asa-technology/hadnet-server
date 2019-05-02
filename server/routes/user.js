const router = require('express').Router();

// mock data
const { users } = require('../../database/mock-user-data');


// gets all users
router.get('/', (req, res) => {
  console.log('Grabbing all users');

  /****************TODO****************
  * get all users from database
  */
  res.send(users);
});


// gets user at specified id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  /****************TODO****************
   * get user by id from database
   */
  if(user[id]){
    console.log(`Grabbing user at id: ${id}`);
    res.send(users[id]);
  } else {
    res.sendStatus(404);
  }
});


// add user
router.post('/', (req, res) => {
  const user = req.body;
  console.log(`added user: ${user.name} to db`);
  
  /****************TODO****************
   * add business to database
   */
  res.send(`added user: ${user.name} to db`)
})


// update user at specified id
router.patch('/:id', (req, res) => {
  const id = req.params.id;

  /****************TODO****************
   * update business at id in database
   */
  res.send('updated user')
})



module.exports = router;