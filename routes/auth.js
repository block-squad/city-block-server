const express = require('express');
const router = express.Router();
const query = require('../db/query.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

router.post('/signup', (req, res, next) => {
  let newUser = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
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
        user: {
          id: data.id,
          username: data.username
        },
        message: "SUCCESS: account has been created, token has been generated"
      })
    })
    .catch((err) => {
      res.json({error: err})
    })
})

router.post('/signin', (req, res, next) => {
  if (req.body.token) {
    let token = req.body.token
    jwt.verify(token, process.env.SECRETKEY, function(err, decoded){
      if (err !== null) {
        res.json({error: err})
      } else {
        query.getOneAccount(decoded.id)
          .then((account) => {
            let data = {
              id: account[0].id,
              username: account[0].username,
              password: account[0].password,
              eth_wallet_key: account[0].eth_wallet_key
            }
            let newToken = jwt.sign(data, process.env.SECRETKEY)
            res.json({
              token: newToken,
              user: {
                id: data.id,
                username: data.username
              },
              message: "SUCCESS: sign in verified, a new token has been generated"
            })
          })
      }

    })
  } else if (req.body.username && req.body.password) {
    query.getAllAccounts()
      .then((accounts) => {
        let account = accounts.filter((e) => {
          return e.username == req.body.username;
        })
        if (account.length == 0) {
          res.json({
            message: "incorrect username"
          })
        } else {
          bcrypt.compare(req.body.password, account[0].password, (err, response) => {
            if (response) {
              let data = {
                id: account[0].id,
                username: account[0].username,
                password: account[0].password,
                eth_wallet_key: account[0].eth_wallet_key
              }
              let token = jwt.sign(data, process.env.SECRETKEY)
              res.json({
                token: token,
                user: {
                  id: data.id,
                  username: data.username
                },
                message: "SUCCESS: sign in verified, a new token has been generated"
              })
            } else {
              res.json({
                message: "incorrect password"
              })
            }
          })

        }
      })
  }

})


module.exports = router;
