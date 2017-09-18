const express = require('express');
const router = express.Router();
const query = require('../db/query.js');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next) => {
  query.postToAccount(req.body)
    .then(account => {
      let token = jwt.sign(account, process.env.SECRETKEY)
      res.json({
        token: token,
        message: 'SUCCESS: account created, and token returned'
      })
    })
    .catch((err) => {
      res.json({
        error: err,
        message: 'FAILURE: account was not created successfully'
      })
    })
})

router.post('/signin', (req, res, next) => {
  let token = req.body.token
  jwt.verify(token, process.env.SECRETKEY, function(err, decoded){
    if (err) {
      res.json({
        error: err,
        message: "FAILURE: token was not verified"
      })
    } else {
      query.getOneAccount(decoded.id)
        .then((data) => {
          res.json({
            token: jwt.sign(data, process.env.SECRETKEY),
            message: "SUCCESS: signup success full, new token has been generated"
          })
        })
    }
  })
})

module.exports = router;
