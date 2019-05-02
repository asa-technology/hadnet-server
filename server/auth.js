const router = require('express').Router();
const bodyParser = require('body-parser');
const request = require('request');

const validateWithFacebook = (accessToken) => {
  return new Promise((resolve, reject) => {
    request({
      url: "https://graph.facebook.com/me?fields=email,name",
      qs: {access_token: accessToken}
    },
    (err, response, body) => {
      if (!err && response.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    })
  })
}

router.post('/login', bodyParser.json(), (req, res) => {
  console.log('User logged in!');
  console.log('User access token:', req.body);
  validateWithFacebook(req.body)
    .then((response) => {
      console.log("Response from Facebook Graph API:", response);
      res.send('Logged in!');
    })
    .catch((error) => {
      console.error(error);
    })
})


module.exports = router;