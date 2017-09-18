const express = require('express');
const router = express.Router();
const query = require('../db/query.js');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next) => {
  let newUser = {
    username: req.body.username,
    password: req.body.password,
    eth_wallet_key: req.body.eth_wallet_key
  }
  query.postToAccount(newUser)
    .then(account => {
      let data = {
        id: account[0].id,
        username: account[0].username,
        password: account[0].password,
        eth_wallet_key: account[0].eth_wallet_key
      }
      let token = jwt.sign(data, process.env.SECRETKEY)
      res.json({
        token: token,
        message: "SUCCESS: account has been created, token has been generated"
      })
    })
    .catch((err) => {
      res.json({error: err})
    })
})

router.post('/signin', (req, res, next) => {
  let token = req.body.token
  jwt.verify(token, process.env.SECRETKEY, function(err, decoded){
    if (err !== null) {
      res.json({error: err})
    } else {
      let newToken = jwt.sign(decoded, process.env.SECRETKEY)
      res.json({
        token: newToken,
        message: "SUCCESS: sign in verified, a new token has been generated"
      })
    }

  })
})


module.exports = router;
